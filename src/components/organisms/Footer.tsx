import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className="col footer  mt-2" style={{padding:'5px',  borderRadius: '26px'}}>
        <div className="row ">
        <div className="col text-center mt-2">
          <h5 style={{color:'rgb(255,255,255)', fontWeight:'bold'}}>Yapımda emeği geçenler</h5>
          <a className='communication-links' href="https://github.com/harunsakin1" target='_blank'>Harun SAKIN</a><br />
          <a className='communication-links' href="https://github.com/ErgunEmirhan" target='_blank'>Emirhan ERGÜN</a><br />
          <a className='communication-links' href="https://github.com/eminekarabolat" target='_blank'>Emine KARABOLAT</a><br />
          <a className='communication-links' href="https://github.com/mehmetcann28" target='_blank'>Mehmet Can KARAHAN</a>
       </div>
       <div className="col text-center">
        <img style={{width:'150px',height:'150px'}} src="../../../dumenflix-bg.png" alt="dumenflix-logo" />
       </div>
       <div className="col text-center mt-2">     
        <h5 style={{color:'rgb(255,255,255)', fontWeight:'bold'}}>Bizimle para kazanın !</h5>
        <a className='communication-links' href="mailto:dumenflix@gmail.com?subject=DumenFlix%20Cevirmenlik%20Basvurusu">Çevirmenlik başvurusu</a><br />
        <a className='communication-links' href="mailto:dumenflix@gmail.com?subject=DumenFlix%20Reklam%20Basvurusu">Reklam Ver</a>

       </div>
        </div>
      

    </div>
  )
}

export default Footer