import classes from "./Main.module.css";
import Hotels from "./Hotels/Hotels";
import { useSelector } from "react-redux";
import Carousel from "./Hotels/Carousel";

import { MainReducer } from "../../store/mainReducer";

import changeDate from "../../otherFuncs/changeDate";

const Main = () => {
  const choosenCity = useSelector(
    (state: MainReducer) => state.hotels.choosenCity
  );
  const date = useSelector((state: MainReducer) => state.hotels.checkIn);
  const amountFavoritesHotels = useSelector(
    (state: MainReducer) => state.hotels.favoritesHotels.length
  );

  const checkIn = changeDate(date);

  return (
    <main className={classes.main}>
      <div className={classes.containerCity}>
        <div>
          <span className={classes.choosenCity}>Отели</span>
          <span className={classes.char}>{">"}</span>
          <span className={classes.choosenCity}>{choosenCity}</span>
        </div>
        <span className={classes.date}>
          {checkIn.day} {checkIn.month} {checkIn.year}
        </span>
      </div>
      <div className={classes.carousel}>
        <Carousel />
      </div>
      <span className={classes.countFavorites}>
        Добавлено в Избранное: {amountFavoritesHotels} отеля
      </span>
      <Hotels />
    </main>
  );
};

export default Main;
