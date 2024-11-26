import React, { useEffect } from 'react'
import ContentCard from '../molecules/ContentCard'
import { IContentCard } from '../../models/IContentCard'
import { useNavigate } from 'react-router-dom'
import { DfDispatch, DfUseSelector } from '../../store'
import { useDispatch } from 'react-redux'
import { fetchGetAllMovies } from '../../store/features/movieSlice'

function ContentList() {
  
  /*const {name, genre, productionYear, rating, imageUrl}: IContentCard  = {
    name: 'Matrix',
    genre: 'Aksiyon',
    productionYear: 1999,
    rating: 4,
    imageUrl: 'https://cdn-images-1.medium.com/v2/resize:fit:1600/1*heL-f8bPywxsNG2snNPIwQ.jpeg'
  }*/

    const movieList = DfUseSelector(state => state.movie.movieCardList);
    const dispatch = useDispatch<DfDispatch>();
    useEffect(()=>{
      dispatch(fetchGetAllMovies());
    },[])
    console.log(movieList)
  return (
    <div className='row mt-4 w-75 '>
      {
        movieList.map((movie,index)=>{
          return <ContentCard key={index} id={movie.id} title={movie.title} genre={movie.genre} rating={movie.rating} productionYear={movie.productionYear} imageUrl={movie.imageUrl}/>
          
        })
        
      }
        
    </div>
  )
}

export default ContentList