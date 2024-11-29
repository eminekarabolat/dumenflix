import React, { useState } from 'react'
import './NotFoundError.css'
function NotFoundError() {
    const[imgSrc, setImgSrc] = useState();
    const hoverImg = ()=>{

    }
  return (
    <div className='col' style={{color:'white'}}>
        <div className='row text-center not-found-title'  >
            <div className='flex-row d-flex' style={{marginInlineStart:'7vw', marginTop:'2vh'}}>
                <h1 style={{fontSize: '60px', fontWeight:'bold'}}>4</h1>
                <a href="/"><img src="/dumenflix-bg1.png" alt="0" style={{width:'85px'}} /></a>
                <h1 style={{fontSize: '60px', fontWeight:'bold'}}>4</h1>
                <h1 style={{fontSize: '60px', fontWeight:'bold', marginInlineStart:'30px'}}>Not Found</h1>
            </div>
            <div className="col">
                <div className='flex-row d-flex' style={{marginInlineStart:'7vw', marginTop:'2vh'}}>
                    <p>Maalesef aradığınız sayfa bulunamadı.  Lütfen </p> 
                    <a className='ms-1' href="/"> Ana Sayfa</a>
                    <p>'ya dönünüz.</p>
                </div>
            </div>
            
           
        </div>

        <div className='text-center' style={{marginTop: '5vh'}}>
            <img  className='' src="https://pngimg.com/uploads/pirate/pirate_PNG1.png" style={{height: '500px'}}></img>
        </div>
        
    </div>
  )
}

export default NotFoundError