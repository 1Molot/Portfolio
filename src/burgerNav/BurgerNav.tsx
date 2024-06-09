import React, {useEffect, useState} from 'react';
import styleContainer from "../common/styles/Container.module.css";
import style from './BurgerNav.module.css';
import ReactImg from "../assets/img/ReactImg.svg";
import {Link} from "react-scroll";
import BurgerIcon from ".././assets/img/BurgerIcon.svg";
import CloseIcon from ".././assets/img/CloseIcon.svg";

export const BurgerNav = () => {

    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

    useEffect(() => {
        if (menuIsOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [menuIsOpen]);

    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    const closeMenu = () => {
        setMenuIsOpen(false);
    };

    return (
        <div className={`${style.burgerNav} ${styleContainer.container}`}>
            <div className={style.logo}>
                <img className={style.logoPhoto} src={ReactImg} alt={'logo'}/>
                <p className={style.textTyping}>Maksim Sinkevich</p>
            </div>
            <div onClick={onBurgerBtnClick} className={style.burgerBtn}>{menuIsOpen ? <img src={CloseIcon} alt={'CloseIcon'}/> :
                <img src={BurgerIcon} alt={'BurgerIcon'}/>}</div>
            <ul className={menuIsOpen ? `${style.linksList} ${style.show}` : style.linksList}>
                <li>
                    <Link activeClass={style.active} to="main" spy={true} smooth={true} offset={2}
                          duration={500} onClick={closeMenu} >Main</Link>
                </li>
                <li>
                    <Link activeClass={style.active} to="skills" spy={true} smooth={true} offset={2}
                          duration={500} onClick={closeMenu} >Skills</Link>
                </li>
                <li>
                    <Link activeClass={style.active} to="projects" spy={true} smooth={true} offset={2}
                          duration={500} onClick={closeMenu} >Projects</Link>
                </li>
                <li>
                    <Link activeClass={style.active} to="contacts" spy={true} smooth={true} offset={2}
                          duration={500} onClick={closeMenu} >Contacts</Link>
                </li>
            </ul>
        </div>
    )
}
