import BasicRating from "../../Rating";

import { useSelector, useDispatch } from "react-redux";
import changeDate from "../../../otherFuncs/changeDate";

import classes from './Hotel.module.css'
import { InitialState, Hotel as HotelType } from "../../../store/mainReducer";

import { toggleFavoritesHotel } from "../../../store/actionsCreater";

const Hotel: React.FC<{ name: string, price: number, stars: number, hotel: HotelType, index: number }> = (props) => {
    const dispatch = useDispatch()

    const date = useSelector((state: InitialState) => state.checkIn);
    const amountDays = useSelector((state: InitialState) => state.amountOfDays);

    const checkIn = changeDate(date)
    const price = props.price.toFixed(0)

    const likeToggleHandler = (hotel: HotelType, index: number) => {
        dispatch(toggleFavoritesHotel(hotel, index))
    }
    
    return (
        <div className={classes.hotel}>
            <div className={classes.containerImg}>
                <img className={classes.image} src='/images/hotel.svg' alt='hotel'></img>
            </div>
            <div className={classes.container}>
                <div className={classes.containerName}>
                    <span className={classes.name}>{props.name}</span>
                    <img onClick={() => likeToggleHandler(props.hotel, props.index)} src={props.hotel.like ? '/images/favoriteheart.svg' : '/images/heart.svg'} alt='heart'></img>
                </div>
                <div className={classes.containerDate}>
                    <span className={classes.date}>{checkIn.day} {checkIn.month} {checkIn.year}</span>
                    <span className={classes.char}>-</span>
                    <span className={classes.date}>{amountDays} день</span>
                </div>
                <div className={classes.containerPrices}>
                    <BasicRating rating={props.stars} />
                    <div>
                        <span className={classes.priceText}>Price</span>
                        <span className={classes.price}>{price} ₽</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hotel;