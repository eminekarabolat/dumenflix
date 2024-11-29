import React, { useEffect } from "react";
import Header from "../components/organisms/Header";
import HeaderTabs from "../components/molecules/HeaderTabs";
import Footer from "../components/organisms/Footer";
import ReactPlayer from "react-player";
import { IWatchingPage } from "../models/IWatchingPage";
import CardInfo from "../components/molecules/CardInfo";
import { IMovieCardResponse } from "../models/IMovieCardResponse";
import { IMovieDetailsResponse } from "../models/IMovieDetailsResponse";
import { useDispatch } from "react-redux";
import { DfDispatch, DfUseSelector } from "../store";
import { fetchGetMovieDetails } from "../store/features/movieSlice";
import { useParams } from "react-router-dom";



function Watching() {
    const {movieId} = useParams()
    const dispatch = useDispatch<DfDispatch>();
    

  const movieDetails = DfUseSelector(
    state=> state.movie.movieDetails
  )

  
    dispatch(fetchGetMovieDetails((movieId? +movieId: 0)))
    console.log(movieDetails)
   

  return (
    <div className="container">
      <div className="row">
        <Header />
      </div>
      <div className="row text-danger border-bottom border-danger"></div>
      <div className="row">
        <HeaderTabs />
      </div>
      <div
        className="row justify-content-center mt-2"
        style={{ backgroundColor: "rgb(40, 40, 50)", borderRadius: "26px" }}
      >
        <div className="row">
          <div className="col-9">
            <div className="p-4">
              <ReactPlayer
              url={movieDetails?.videoUrl}
                controls={true}
                width="100%"
                height="500px"
              />
            </div>
          </div>
          <div className="col-3">
            <div className="border mt-5" style={{ height: "400px" }}>
              <div className="m-3 text-center">
                Image
              </div>
              <div>
                CardInfo
              </div>
              <hr style={{ color: "red" }} />
              <div
                className="m-2 overflow-auto"
                style={{ color: "white", maxHeight: "120px" }}
              >
                Description
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
}

export default Watching;
