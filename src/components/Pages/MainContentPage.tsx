import Aside from "../Aside/Aside";
import Main from "../Main/Main";
import Header from "../Header/Header";
import React from "react";

import classes from './MainContentPage.module.css'

const MainContentPage = () => {
    return (
        <React.Fragment>
            <div className={classes.main}>
                <Header />
                <div className={classes.content}>
                    <Aside />
                    <Main />
                </div>
            </div>
        </React.Fragment>
    )
}

export default MainContentPage;