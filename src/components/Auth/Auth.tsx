import React, { useRef, useState } from 'react';
import classes from './Auth.module.css'

const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Auth = () => {

    const [isErrPass, setIsErrPass] = useState(false);

    const enteredLogin = useRef<HTMLInputElement>(null);
    const enteredPassword = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const login = enteredLogin.current!.value;
        const password = enteredPassword.current!.value;

        if (password.length < 8) {
            setIsErrPass(true)
            return
        }

        if(login.match(mailFormat) && password.length >= 8) {
            localStorage.setItem('token', `${login}`)
        }
    }
    return (
        <div className={classes.main}>
            <div className={classes.background}></div>
            <div className={classes.auth}>
                <h1 className={classes.title}>Simple Hotel Check</h1>
                <form onSubmit={submitHandler}>
                    <label className={classes.label}>Логин</label>
                    <input type='email' className={classes.input} ref={enteredLogin}></input>
                    <label className={classes.label}>Пароль</label>
                    <input type='password' className={classes.input} ref={enteredPassword}></input>
                    {isErrPass && <p>Ошибка! Пароль должен быть больше 8 символов</p>}
                    <button className={classes.button}>Войти</button>
                </form>
            </div>
        </div>
    )
}

export default Auth;