import { create } from "domain";
import { IMovieCardResponse } from "../../models/IMovieCardResponse";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import apis from "../../config/RestApis";
import { IBaseResponse } from "../../models/IBaseResponse";
import { json } from "stream/consumers";
import { IMovieFilterRequest } from "../../models/IMovieFilterRequest";
import { IMovieDetailsResponse } from "../../models/IMovieDetailsResponse";

interface IMovieState{
    movieCardList: IMovieCardResponse[],
    isMovieCardListLoading: boolean,
    movieDetails: IMovieDetailsResponse | undefined,
    isMovieDetailsLoading: boolean
}

const initialMovieState: IMovieState = {
    movieCardList: [],
    isMovieCardListLoading: false,
    movieDetails: undefined,
    isMovieDetailsLoading: false
}

//fetch

export const fetchGetMovieDetails = createAsyncThunk(
    'movie-details/fetchGetMovieDetails',
    async(id: number | undefined)=>{
        return await fetch(apis.movieDetailsService + '/get-movie-details?id='+id).then(data=>data.json())
    }
)

export const fetchGetAllMovies = createAsyncThunk(
    'movie/fetchGetAllMovies',
    async()=>{
        return await fetch(apis.moviecardService+'/movie-list').then(data=>data.json())
    }
)

export const fetchGetMoviesByGenre = createAsyncThunk(
    'movie/fetchGetMoviesByGenre',
    async (genre: string | undefined) =>{
        return await fetch (apis.moviecardService+'/movie-by-genre?genre=' + genre).then(data=>data.json())
    }
)

export const fetchGetMoviesByTitle = createAsyncThunk(
    'movie/fetchGetMoviesByTitle',
    async (title: string| undefined)=>{
        return await fetch(apis.moviecardService+ '/movie-by-title?name='+title).then(data=>data.json())
    }
)
export const fetchGetMoviesByRating = createAsyncThunk(
    'movie/fetchGetMoviesByRating',
    async()=>{
        return await fetch(apis.moviecardService+ '/top-rated-movies').then(data=>data.json())
    }
)

export const fetchGetMoviesByFilter = createAsyncThunk(
    'movie/fetchGetMoviesByFilter',
    async(payload:IMovieFilterRequest)=>{
        return await fetch(apis.moviecardService+'/filter-movie',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(payload)
                }).then(data=>data.json()) 
        
    }

)

const movieSlice= createSlice({
    name:'post',
    initialState: initialMovieState,
    reducers:{
        
    },
    extraReducers:(build)=>{
        build.addCase(fetchGetAllMovies.pending,(state)=>{state.isMovieCardListLoading=true})
        build.addCase(fetchGetAllMovies.fulfilled,(state,action: PayloadAction<IBaseResponse>)=>{
            state.isMovieCardListLoading = false;
            if(action.payload.code === 200){
                state.movieCardList = action.payload.data;
            }
        })
        build.addCase(fetchGetMoviesByGenre.pending,(state)=>{state.isMovieCardListLoading=true})
        build.addCase(fetchGetMoviesByGenre.fulfilled,(state,action: PayloadAction<IBaseResponse>)=>{
            state.isMovieCardListLoading = false;
            if(action.payload.code === 200){
                state.movieCardList = action.payload.data;
            }
        })
        build.addCase(fetchGetMoviesByTitle.pending,(state)=>{state.isMovieCardListLoading=true})
        build.addCase(fetchGetMoviesByTitle.fulfilled,(state,action: PayloadAction<IBaseResponse>)=>{
            state.isMovieCardListLoading = false;
            if(action.payload.code === 200){
                state.movieCardList = action.payload.data;
            }
        })
        build.addCase(fetchGetMoviesByRating.pending,(state)=>{state.isMovieCardListLoading=true})
        build.addCase(fetchGetMoviesByRating.fulfilled,(state,action: PayloadAction<IBaseResponse>)=>{
            state.isMovieCardListLoading = false;
            if(action.payload.code === 200){
                state.movieCardList = action.payload.data;
            }
        })

        build.addCase(fetchGetMoviesByFilter.pending,(state)=>{state.isMovieCardListLoading=true})
        build.addCase(fetchGetMoviesByFilter.fulfilled,(state,action: PayloadAction<IBaseResponse>)=>{
            state.isMovieCardListLoading = false;
            if(action.payload.code === 200){
                state.movieCardList = action.payload.data;
            }
        })
        build.addCase(fetchGetMovieDetails.pending,(state)=>{state.isMovieDetailsLoading=true})
        build.addCase(fetchGetMovieDetails.fulfilled,(state,action: PayloadAction<IBaseResponse>)=>{
            state.isMovieDetailsLoading = false;
            console.log('slice, movie: ', action.payload.data)
            if(action.payload.code === 200){
                state.movieDetails = action.payload.data;
            }
        })

    }
})

export default movieSlice.reducer;