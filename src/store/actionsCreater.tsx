import { Action, Hotel } from "./mainReducer"

export const setHotels = (payload: Action) => {
    return {
        type: 'SET_HOTELS',
        payload: payload
    }
}

export const fetchHotels = () => {
    return {
        type: 'FETCH_HOTELS'
    }
}

export const setSearchingParametr = (payload: {city: string, amountDays: string, date: string}) => {
    return {
        type: 'SET_NEW_SEARCHING_PARAMETR',
        data: payload
    }
}

export const toggleFavoritesHotel = (hotel: Hotel) => {
    return {
        type: 'TOGGLE_LIKE',
        hotel: hotel
    }
}