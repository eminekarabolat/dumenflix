import React, { useEffect } from 'react'
import{
    BrowserRouter, Route, Routes
} from 'react-router-dom'
import HomePage from './page/HomePage'
import LoginPage from './page/LoginPage'
import RegisterPage from './page/RegisterPage'
import Watching from './components/organisms/Watching'
import Kesfet from './page/Kesfet'
import { useDispatch } from 'react-redux'
import { DfDispatch, DfUseSelector } from './store'
import { fetchGetProfile, fetchLogin, userLogin } from './store/features/userSlice'

function Routerpage() {
  const dispatch = useDispatch<DfDispatch>();
  const isLogin = DfUseSelector(state=>state.user.isAuth);
  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token !== null){
      dispatch(userLogin())
      dispatch(fetchGetProfile())
    }
  })
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/:genre?' element={isLogin?<HomePage />:<LoginPage/>} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/watching' element={<Watching />} />
            <Route path= '/kesfet' element={<Kesfet/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Routerpage