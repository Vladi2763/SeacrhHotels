import classes from './Location.module.css'
import { useRef, useState } from 'react';

import MaterialUIPickers from './Calendar';
import { useDispatch, useSelector } from 'react-redux';

import { InitialState } from '../../../store/mainReducer';

import { setSearchingParametr, fetchHotels } from '../../../store/actionsCreater';

const Location = () => {

    
    const [dateCheckIn, setDateChekIn] = useState(new Date(useSelector((state: InitialState) => state.checkIn)).toISOString())
    const dispatch = useDispatch()

    const enteredCity = useRef<HTMLInputElement>(null);
    const enteredDays = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const checkIn = dateCheckIn;
        const city = enteredCity.current!.value;
        const amountDays = enteredDays.current!.value;

        dispatch(setSearchingParametr({city: city, amountDays: amountDays, date: checkIn}))

        dispatch(fetchHotels())
    }

    return (
        <div className={classes.location}>
            <form onSubmit={submitHandler}>
                <label className={classes.label}>Локация</label>
                <input className={classes.input} ref={enteredCity} type='text' defaultValue='Moscow'></input>
                <label className={classes.label}>Дата заселения</label>
                <MaterialUIPickers setDate={setDateChekIn}/>
                <label className={classes.label}>Количество дней</label>
                <input type='number' className={classes.input} ref={enteredDays} defaultValue='1'></input>
                <button className={classes.button}>Найти</button>
            </form>
        </div>
    )
}

export default Location;