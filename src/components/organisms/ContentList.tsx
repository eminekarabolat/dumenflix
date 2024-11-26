import React, { useEffect } from 'react'
import ContentCard from '../molecules/ContentCard'
import { IContentCard } from '../../models/IContentCard'
import { useNavigate, useParams } from 'react-router-dom'
import { DfDispatch, DfUseSelector } from '../../store'
import { useDispatch } from 'react-redux'
import { fetchGetAllMovies, fetchGetMoviesByGenre, fetchGetMoviesByTitle } from '../../store/features/movieSlice'
interface contentListProps{
  genre?: string,
  title?: string
}
function ContentList(props: contentListProps) {
  
  /*const {name, genre, productionYear, rating, imageUrl}: IContentCard  = {
    name: 'Matrix',
    genre: 'Aksiyon',
    productionYear: 1999,
    rating: 4,
    imageUrl: 'https://cdn-images-1.medium.com/v2/resize:fit:1600/1*heL-f8bPywxsNG2snNPIwQ.jpeg'
  }*/
    const {genre, title} = props
    const movieList = DfUseSelector(state => state.movie.movieCardList);
    const dispatch = useDispatch<DfDispatch>();
    useEffect(()=>{
      if (genre) dispatch(fetchGetMoviesByGenre(genre))
      else if (title) dispatch(fetchGetMoviesByTitle(title)) 
      else dispatch(fetchGetAllMovies());
    },[genre])
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