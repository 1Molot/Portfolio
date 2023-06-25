import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import style from './Nav.module.css';
import ReactImg from "../assets/img/ReactImg.svg";
import {Fade} from "react-awesome-reveal";

export const Nav = () => {

    return (
        <div className={`${style.nav} ${styleContainer.container}`}>
            <div className={style.logo}>
                <img className={style.logoPhoto} src={ReactImg} alt={'logo'}/>
                <p className={style.textTyping}>Maksim Sinkevich</p>
            </div>
            <Fade direction={"top-left"}>
            <ul className={style.linksList}>
                <li><a href="#">Main</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contacts</a></li>
            </ul>
                </Fade>
        </div>
    )
}