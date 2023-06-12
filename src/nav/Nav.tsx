import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import style from './Nav.module.css';


export const Nav = () => {


    return (

        <div className={`${style.nav} ${styleContainer.container}`}>

            {/*<div className={style.navLogo}>*/}
            {/*    <span>{'Maksim Sinkevich'}</span>*/}
            {/*    <div/>*/}
                <ul className={style.linksList}>
                    <li><a href="">Главная</a></li>
                    <li><a href="">Скиллы</a></li>
                    <li><a href="">Проекты</a></li>
                    <li><a href="">Контакты</a></li>
                </ul>

            </div>
            )
            }