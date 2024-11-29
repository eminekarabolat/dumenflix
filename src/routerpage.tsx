import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import Watching from "./page/Watching";
import Kesfet from "./page/Kesfet";
import { useDispatch } from "react-redux";
import { DfDispatch, DfUseSelector } from "./store";
import {
  fetchGetProfile,
  fetchLogin,
  userLogin,
} from "./store/features/userSlice";
import NotFoundError from "./page/NotFoundError";
import Diziler from "./page/Diziler";
import Imdb500 from "./page/Imdb500";
import EnPopuler from "./page/EnPopuler";
import Genre from "./page/Genre";

function Routerpage() {
  const dispatch = useDispatch<DfDispatch>();
  const isLogin = DfUseSelector((state) => state.user.isAuth);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      dispatch(userLogin());
      dispatch(fetchGetProfile());
    }
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isLogin ? <HomePage /> : <LoginPage />}
        />
        <Route path="/genre/:genre" element={<Genre/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/watching/:movieId" element={<Watching />} />
        <Route path="/kesfet" element={<Kesfet />} />
        <Route path="/*" element={<NotFoundError />} />
        <Route path="/diziler" element={<Diziler />} />
        <Route path="/imdb500" element={<Imdb500 />} />
        <Route path="/en-populer" element={<EnPopuler />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routerpage;
