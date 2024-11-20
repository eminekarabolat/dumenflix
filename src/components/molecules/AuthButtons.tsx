import React from 'react'
import AuthButton from '../atoms/AuthButton'

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