import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Auth.module.css";

import { loginPage } from "../../store/actionsCreater";
import { useDispatch } from "react-redux";

const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isErrPass, setIsErrPass] = useState(false);
  const [isErrLogin, setIsErrLogin] = useState(false);

  const enteredLogin = useRef<HTMLInputElement>(null);
  const enteredPassword = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const login = enteredLogin.current!.value;
    const password = enteredPassword.current!.value;

    if (password.length < 8) {
      setIsErrPass(true);
    } else {
      setIsErrPass(false);
    }

    if (!login.match(mailFormat)) {
      setIsErrLogin(true);
    } else {
      setIsErrLogin(false);
    }

    if (login.match(mailFormat) && password.length >= 8) {
      dispatch(loginPage(login));
    } else {
      return;
    }

    navigate("/main");
  };
  return (
    <div className={classes.main}>
      <div className={classes.background}></div>
      <div className={classes.auth}>
        <h1 className={classes.title}>Simple Hotel Check</h1>
        <form onSubmit={submitHandler}>
          <label
            className={
              isErrLogin
                ? classes.label + " " + classes.errorValue
                : classes.label
            }
          >
            Логин
          </label>
          <input
            type="email"
            className={
              isErrLogin
                ? classes.input + " " + classes.errorValue
                : classes.input
            }
            ref={enteredLogin}
          ></input>
          {isErrLogin && (
            <p className={classes.error}>Ошибка! Неверный формат email</p>
          )}
          <label
            className={
              isErrPass
                ? classes.label + " " + classes.errorValue
                : classes.label
            }
          >
            Пароль
          </label>
          <input
            type="password"
            className={
              isErrPass
                ? classes.input + " " + classes.errorValue
                : classes.input
            }
            ref={enteredPassword}
          ></input>
          {isErrPass && (
            <p className={classes.error}>
              Ошибка! Пароль должен быть больше 8 символов
            </p>
          )}
          <button className={classes.button}>Войти</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
