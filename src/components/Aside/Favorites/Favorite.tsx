import { Hotel, InitialState } from "../../../store/mainReducer";
import { useDispatch, useSelector } from "react-redux";

import changeDate from "../../../otherFuncs/changeDate";
import { removeFromFavorites, toggleFavoritesHotel } from "../../../store/actionsCreater";

import BasicRating from "../../Main/Hotels/Rating";

import classes from './Favorite.module.css'


const Favorite: React.FC<{ hotel: Hotel }> = (props) => {

    const dispatch = useDispatch();
    const date = useSelector((state: InitialState) => state.checkIn);
    const amountDays = useSelector((state: InitialState) => state.amountOfDays);

    const checkIn = changeDate(date)

    const removeFavoriteHandler = (hotel: Hotel) => {
        dispatch(removeFromFavorites(hotel))
    }

    const price = props.hotel.priceFrom.toFixed(0)
    return (
        <div className={classes.favorite}>
            <div className={classes.containerName}>
                <span className={classes.name}>{props.hotel.hotelName}</span>
                <img onClick={() => removeFavoriteHandler(props.hotel)} src={props.hotel.like ? '/images/favoriteheart.svg' : '/images/heart.svg'} alt='heart'></img>
            </div>
            <div className={classes.containerDate}>
                <span className={classes.date}>{checkIn.day} {checkIn.month} {checkIn.year}</span>
                <span className={classes.char}>-</span>
                <span className={classes.date}>{amountDays} день</span>
            </div>
            <div className={classes.containerPrices}>
                <BasicRating rating={props.hotel.stars} />
                <div>
                    <span className={classes.priceText}>Price</span>
                    <span className={classes.price}>{price} ₽</span>
                </div>
            </div>
        </div>
    )
}

export default Favorite;