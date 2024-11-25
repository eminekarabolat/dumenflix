import { configureStore } from "@reduxjs/toolkit";
import { movieSlice } from "./features";
import { useSelector } from "react-redux";

const store = configureStore({
    reducer: {
        movie: movieSlice
    }
})

export type DfDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const DfUseSelector = useSelector.withTypes<RootState>();
export default store;