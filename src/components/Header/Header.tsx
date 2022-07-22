import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <span className={classes.title}>Simple Hotel Check</span>
            <div className={classes.container}>
                <span className={classes.text}>Выйти</span>
                <img className={classes.image} src='/images/exit.svg' alt='exit'></img>
            </div>
        </header>
    )
}

export default Header;