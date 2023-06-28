import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import style from './Nav.module.css';
import ReactImg from "../assets/img/ReactImg.svg";
import {Fade} from "react-awesome-reveal";
import {Link} from "react-scroll";


export const Nav = () => {

    return (
        <div className={`${style.nav} ${styleContainer.container}`}>
            <div className={style.logo}>
                <img className={style.logoPhoto} src={ReactImg} alt={'logo'}/>
                <p className={style.textTyping}>Maksim Sinkevich</p>
            </div>
            {/*<Fade direction={"top-left"}>*/}
            <ul className={style.linksList}>
                {/*<li><a href="#main">Main</a></li>*/}
                {/*<li><a href="#skills">Skills</a></li>*/}
                {/*<li><a href="#projects">Projects</a></li>*/}
                {/*<li><a href="#contacts">Contacts</a></li>*/}
                <Link activeClass={style.active} to="main" spy={true} smooth={true} offset={2}
                      duration={500}>Main</Link>
                <Link activeClass={style.active} to="skills" spy={true} smooth={true} offset={2}
                      duration={500}>Skills</Link>
                <Link activeClass={style.active} to="projects" spy={true} smooth={true} offset={2}
                      duration={500}>Projects</Link>
                <Link activeClass={style.active} to="contacts" spy={true} smooth={true} offset={2}
                      duration={500}>Contacts</Link>
            </ul>
            {/*</Fade>*/}
        </div>
    )
}