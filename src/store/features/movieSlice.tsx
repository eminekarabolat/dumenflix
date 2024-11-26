import { create } from "domain";
import { IMovieCardResponse } from "../../models/IMovieCardResponse";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import apis from "../../config/RestApis";
import { IBaseResponse } from "../../models/IBaseResponse";

interface IMovieState{
    movieCardList: IMovieCardResponse[],
    isMovieCardListLoading: boolean,
    title: string
}

const initialMovieState: IMovieState = {
    movieCardList: [],
    isMovieCardListLoading: false,
    title: ''
}

//fetch

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

const movieSlice= createSlice({
    name:'post',
    initialState: initialMovieState,
    reducers:{
        changeTitle: (state, action)=>{
            state.title = action.payload
        }
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
                console.log('title fulfilled: ', action.payload.data)
                state.movieCardList = action.payload.data;
            }
        })
    }
})
export const {
    changeTitle
} = movieSlice.actions
export default movieSlice.reducer;