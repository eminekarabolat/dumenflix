import React from 'react'
import Icon from '../atoms/Icon'
import './Title.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { DfDispatch } from '../../store'
import { fetchGetAllMovies } from '../../store/features/movieSlice'
function Title() {
  const navigate = useNavigate();
  const dispatch = useDispatch<DfDispatch>();

  const anasayfayaDon=()=>{
    dispatch(fetchGetAllMovies());
    navigate('/');
  }
  
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