import classes from './Main.module.css'
import Hotels from './Hotels/Hotels';
import { useSelector } from 'react-redux';

import { InitialState } from '../../store/mainReducer';

import changeDate from '../../otherFuncs/changeDate';

const Main = () => {

    const choosenCity = useSelector((state: InitialState) => state.choosenCity)
    const date = useSelector((state: InitialState) => state.checkIn)
    const amountFavoritesHotels = useSelector((state : InitialState) => state.favoritesHotels.length)

    const checkIn = changeDate(date)
    
    return (
        <main className={classes.main}>
            <div className={classes.containerCity}>
                <span className={classes.choosenCity}>Отели {'>'} {choosenCity}</span>
                <span className={classes.date}>{checkIn.day} {checkIn.month} {checkIn.year}</span>
            </div>
            <div id='carousel'>
            </div>
            <span className={classes.countFavorites}>Добавлено в Избранное: {amountFavoritesHotels} отеля</span>
            <Hotels />
        </main>
    )
}

export default Main;