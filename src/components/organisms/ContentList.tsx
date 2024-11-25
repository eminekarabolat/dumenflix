import React from 'react'
import ContentCard from '../molecules/ContentCard'
import { IContentCard } from '../../models/IContentCard'
import { useNavigate } from 'react-router-dom'

function ContentList() {
  
  const {name, genre, productionYear, rating, imageUrl}: IContentCard  = {
    name: 'Matrix',
    genre: 'Aksiyon',
    productionYear: 1999,
    rating: 4,
    imageUrl: 'https://cdn-images-1.medium.com/v2/resize:fit:1600/1*heL-f8bPywxsNG2snNPIwQ.jpeg'
  }
  
  return (
    
    <div className='row mt-4 w-75 '>
        <ContentCard name={name} genre={genre} rating={rating} productionYear={productionYear} imageUrl={imageUrl}/>
        <ContentCard name={name} genre={genre} rating={rating} productionYear={productionYear} imageUrl={imageUrl}/>
        <ContentCard name={name} genre={genre} rating={rating} productionYear={productionYear} imageUrl={imageUrl}/>
        <ContentCard name={name} genre={genre} rating={rating} productionYear={productionYear} imageUrl={imageUrl}/>
        <ContentCard name={name} genre={genre} rating={rating} productionYear={productionYear} imageUrl={imageUrl}/>
        <ContentCard name={name} genre={genre} rating={rating} productionYear={productionYear} imageUrl={imageUrl}/>
    </div>
  )
}

export default ContentList