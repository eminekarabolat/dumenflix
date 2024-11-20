import React from 'react'

function CardInfo() {
  return (
    <div style={{backgroundColor: 'transparent', borderBottomLeftRadius: '23px', borderBottomRightRadius: '23px'}}>
      <div>
        <label>Matrix</label>
      </div>
      <div>
        <label>10/10</label>
      </div>
      <div className='row'>
        <div className='col'>
        <label>Bilim-Kurgu</label>

        </div>
        <div className='col'>
        <label>Aksiyon</label>

        </div>
      </div>
      <div>
        <label>1999</label>
      </div>
    </div>
  )
}

export default CardInfo