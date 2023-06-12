import style from './Footer.module.css';
import styleContainer from "../common/styles/Container.module.css";
import React from "react";
import {Title} from "../common/components/title/Title";
import GitHub from "../assets/img/GitHub.svg";
import LinkedIn from "../assets/img/LinkedIn.svg";
import Telegram from "../assets/img/Telegram.svg";
import Instagram from "../assets/img/Instagram.svg";

type FooterPropsType = {
    title: string
    // description:string
    img: string | undefined
    alt: string
}
export const Footer = (FooterPropsType: any) => {

    const iconFooter =    [{
            // title: 'GitHub',
            // description: 'My description',
            img: `${GitHub}`,
            link: 'https://github.com/1Molot',
            alt: 'GitHub'
        },{
            // title: 'LinkedIn',
            link: '123',
            // description: 'My description',
            img: `${LinkedIn}`,
            alt: 'LinkedIn'
        },{
            // title: 'Telegram',
            link: 'https://t.me/Molot4',
            // description: 'My description',
            img: `${Telegram}`,
            alt: 'Telegram'
        },{
            // title: 'Instagram',
            link: 'https://www.instagram.com/invites/contact/?i=sek373t35q4j&utm_content=8ei8ab8',
            // description: 'My description',
            img: `${Instagram}`,
            alt: 'Instagram'
        },]

    return (

        <footer className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                {/*<div className={style.name}>*/}
                <Title text={'Sinkevich Maksim'}/>
                {/*</div>*/}
                {/*<h3>Sinkevich Maksim</h3>*/}
                <ul className={style.footersCentre}>
                    {
                        iconFooter.map((el,index) => {
                            return(
                                <li key={index} >
                                    <a target={'_blank'} href={el.link}>
                                        {/*{el.title}*/}
                                        <img style={ { width: 80, height: 50 } } src={el.img} alt={el.alt}/>
                                    </a>
                                </li>
                            )

                        })
                    }

                </ul>
                <h4 className={style.rights}>©2023 All rights reserved</h4>
            </div>
        </footer>
    )
}