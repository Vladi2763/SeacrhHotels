export const fetchHotels = (city, checkIn, checkOut) => {
    return (
        fetch(`http://engine.hotellook.com/api/v2/cache.json?location=${city}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}`)
        .then(responce => responce.json())
    )
}

