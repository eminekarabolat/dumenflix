import React from 'react'
import CardInfo from './CardInfo'

function ContentCard() {
  return (
    <div className='col-3'>
        <div className="row">
            <img src="https://picsum.photos/50/100" alt="film afişi" style={{borderTopLeftRadius: '22px', borderTopRightRadius: '22px'
            }}/>
        </div>
        <div className="row">
            <CardInfo/>
        </div>
    </div>
  )
}

export default ContentCard