import classes from './Favorites.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { InitialState } from '../../../store/mainReducer';

import Favorite from './Favorite';

import { sortByRatingFromMax, sortByRatingFromMin, sortByPricesFromMax, sortByPricesFromMin } from '../../../store/actionsCreater';

const Favorites = () => {

    const dispatch = useDispatch()
    const [isMaxMin, setIsMaxMin] = useState(true);
    const [isMaxMinRating, setIsMaxMinRating] = useState(true);

    const favoritesHotels = useSelector((state: InitialState) => {
        const hotels = state.favoritesHotels;
        if (!hotels) {
            return []
        } else {
            return hotels;
        }
    }
    )

    const sortRatingHandler = () => {
        if (isMaxMinRating) {
            dispatch(sortByRatingFromMax())
            setIsMaxMinRating(false)
        } else {
            dispatch(sortByRatingFromMin())
            setIsMaxMinRating(true)
        }
    }

    const sortPricesHandler = () => {
        if (isMaxMin) {
            dispatch(sortByPricesFromMax())
            setIsMaxMin(false)
        } else {
            dispatch(sortByPricesFromMin())
            setIsMaxMin(true)
        }

    }

    return (
        <div className={classes.favorites}>
            <span className={classes.title}>Избранное</span>
            <div className={classes.container}>
                <div onClick={sortRatingHandler} className={classes.toggle}>Рейтинг</div>
                <div onClick={sortPricesHandler} className={classes.toggle}>Цена</div>
            </div>
            <div>
                {favoritesHotels.map((hotel, index) => (
                    <Favorite key={index} hotel={hotel} />
                ))}
            </div>
        </div>
    )
}

export default Favorites;