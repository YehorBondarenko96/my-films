import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { lazy } from "react";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { useDispatch, useSelector } from "react-redux";
import { searchForBackground } from "../redux/searchForStyles";
import { selectBackgroundImages } from "../redux/selectors";

const Home = lazy(() => import('./Home/Home'));
const RegisterForm = lazy(() => import("./RegisterForm/RegisterForm"));
const PageUsers = lazy(() => import('./PageUsers/PageUsers'));
const LoggedInOrNot = lazy(() => import('./LoggedInOrNot/LoggedInOrNot'));
const NotLoggedOrY = lazy(() => import('./NotLoggedOrY/NotLoggedOrY'));
const LogInForm = lazy(() => import('./LogInForm/LogInForm'));
const DetailsFilm = lazy(() => import('./DetailsFilm/DetailsFilm'));

export const App = () => {
  const dispatch = useDispatch();
  const bgImages = useSelector(selectBackgroundImages);
  const bgGeneral = bgImages[Math.floor(Math.random() * 20)];
  const imgForBackground = bgGeneral ? bgGeneral.img : 'https://lh3.googleusercontent.com/pw/ABLVV84w_pNrNk2EMyul9WEZQIGgWoLvREgHEC97b4Mf15Ks5Hoqt7v7nc07QVJrbIMlK2LWegS0dAQKL6yuKPxHGHqTDwlQOCxOMGTWtrhzl73nYIFv9CWK4h9QUB2dvOTMfXj-twNVuqOHLhczMnZRTAvECg=w1920-h1080-s-no-gm?authuser=0';

  useEffect(() => {
    dispatch(searchForBackground());
  }, [dispatch]);

  return (
    <div
      style={{
        background: '#202020',
        backgroundImage: `url(${imgForBackground})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        height: '100%',
        display: 'flex',
        fontSize: 20,
        color: '#fff',
        margin: 0,
        padding: 0,
        flex: 1
      }}
    >
      <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: "column",
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      }}>
  <Routes>
    <Route path="/" element={<SharedLayout/>}>
    <Route index element={<Home/>}/>
    <Route path="/register" element={<RegisterForm/>}/>
    <Route path="/login" element={
      <LoggedInOrNot redirectTo='/films' component={<LogInForm/>}/>
    }/>
          <Route path="/films" element={
            <NotLoggedOrY component={<PageUsers/>}/>
          }>
                <Route path="/films/:filmId" element={<DetailsFilm />} />
                <Route path="*" element={<Navigate to="/" />} /> 
          </Route>
  </Route>
  <Route path="*" element={<Navigate to="/" />} /> 
  </Routes>
</div>
    </div>
  )
};