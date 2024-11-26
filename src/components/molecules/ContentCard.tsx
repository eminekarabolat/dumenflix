import React from 'react'
import CardInfo from './CardInfo'
import { IContentCard } from '../../models/IContentCard'
import './ContentCard.css'
import { useNavigate } from 'react-router-dom';
import { IMovieCardResponse } from '../../models/IMovieCardResponse';


function ContentCard(props: IMovieCardResponse) {
  const navigate=useNavigate();
  const {title,genre,rating, productionYear,imageUrl} = props;
  const filmIzle=()=>{
    navigate('/watching');
  }
  return (
    <div className="col-3 " >
          <div className='content-card' onClick={filmIzle} >
        <div className="row mt-4 ">
            <img src={imageUrl} alt="film afişi" style={{height:'200px', borderTopLeftRadius: '26px', borderTopRightRadius: '26px'
            }}/>
        </div>
        <div className="row">
            <CardInfo title={title} genre={genre} rating={rating} productionYear={productionYear}/>
        </div>
    </div>

    </div>

  )
}

export default ContentCard