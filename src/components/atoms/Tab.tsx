import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchGetAllMovies, fetchGetMoviesByRating } from '../../store/features/movieSlice';
import { DfDispatch } from '../../store';
interface TabProps{
    position: 'left' | 'right' | 'middle',
    text: string
    
}
function Tab(props: TabProps) {
    const {position, text} = props
    const isLeft = (position === 'left')
    const isRight = (position === 'right')
    const dispatch = useDispatch<DfDispatch>();
    const navigate=useNavigate();
  const navigasyon=()=>{
    switch(text){
      
      case 'Ana Sayfa': dispatch(fetchGetAllMovies()); navigate('/');
      break;
      case 'Keşfet': navigate('/kesfet')
      break;
      case 'En Yüksek Puanlı': dispatch(fetchGetMoviesByRating()); navigate('/');
      break;
      case 'Diziler': navigate('/diziler');
      break;
      case 'IMDb500': navigate('/imdb500')
      break;
      case 'En Popüler': navigate('/en-populer')
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