import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { DfDispatch, DfUseSelector } from '../store'
import { fetchRegister } from '../store/features/userSlice'
import { IRegisterRequest } from '../models/IRegisterRequest'
import { useNavigate } from 'react-router-dom'

function RegisterPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const [email, setEmail] = useState('')
  const dispatch=useDispatch<DfDispatch>();
  const isRegisterSuccess=DfUseSelector(state=>state.user.isRegisterSuccess);
  const navigate=useNavigate();
  const registerParameters:IRegisterRequest={
    username: username,
    password: password,
    rePassword: rePassword,
    email: email
  }
  useEffect(()=>{
    
    if(isRegisterSuccess){
      navigate('/login');
    }
  },[isRegisterSuccess])

  const register=()=>{
    dispatch(fetchRegister(registerParameters))

    
  }
  
  return (
    <div className="container">
        <div className="col mt-5 ">
        <div className="row">
            <div className="col-6 mt-2">
                <img src="https://cdn.pixabay.com/photo/2019/02/24/18/30/pirate-4018168_640.png" alt="korsan" />
            </div>
            <div className="col-6 mt-2 text-center" style={{backgroundColor:'rgb(30,30,30)', borderRadius:'30px',boxShadow:' 0px 0px 50px 25px rgba(0,0,0,0.75)'}}>
                <img className='mb-4' src="../../../dumenflix-bg1.png" alt="dumenflix-logo" />
                <div style={{marginRight:'40px', marginLeft:'40px'}}><input onChange={(evt)=>setUsername(evt.target.value)} className='form-control mb-2'type="text" placeholder='Kullanıcı Adı'/></div>
                <div style={{marginRight:'40px', marginLeft:'40px'}}><input onChange={(evt)=>setEmail(evt.target.value)} className='form-control mb-2'type="email" placeholder='Email'/></div>
                <div style={{marginRight:'40px', marginLeft:'40px'}}><input onChange={(evt)=>setPassword(evt.target.value)} className='form-control mb-2'type="password" placeholder='Şifre'/></div>
                <div style={{marginRight:'40px', marginLeft:'40px'}}><input onChange={(evt)=>setRePassword(evt.target.value)} className='form-control mb-2'type="password" placeholder='Şifre'/></div>
                <div className='d-grid'><input style={{marginRight:'40px', marginLeft:'40px'}} onClick={register} className='btn btn-success' type="button" value="Kayıt Ol" /></div>
                <div className='mt-2'><a style={{color:'white',textDecoration:'none'}} href="/login">Zaten bir hesabın var mı ?</a></div>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default RegisterPage