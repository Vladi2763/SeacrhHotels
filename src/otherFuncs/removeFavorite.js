import toggleLikeHotel from "./toggleLikeHotel";

const removeFavorite = (currentHotels, favoriteHotel) => {
  let arr = [];

  for (let i = 0; i < currentHotels.length; i++) {
    if (currentHotels[i].hotelId === favoriteHotel.hotelId) {
      arr.push(toggleLikeHotel(currentHotels[i]));
    } else {
      arr.push(currentHotels[i]);
    }
  }
  return arr;
};

export default removeFavorite;
