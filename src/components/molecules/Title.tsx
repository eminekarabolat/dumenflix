import React from 'react'
import Icon from '../atoms/Icon'
import './Title.css'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
function Title() {
  const navigate=useNavigate();
  const anasayfayaDon=()=>{
    swal('Tıklandı.')
    navigate('/');
    
  }
  console.log('Sayfa render oldu')
  return (
    <div className="row align-items-center p-3 dumen-baslik" onClick={anasayfayaDon}  >
        <Icon />
        <div className="col title-text ">
            <span  className='title-text-1'>Dümen</span>
            <span className="title-text-2">Flix</span>
        </div>
    </div>
  )
}

export default Title