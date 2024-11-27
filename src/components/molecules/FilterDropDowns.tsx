import React, { useEffect, useState } from 'react'
import './FilterDropDowns.css'
import { useDispatch } from 'react-redux';
import { DfDispatch, DfUseSelector } from '../../store';
import { fetchGetMoviesByFilter } from '../../store/features/movieSlice';
import { IMovieFilterRequest } from '../../models/IMovieFilterRequest';
import ContentList from '../organisms/ContentList';



function FilterDropDowns() {

    const genres=['Aksiyon', 'Drama', 'Komedi', 'Gerilim', 'Bilim_Kurgu', 'Korku', 'Macera']
    const ratings=[1,2,3,4,5];
    const dispatch = useDispatch<DfDispatch>();
    const movieList = DfUseSelector(state =>state.movie.movieCardList);
    const [selectedGenre, setSelectedGenre] = useState('Aksiyon');
    const [selectedRating, setSelectedRating] = useState<number|string>('4');
    const [minProductionYear, setMinProductionYear] = useState('1980');
    const [maxProductionYear, setMaxProductionYear] = useState('2024');
    
    

   

    const filter = ()=>{
      const filterParameters:IMovieFilterRequest={
        genre:selectedGenre,
        minProductionYear:parseInt(minProductionYear),
        maxProductionYear:parseInt(maxProductionYear),
        rating:Number(selectedRating)
      }
      dispatch(fetchGetMoviesByFilter(filterParameters))
    }

    console.log(movieList)
    return (
      <>
      <div className="dropdown col text-center mt-4 header-dropdown  ">
            <button className="dropdown-toggle button-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {selectedGenre}
            </button>
            <ul className="dropdown-menu ul-dropdown ">
        {
          genres.map((genre,index)=>{
            return <li>
               <button className="dropdown-item li-dropdown" onClick={() => setSelectedGenre(genre)}>
                  {genre}
                </button>
              </li>
          })
        }
         </ul> 
        </div>


        <div className="col text-center ">
          <label style={{color:'white'}} className="form-label">
            Min Yapım Yılı
          </label>
          <input type="number" className="form-control" placeholder="1980" min={1980} max={2024} value={minProductionYear} onChange={(e) => setMinProductionYear(e.target.value)}/>
        </div>

        <div className="col text-center">
          <label style={{color:'white'}}  className="form-label">
            Max Yapım Yılı
          </label>
          <input type="number" className="form-control" placeholder="2024" min={1980} max={2024} value={maxProductionYear} onChange={(e) => setMaxProductionYear(e.target.value)}/>
        </div>
        
        
        <div className="dropdown col text-center mt-4 header-dropdown">
            <button className="dropdown-toggle button-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {selectedRating}
            </button>
            <ul className="dropdown-menu ul-dropdown">
        {
          ratings.map((rating,index)=>{
            return <li>
               <button className="dropdown-item li-dropdown" onClick={() => setSelectedRating(rating)}>
                  {rating}
                </button>
              </li>
          })
        }
         </ul> 
        </div>

        <div className='text-center mt-2'>
          <input onClick={filter} type="button" className='btn btn-info ' value="Filtrele" style={{width:'200px'}}/>
        </div>
        
        <div>
          <ContentList/>
        </div>
        
      </>
    );
}

export default FilterDropDowns