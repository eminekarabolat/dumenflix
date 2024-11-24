import React from 'react'
import AuthButton from '../atoms/AuthButton'
import { useNavigate } from 'react-router-dom'
import LoginPage from '../../page/LoginPage';

function AuthButtons() {
    
  return (
        <div className="d-flex justify-content-end">
            <div className="col-4">
                <AuthButton cls='dumen-button-login' text='Giriş Yap'/>
            </div>

            <div className="col-4">
                <AuthButton cls='dumen-button-register' text='Kayıt Ol'/>
            </div>
        </div>
  )
}

export default AuthButtons