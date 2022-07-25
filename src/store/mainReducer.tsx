import getDate, { getDateOut } from '../otherFuncs/getDate'
import toggleLikeHotel from '../otherFuncs/toggleLikeHotel'
import contains from '../otherFuncs/contains'
import removeFavorite from '../otherFuncs/removeFavorite'

const getTokenFromLocal = (): any => {
    return localStorage.getItem('token') || null
}

type Geo = {
    lat: number,
    lon: number
}

type Location = {
    country: string,
    geo: Geo,
    name: string,
    state: null
}

export type Hotel = {
    hotelId: number,
    hotelName: string,
    location: Location,
    locationId: number,
    priceAvg: number,
    priceFrom: number
    pricePercentile: any,
    stars: number,
    like?: boolean
}

export type InitialState = {
    hotels: Array<Hotel>,
    favoritesHotels: Array<Hotel>,
    choosenCity: string,
    amountOfDays: number | string,
    carousel: Array<string>,
    checkIn: string,
    checkOut: string,
    token: string
}

export type Action = {
    payload: Array<Hotel>,
    date: string,
    choosenCity: string,
    amountOfDays: number | string,
    type: string,
    data: {
        city: string,
        amountDays: string,
        date: string
    },
    hotel: Hotel,
    index: number,
    token: string
}

const initialState: InitialState = {
    hotels: [],
    favoritesHotels: [],
    choosenCity: 'Москва',
    amountOfDays: 1,
    checkIn: getDate(),
    checkOut: getDateOut(),
    carousel: [
        '/images/carousel1.svg',
        '/images/carousel2.svg',
        '/images/carousel3.svg',
        '/images/carousel4.svg'
    ],
    token: getTokenFromLocal()
}


const mainReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'SET_HOTELS': {

            let hotels = [];

            const favoritesHotels = state.favoritesHotels;

            const currentHotels = action.payload;

            if (favoritesHotels.length) {
                hotels = contains(currentHotels, favoritesHotels);
            } else {
                hotels = currentHotels;
            }

            return {
                ...state,
                hotels: [...hotels]
            }
        }

        case 'SET_NEW_SEARCHING_PARAMETR': {

            const date = new Date(action.data.date)

            const year = date.getFullYear();
            const month = (date.getMonth() + 1) < 10 ? 0 + (date.getMonth() + 1).toString() : date.getMonth() + 1;
            const day = date.getDate() < 10 ? '0'+date.getDate() : date.getDate()

            const dateCheckOut = new Date(action.data.date)
            dateCheckOut.setDate(dateCheckOut.getDate() + (+action.data.amountDays));

            console.log(dateCheckOut)
            const yearOut = dateCheckOut.getFullYear();
            const monthOut = (dateCheckOut.getMonth() + 1) < 10 ? 0 + (dateCheckOut.getMonth() + 1).toString() : dateCheckOut.getMonth() + 1;
            const dayOut = dateCheckOut.getDate() < 10 ? '0'+dateCheckOut.getDate() : dateCheckOut.getDate()

            return {
                ...state,
                choosenCity: action.data.city,
                checkIn: `${year}-${month}-${day}`,
                checkOut: `${yearOut}-${monthOut}-${dayOut}`,
                amountOfDays: action.data.amountDays
            }
        }

        case 'TOGGLE_LIKE': {

            const favoritesHotels = state.favoritesHotels;
            let hotels: any = []

            const newHotel = toggleLikeHotel(action.hotel)

            const currentHotels = state.hotels

            currentHotels[action.index] = newHotel;

            if (!state.favoritesHotels?.find((item) => item.hotelId === newHotel.hotelId)) {

                hotels = favoritesHotels!.concat(newHotel)
            } else if (state.favoritesHotels?.find((item) => item.hotelId === newHotel.hotelId)) {
                hotels = favoritesHotels?.filter((hotel) => hotel.hotelId !== newHotel.hotelId)
            }

            return {
                ...state,
                hotels: [...currentHotels],
                favoritesHotels: [...hotels]
            }
        }

        case 'SORT_RATING_FROM_MAX': {

            const hotels = state.favoritesHotels;

            hotels.sort((a, b) => b.stars - a.stars)

            return {
                ...state,
                favoritesHotels: [...hotels]
            }
        }

        case 'SORT_RATING_FROM_MIN': {

            const hotels = state.favoritesHotels;

            hotels.sort((a, b) => a.stars - b.stars)

            return {
                ...state,
                favoritesHotels: [...hotels]
            }
        }

        case 'SORT_PRICES_FROM_MAX': {
            const hotels = state.favoritesHotels;

            hotels.sort((a, b) => b.priceFrom - a.priceFrom)

            return {
                ...state,
                favoritesHotels: [...hotels]
            }
        }

        case 'SORT_PRICES_FROM_MIN': {
            const hotels = state.favoritesHotels;

            hotels.sort((a, b) => a.priceFrom - b.priceFrom)

            return {
                ...state,
                favoritesHotels: [...hotels]
            }
        }

        case 'REMOVE_FROM_FAVORITES': {

            let hotels: any = [];
            const currentHotels = state.hotels;
            let newCurrentHotels = [];
            const favoritesHotels = state.favoritesHotels;

            if (state.favoritesHotels?.find((item) => item.hotelId === action.hotel.hotelId)) {
                hotels = favoritesHotels?.filter((hotel) => hotel.hotelId !== action.hotel.hotelId)

                newCurrentHotels = removeFavorite(currentHotels, action.hotel)
            }

            return {
                ...state,
                favoritesHotels: [...hotels],
                hotels: [...newCurrentHotels],
            }

        }

        case 'LOGIN': {

            console.log(action.token)

            localStorage.setItem('token', action.token)

            return {
                ...state,
                token: action.token
            }
        }

        case 'LOGOUT': {
            return {
                ...state,
            }
        }

        default:
            return state;
    }
}

export default mainReducer;