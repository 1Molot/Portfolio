import style from './Footer.module.css';
import styleContainer from "../common/styles/Container.module.css";
import React from "react";
import {Title} from "../common/components/title/Title";
import GitHub from "../assets/img/GitHub.svg";
import LinkedIn from "../assets/img/LinkedIn.svg";
import Telegram from "../assets/img/Telegram.svg";
import Instagram from "../assets/img/Instagram.svg";
import {Reveal} from "../common/Reveal/Reveal";


export const Footer = () => {

    const iconFooter = [{
        img: `${GitHub}`,
        link: 'https://github.com/1Molot',
        alt: 'GitHub'
    }, {
        link: 'https://www.linkedin.com/in/%D0%BC%D0%B0%D0%BA%D1%81%D0%B8%D0%BC-%D1%81%D0%B8%D0%BD%D1%8C%D0%BA%D0%B5%D0%B2%D0%B8%D1%87-747892281/',
        img: `${LinkedIn}`,
        alt: 'LinkedIn'
    }, {
        link: 'https://t.me/Molot4',
        img: `${Telegram}`,
        alt: 'Telegram'
    }, {
        link: 'https://www.instagram.com/invites/contact/?i=sek373t35q4j&utm_content=8ei8ab8',
        img: `${Instagram}`,
        alt: 'Instagram'
    }]

    return (
        <footer className={style.footerBlock}>
            <Reveal>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Title text={'Sinkevich Maksim'}/>
                <ul className={style.footersCentre}>
                    {
                        iconFooter.map((el, index) => {
                            return (
                                <li key={index}>
                                    <a target={'_blank'} href={el.link}>
                                        {/*{el.title}*/}
                                        <img style={{width: 80, height: 50}} src={el.img} alt={el.alt}/>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
                <p className={style.rights}>©2023 All rights reserved</p>
            </div>
                </Reveal>
        </footer>
    )
}