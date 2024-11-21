import React from 'react'
import CardInfo from './CardInfo'
import { IContentCard } from '../../models/IContentCard'
import './ContentCard.css'


function ContentCard(props: IContentCard) {
  const {name,genre,rating, productionYear,imageUrl} = props;
  return (
    <div className="col-3 " >
          <div className='content-card'>
        <div className="row mt-4 ">
            <img src={imageUrl} alt="film afişi" style={{borderTopLeftRadius: '26px', borderTopRightRadius: '26px'
            }}/>
        </div>
        <div className="row">
            <CardInfo name={name} genre={genre} rating={rating} productionYear={productionYear}/>
        </div>
    </div>

    </div>

  )
}

export default ContentCard