import React from 'react'
import Icon from '../atoms/Icon'
import './Title.css'
function Title() {
  return (
    <div className="row align-items-center p-3">
        <Icon />
        <div className="col title-text">
            <label className='title-text-1'>Dümen</label>
            <label className="title-text-2">Flix</label>
        </div>
    </div>
  )
}

export default Title