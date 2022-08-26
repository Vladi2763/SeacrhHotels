const toggleLikeHotel = (hotel) => {
  if (!hotel.like) {
    return {
      ...hotel,
      like: true,
    };
  } else if (hotel.like) {
    return {
      hotelId: hotel.hotelId,
      hotelName: hotel.hotelName,
      location: hotel.location,
      locationId: hotel.locationId,
      priceAvg: hotel.priceAvg,
      priceFrom: hotel.priceFrom,
      pricePercentile: hotel.pricePercentile,
      stars: hotel.stars,
    };
  }
};

export default toggleLikeHotel;
