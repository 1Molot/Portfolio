import React from 'react';
import style from './Header.module.css';
import {Nav} from "../nav/Nav";
import {BurgerNav} from "../burgerNav/BurgerNav";

export const Header = () => {

    return (
        <header className={style.header}>
            <Nav/>
            <BurgerNav/>
        </header>
    )
}