import classes from './Favorites.module.css'

const Favorites = () => {
    return (
        <div className={classes.favorites}>
            <span className={classes.title}>Избранное</span>
            <div className={classes.container}>
                <div className={classes.toggle}>Рейтинг</div>
                <div className={classes.toggle}>Цена</div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Favorites;