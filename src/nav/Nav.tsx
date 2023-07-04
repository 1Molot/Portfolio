import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import style from './Nav.module.css';
import ReactImg from "../assets/img/ReactImg.svg";
import {Link} from "react-scroll";
import {Reveal} from "../common/Reveal/Reveal";


export const Nav = () => {

    return (
        <div className={`${style.nav} ${styleContainer.container}`}>
            <div className={style.logo}>
                <img className={style.logoPhoto} src={ReactImg} alt={'logo'}/>
                <p className={style.textTyping}>Maksim Sinkevich</p>
            </div>
            <Reveal>
            <ul className={style.linksList}>
                <Link activeClass={style.active} to="main" spy={true} smooth={true} offset={2}
                      duration={500}>Main</Link>
                <Link activeClass={style.active} to="skills" spy={true} smooth={true} offset={2}
                      duration={500}>Skills</Link>
                <Link activeClass={style.active} to="projects" spy={true} smooth={true} offset={2}
                      duration={500}>Projects</Link>
                <Link activeClass={style.active} to="contacts" spy={true} smooth={true} offset={2}
                      duration={500}>Contacts</Link>
            </ul>
            </Reveal>
        </div>
    )
}