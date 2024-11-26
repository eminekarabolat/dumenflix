import React from 'react'
import{
    BrowserRouter, Route, Routes
} from 'react-router-dom'
import HomePage from './page/HomePage'
import LoginPage from './page/LoginPage'
import RegisterPage from './page/RegisterPage'
import Watching from './components/organisms/Watching'
import Kesfet from './page/Kesfet'

function Routerpage() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/:genre?' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/watching' element={<Watching />} />
            <Route path= '/kesfet' element={<Kesfet/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Routerpage