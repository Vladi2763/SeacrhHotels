import classes from "./Favorites.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { MainReducer } from "../../../store/mainReducer";

import Favorite from "./Favorite";

import {
  sortByRatingFromMax,
  sortByRatingFromMin,
  sortByPricesFromMax,
  sortByPricesFromMin,
} from "../../../store/actionsCreater";

const Favorites = () => {
  const dispatch = useDispatch();
  const [isMaxMin, setIsMaxMin] = useState(true);
  const [isMaxMinRating, setIsMaxMinRating] = useState(true);

  const [stateRating, toggleStateRating] = useState(false);
  const [statePrice, toggleStatePrice] = useState(false);

  const favoritesHotels = useSelector((state: MainReducer) => {
    const hotels = state.hotels.favoritesHotels;
    if (!hotels) {
      return [];
    } else {
      return hotels;
    }
  });

  const sortRatingHandler = () => {
    toggleStateRating(true);
    toggleStatePrice(false);

    if (isMaxMinRating) {
      setIsMaxMinRating((prev) => !prev);
      dispatch(sortByRatingFromMax());
    }

    if (!isMaxMinRating) {
      dispatch(sortByRatingFromMin());
      setIsMaxMinRating((prev) => !prev);
    }
  };

  const sortPricesHandler = () => {
    toggleStateRating(false);
    toggleStatePrice(true);

    if (isMaxMin) {
      dispatch(sortByPricesFromMax());
      setIsMaxMin(false);
    } else {
      dispatch(sortByPricesFromMin());
      setIsMaxMin(true);
    }
  };

  return (
    <div className={classes.favorites}>
      <span className={classes.title}>Избранное</span>
      <div className={classes.container}>
        <div
          onClick={sortRatingHandler}
          className={
            stateRating
              ? classes.toggle + " " + classes.toggleActive
              : classes.toggle
          }
        >
          Рейтинг
        </div>
        <div
          onClick={sortPricesHandler}
          className={
            statePrice
              ? classes.toggle + " " + classes.toggleActive
              : classes.toggle
          }
        >
          Цена
        </div>
      </div>
      <div>
        {favoritesHotels.map((hotel, index) => (
          <Favorite key={index} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
