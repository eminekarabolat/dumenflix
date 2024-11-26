import { create } from "domain";
import { IMovieCardResponse } from "../../models/IMovieCardResponse";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import apis from "../../config/RestApis";
import { IBaseResponse } from "../../models/IBaseResponse";

interface IMovieState{
    movieCardList: IMovieCardResponse[],
    isMovieCardListLoading: boolean,
}

const initialMovieState: IMovieState = {
    movieCardList: [],
    isMovieCardListLoading: false
}

//fetch

export const fetchGetAllMovies = createAsyncThunk(
    'movie/fetchGetAllMovies',
    async()=>{
        return await fetch(apis.moviecardService+'/movie-list').then(data=>data.json())
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
    }
})

export default movieSlice.reducer;