import style from './Footer.module.css';
import styleContainer from "../common/styles/Container.module.css";
import React from "react";
import {Title} from "../common/components/title/Title";
import GitHub from "../assets/img/GitHub.svg";
import LinkedIn from "../assets/img/LinkedIn.svg";
import Telegram from "../assets/img/Telegram.svg";
import Instagram from "../assets/img/Instagram.svg";
import {Fade} from "react-awesome-reveal";


export const Footer = () => {

    const iconFooter = [{
        img: `${GitHub}`,
        link: 'https://github.com/1Molot',
        alt: 'GitHub'
    }, {
        link: '123',
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

            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Title text={'Sinkevich Maksim'}/>
                {/*<Fade direction={"top-left"}>*/}
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
                {/*</Fade>*/}
                <h4 className={style.rights}>©2023 All rights reserved</h4>
            </div>

        </footer>
    )
}