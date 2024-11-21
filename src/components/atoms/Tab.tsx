import React from 'react'
interface TabProps{
    position: 'left' | 'right' | 'middle',
    text: string
    
}
function Tab(props: TabProps) {
    const {position, text} = props
    const isLeft = (position === 'left')
    const isRight = (position === 'right')
  return (
    <div className="col dumen-header-tab  d-grid p-0" style={isLeft? {borderBottomLeftRadius: '10px'}: (isRight? {borderBottomRightRadius: '10px'}: {})}>
                <input className='btn dumen-header-tab-item ' type="button" value={text} />
                </div>
  )
}

export default Tab