import React from 'react'
import './AuthButton.css'  
import { useNavigate } from 'react-router-dom';
interface buttonProps{
  text: 'Giriş Yap'|'Kayıt Ol',
  cls: string
}
function AuthButton(props: buttonProps) {
  const navigate=useNavigate();
    const buttonClicked=()=>{
      switch(text){
        case 'Giriş Yap': navigate('/login'); break;
        case 'Kayıt Ol': navigate('/register'); break;
      }
        
    }
  const {text, cls} = props
  return (
    <>
        <input className={'btn ' + cls} type="button" value={text} onClick={buttonClicked}/>
    </>
  )
}

export default AuthButton