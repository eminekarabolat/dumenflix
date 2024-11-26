import React, { useEffect } from 'react'
import './FilterDropDowns.css'
import { useDispatch } from 'react-redux';
import { DfDispatch, DfUseSelector } from '../../store';

function FilterDropDowns() {
    const dispatch = useDispatch<DfDispatch>();
    const movieList = DfUseSelector(state =>state.movie.movieCardList);
   useEffect(()=>{
    
    })
  return (

    <>
        <div className="dropdown col text-center ">
  <button className=" dropdown-toggle filter-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Türler
  </button>
  <select className="dropdown-menu filter-button ">
    <option><a className="dropdown-item">Action</a></option>
    <option><a className="dropdown-item" href="#">Another action</a></option>
    <option><a className="dropdown-item" href="#">Something else here</a></option>
  </select>
</div>

 
<div className="dropdown col text-center">
  <button className=" dropdown-toggle filter-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Yapım Yılı 
  </button>
  <ul className="dropdown-menu filter-button ">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>

 
<div className="dropdown col text-center">
  <button className=" dropdown-toggle filter-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Rating
  </button>
  <ul className="dropdown-menu filter-button ">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
        <div></div>
    </>
    
  )
}

export default FilterDropDowns