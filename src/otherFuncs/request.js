export const fetchHotels = (city, checkIn, checkOut) => {
  return fetch(
    `https://engine.hotellook.com/api/v2/cache.json?location=${city}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}`
  ).then((responce) => responce.json());
};
