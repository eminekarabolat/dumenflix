import React from 'react'
import './HeaderTabs.css'
import Tab from '../atoms/Tab'
function HeaderTabs() {
  return (
    <div className='col'>
        <div className="row">
            <Tab position='left' text='Ana Sayfa'/>
            <Tab position='middle' text='Keşfer'/>
            <Tab position='middle' text='Türler'/>
            <Tab position='middle' text='Diziler'/>
            <Tab position='middle' text='IMDb500'/>
            <Tab position='middle' text='En Popüler'/>
            <Tab position='right' text='En Yüksek Puanlı'/>
           
        </div>
    </div>
  )
}

export default HeaderTabs