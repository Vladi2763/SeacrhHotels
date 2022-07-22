import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Main from './components/Main/Main';
import classes from './App.module.css'
import { fetchHotels } from './store/actionsCreater';

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch()

  const data = useSelector((state: any) => state.favoritesHotels)
  console.log(data)

  useEffect(() => {
    dispatch(fetchHotels())
  })


  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.content}>
        <Aside />
        <Main />
      </div>
    </div>
  );
}

export default App;
