import { Action, Hotel } from "./hotelsReducer";

export const setHotels = (payload: Action) => {
  return {
    type: "SET_HOTELS",
    payload: payload,
  };
};

export const fetchHotels = () => {
  return {
    type: "FETCH_HOTELS",
  };
};

export const setSearchingParametr = (payload: {
  city: string;
  amountDays: string;
  date: string | Date | null;
}) => {
  return {
    type: "SET_NEW_SEARCHING_PARAMETR",
    data: payload,
  };
};

export const toggleFavoritesHotel = (hotel: Hotel, index: number) => {
  return {
    type: "TOGGLE_LIKE",
    hotel: hotel,
    index: index,
  };
};

export const sortByRatingFromMax = () => {
  return {
    type: "SORT_RATING_FROM_MAX",
  };
};

export const sortByRatingFromMin = () => {
  return {
    type: "SORT_RATING_FROM_MIN",
  };
};

export const sortByPricesFromMax = () => {
  return {
    type: "SORT_PRICES_FROM_MAX",
  };
};

export const sortByPricesFromMin = () => {
  return {
    type: "SORT_PRICES_FROM_MIN",
  };
};

export const removeFromFavorites = (hotel: Hotel) => {
  return {
    type: "REMOVE_FROM_FAVORITES",
    hotel,
  };
};

export const loginPage = (token: string) => {
  return {
    type: "LOGIN",
    token,
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
