const getDate = () => {
    const dateCheckIn = new Date()
    dateCheckIn.setDate(dateCheckIn.getDate() + 1);

    const year = dateCheckIn.getFullYear();
    const month = (dateCheckIn.getMonth() + 1) < 10 ? 0 + (dateCheckIn.getMonth() + 1).toString() : dateCheckIn.getMonth() + 1;
    const day = dateCheckIn.getDate()

    return `${year}-${month}-${day}`
}
export default getDate

export const getDateOut = () => {
    const dateCheckIn = new Date()
    dateCheckIn.setDate(dateCheckIn.getDate() + 2);

    const year = dateCheckIn.getFullYear();
    const month = (dateCheckIn.getMonth() + 1) < 10 ? 0 + (dateCheckIn.getMonth() + 1).toString() : dateCheckIn.getMonth() + 1;
    const day = dateCheckIn.getDate()

    return `${year}-${month}-${day}`
}