
import AuthPage from './components/Pages/AuthPage';
import MainContentPage from './components/Pages/MainContentPage';

import { fetchHotels } from './store/actionsCreater';

import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react';
import { Outlet, Navigate, Routes, Route } from 'react-router-dom';

import { InitialState } from './store/mainReducer';

function App() {

  const Protected = () => {
    const isLoggedIn = useSelector((state: InitialState) => !!state.token)
    return isLoggedIn ? <Outlet /> : <Navigate to="/auth" />;
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHotels())
  }, [dispatch])


  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Protected />} >
          <Route path='/' element={<Navigate to="/main" />} />
          <Route path='/main' element={<MainContentPage />}></Route>
        </Route>
        <Route path='/auth' element={<AuthPage />} />
      </Routes>
    </React.Fragment>

  );
}

export default App;
