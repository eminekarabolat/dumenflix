import React from 'react'
import './AuthButton.css'  
interface buttonProps{
  text: string,
  cls: string
}
function AuthButton(props: buttonProps) {
  const {text, cls} = props
  return (
    <>
        <input className={'btn ' + cls} type="button" value={text} />
    </>
  )
}

export default AuthButton