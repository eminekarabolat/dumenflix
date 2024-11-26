import React from 'react'
import { useNavigate } from 'react-router-dom';
interface TabProps{
    position: 'left' | 'right' | 'middle',
    text: string
    
}
function Tab(props: TabProps) {
    const {position, text} = props
    const isLeft = (position === 'left')
    const isRight = (position === 'right')
    const navigate=useNavigate();
  const navigasyon=()=>{
    switch(text){
      case 'Ana Sayfa': navigate('/')
      break;
      case 'Keşfet': navigate('/kesfet')
      break;
      default: console.log('???')
    }
    
  }
  return (
    <div className="col dumen-header-tab  d-grid p-0" style={isLeft? {borderBottomLeftRadius: '10px'}: (isRight? {borderBottomRightRadius: '10px'}: {})}>
                <input onClick={navigasyon} className='btn dumen-header-tab-item ' type="button" value={text} />
                </div>
  )
}

export default Tab