import { useSelector } from "react-redux";

import { MainReducer } from "../../../store/mainReducer";

import Hotel from "./Hotel";

import classes from "./Hotels.module.css";

const Hotels = () => {
  const hotels = useSelector((state: MainReducer) => state.hotels.hotels);
  return (
    <div className={classes.hotels}>
      {hotels.map((hotel, index: number) => (
        <Hotel
          key={index}
          index={index}
          name={hotel.hotelName}
          price={hotel.priceFrom}
          stars={hotel.stars}
          hotel={hotel}
        />
      ))}
    </div>
  );
};
export default Hotels;
