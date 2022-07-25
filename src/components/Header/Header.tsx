import classes from './Header.module.css'
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    const exitClickHandler = () => {
        localStorage.removeItem('token');
        navigate('/auth')
    }

    return (
        <header className={classes.header}>
            <span className={classes.title}>Simple Hotel Check</span>
            <div onClick={exitClickHandler} className={classes.container}>
                <span className={classes.text}>Выйти</span>
                <img className={classes.image} src='/images/exit.svg' alt='exit'></img>
            </div>
        </header>
    )
}

export default Header;