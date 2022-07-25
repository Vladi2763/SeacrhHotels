const changeDate = (data) => {

    const date = new Date(data)

    const day = date.getDate();
    let month = date.getMonth();
    const year = date.getFullYear();

    if (month === 0) {
        month = 'января'
    } else if (month === 1) {
        month = 'февраля'
    } else if (month === 2) {
        month = 'марта'
    } else if (month === 3) {
        month = 'апреля'
    } else if (month === 4) {
        month = 'мая'
    } else if (month === 5) {
        month = 'июня'
    } else if (month === 6) {
        month = 'июля'
    } else if (month === 7) {
        month = 'августа'
    } else if (month === 8) {
        month = 'сентября'
    } else if (month === 9) {
        month = 'октября'
    } else if (month === 10) {
        month = 'ноября'
    } else if (month === 11) {
        month = 'декабря'
    }

    return {
        day: day,
        month: month,
        year: year
    }
}

export default changeDate