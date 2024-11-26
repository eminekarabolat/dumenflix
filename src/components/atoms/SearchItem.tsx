import React, { useReducer, useState } from "react";
import './SearchItem.css'
import { useDispatch } from "react-redux";
import { DfDispatch, DfUseSelector } from "../../store";
import { fetchGetMoviesByTitle } from "../../store/features/movieSlice";
function SearchItem() {
  const dispatch = useDispatch<DfDispatch>();
  const {movieCardList} = DfUseSelector(state=> state.movie);
  const[query, setQuery] = useState('');
  const pressEnter = (event: React.KeyboardEvent)=>{
    if (event.key == 'Enter'){

      dispatch(fetchGetMoviesByTitle(query))
      setQuery('');
    
    }
  }

  return (
      <div className="row search-bar align-items-center">
        <div className="col-1">
        <i className="fa-solid fa-magnifying-glass search-item"></i>
        </div>
        <div className="col-11">
        <input value={query} onKeyDown={pressEnter} onChange={(evt)=>setQuery(evt.target.value)}  type="text" className="text-search" placeholder="Aramak istediğiniz filmin adını yazınız..." />
        </div>
        <div className="row justify-content-center mt-2" style={{backgroundColor: 'rgb(40, 40, 50)', borderRadius: '26px'}}>
        
      </div>
      </div>
      
  );
}

export default SearchItem;
