import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IRegisterRequest } from "../../models/IRegisterRequest"
import apis from "../../config/RestApis"
import { act } from "react"
import swal from "sweetalert"
import { IBaseResponse } from "../../models/IBaseResponse"
import { useNavigate } from "react-router-dom"
import { ILoginRequest } from "../../models/ILoginRequest"
import { IProfile } from "../../models/IProfile"


interface IUserState{
    isAuth:boolean,
    isLoginLoading: boolean,
    isRegisterSuccess:boolean,
    isRegisterLoading: boolean,
    isProfileLoading: boolean,
    user:IProfile|null
}

const initialUserState:IUserState = {
    isAuth:false,
    isLoginLoading: false,
    isRegisterSuccess:false,
    isRegisterLoading: false,
    isProfileLoading: false,
    user:null
}

export const fetchRegister=createAsyncThunk(
    'user/fetchRegister',
    async (payload : IRegisterRequest)=>{
        const response =  await fetch(apis.userService+'/register',{
           method:'POST',
           headers:{
            'Content-Type': 'application/json'
           },
           body: JSON.stringify(payload)
        }).then(data=>data.json())
        return response;
    }
)

export const fetchLogin=createAsyncThunk(
    'user/fetchLogin',
    async (payload: ILoginRequest)=>{
        const response = await fetch(apis.userService+'/dologin',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(payload)
        }).then(data=>data.json())
        return response;
    }
)

export const fetchGetProfile=createAsyncThunk(
    'user/fetchGetProfile',
    async()=>{
        return await fetch(apis.userService+'/get-profile?token='+localStorage.getItem('token')).then(data=>data.json())
    }
)

const userSlice = createSlice({
    name:'user',
    initialState:initialUserState,
    reducers:{
        userLogout(state){
            state.isAuth=false;
        },
        userLogin(state){
            state.isAuth=true;
        }
    },
    extraReducers:(build)=>{
            build.addCase(fetchRegister.pending,(state)=>{
                state.isRegisterLoading=true;
            })
            build.addCase(fetchRegister.fulfilled,(state,action:PayloadAction<IBaseResponse>)=>{
                console.log(action.payload)
                if(action.payload.code===200){
                    swal('Başarılı', 'Üyelik işlemi başarı ile tamamlanmıştır', 'success');
                    state.isRegisterSuccess=true;
                }
                else{
                    swal('Hata!', action.payload.message, 'error');
                    state.isRegisterSuccess=false;
                }
                state.isRegisterLoading=false;
            })
            build.addCase(fetchLogin.pending,(state)=>{
                state.isLoginLoading=true;
            })
            build.addCase(fetchLogin.fulfilled,(state,action:PayloadAction<IBaseResponse>)=>{
                if(action.payload.code===200){
                    localStorage.setItem('token',action.payload.data);
                    state.isAuth=true;
                }
                else{
                    swal('Hata!', action.payload.message, 'error');                   
                }
                
                state.isLoginLoading=false;
            })
            build.addCase(fetchGetProfile.pending,(state)=>{
                state.isProfileLoading=true
            })
            build.addCase(fetchGetProfile.fulfilled,(state,action:PayloadAction<IBaseResponse>)=>{
                state.isProfileLoading=false
                if(action.payload.code===200){
                    state.user=action.payload.data
                }
                
            })
    }
})
export const  {userLogin,userLogout} = userSlice.actions
export default userSlice.reducer;