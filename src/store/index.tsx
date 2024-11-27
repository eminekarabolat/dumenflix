import { configureStore } from "@reduxjs/toolkit";
import { movieSlice,userSlice } from "./features";
import { useSelector } from "react-redux";

const store = configureStore({
    reducer: {
        movie: movieSlice,
        user: userSlice
    }
})

export type DfDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const DfUseSelector = useSelector.withTypes<RootState>();
export default store;