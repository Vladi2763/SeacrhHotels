import getDate, { getDateOut } from '../otherFuncs/getDate'

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
    stars: number
}

export type InitialState = {
    hotels: Array<Hotel>,
    favoritesHotels?: Array<Hotel>,
    choosenCity: string,
    amountOfDays: number | string,
    carousel: Array<string>,
    checkIn: string,
    checkOut: string,
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
    hotel: Hotel
}

const initialState: InitialState = {
    hotels: [],
    favoritesHotels: [],
    choosenCity: 'Moscow',
    amountOfDays: 1,
    checkIn: getDate(),
    checkOut: getDateOut(),
    carousel: [
        '/images/carousel1.svg',
        '/images/carousel2.svg',
        '/images/carousel3.svg',
        '/images/carousel4.svg'
    ]
}


const mainReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'SET_HOTELS': {
            return {
                ...state,
                hotels: [...action.payload]
            }
        }

        case 'SET_NEW_SEARCHING_PARAMETR': {

            const date = new Date(action.data.date)

            const year = date.getFullYear();
            const month = (date.getMonth() + 1) < 10 ? 0 + (date.getMonth() + 1).toString() : date.getMonth() + 1;
            const day = date.getDate()


            const dateCheckOut = new Date(action.data.date)
            dateCheckOut.setDate(dateCheckOut.getDate() + (+action.data.amountDays));

            const yearOut = dateCheckOut.getFullYear();
            const monthOut = (dateCheckOut.getMonth() + 1) < 10 ? 0 + (dateCheckOut.getMonth() + 1).toString() : dateCheckOut.getMonth() + 1;
            const dayOut = dateCheckOut.getDate()

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
            let hotels: Array<Hotel> | any = []

            if (!state.favoritesHotels?.find((item) => item.hotelId === action.hotel.hotelId)) {

                hotels = favoritesHotels!.concat(action.hotel)
            } else if (state.favoritesHotels?.find((item) => item.hotelId === action.hotel.hotelId)) {
                hotels = favoritesHotels?.filter((hotel) => hotel.hotelId !== action.hotel.hotelId)
            }

            return {
                ...state,
                favoritesHotels: [...hotels]
            }
        }

        default:
            return state;
    }
}

export default mainReducer;