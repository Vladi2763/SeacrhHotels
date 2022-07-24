import toggleLikeHotel from "./toggleLikeHotel"

const contains = (where, what) => {
    let arr = []
    for (let i = 0; i < where.length; i++) {
        for (let j = 0; j < what.length; j++) {
            if (where[i].hotelId === what[j].hotelId) {
                arr.push(toggleLikeHotel(where[i]))
            } 
        }
    }

    for (let i = 0; i < where.length; i++) {
        for (let j = 0; j < what.length; j++) {
            if (!arr.find((hotel) => hotel.hotelId === where[i].hotelId)) {
                arr.push(where[i])
            }
        }
    }
    return arr;
}

export default contains;