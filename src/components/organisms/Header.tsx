import React, { useEffect } from "react";
import Title from "../molecules/Title";
import './Header.css'
import SearchItem from "../atoms/SearchItem";
import AuthButtons from "../molecules/AuthButtons";
import { useDispatch, useSelector } from "react-redux";
import { DfDispatch, DfUseSelector } from "../../store";
import { IProfile } from "../../models/IProfile";
import { fetchGetProfile, userLogout } from "../../store/features/userSlice";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const isAuth = DfUseSelector(state=>state.user.isAuth)
  const user=DfUseSelector(state=>state.user.user)
  const dispatch=useDispatch<DfDispatch>();
  useEffect(()=>{
    dispatch(fetchGetProfile())
  },[])

  const logout= async()=>{
    await localStorage.removeItem('token')
    dispatch(userLogout())
    
  }
  return (
    <div className="col">
        <div className="row header-div">
      <div className="col-3">
        <Title />
      </div>
      <div className="col-6 align-content-center">
        <SearchItem />
      </div>
      <div className="col-3  align-content-center">
        {
          isAuth
          ?
          
          <div className="row">
            <div className="col-6 text-center mt-3">
              <div className="row ms-3"><label style={{color:'white'}} >{'@'+user?.username}</label></div>
              <div className="mt-2 d-grid ms-4">
                <input type="button" value="Çıkış" className="btn btn-danger" onClick={logout}/>
              </div>
            </div>
            <div className="col-4 ms-4 ">
              <img style={{borderRadius:'50%'}} src="https://picsum.photos/100/100" alt="profile-photo" />
            </div>
            
          </div>
          :
          <AuthButtons/>
        }
        
      </div>
    </div>
    </div>
    
  );
}

export default Header;
