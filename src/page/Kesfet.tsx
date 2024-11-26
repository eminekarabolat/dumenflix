import React, { useEffect } from "react";
import Title from "../components/molecules/Title";
import Header from "../components/organisms/Header";
import HeaderTabs from "../components/molecules/HeaderTabs";
import './HomePage.css'
import ContentList from "../components/organisms/ContentList";
import Footer from "../components/organisms/Footer";
import FilterDropDowns from "../components/molecules/FilterDropDowns";
import { useDispatch, useSelector } from "react-redux";
import { DfDispatch, DfUseSelector } from "../store";
import { fetchGetMoviesByFilter } from "../store/features/movieSlice";

function Kesfet() {
 

  return (
    <div className="container">
      <div className="row">
        <Header />
      </div>
      <div className="row text-danger border-bottom border-danger"></div>
      <div className="row">
        <HeaderTabs />
      </div>
      <div className="row justify-content-around py-4 mt-2 rounded-2" style={{backgroundColor:' rgb(35, 35, 40)'}}>;
        <FilterDropDowns/>
      
      </div>

      <div className="row">
        <Footer/>
      </div>
    </div>
  );
}

export default Kesfet;
