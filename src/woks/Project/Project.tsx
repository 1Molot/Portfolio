import React from 'react';
import style from './Project.module.css';
import {Fade} from "react-awesome-reveal";
import {Reveal} from "../../common/components/Reveal/Reveal";

export type WorkPropsType = {
    title: string
    description: string
    img: string | undefined
    alt: string
    link: string
}

export const Project = ({title, description, img, alt, link}: WorkPropsType) => {

    return (
        <Reveal>
            <div className={style.work}>
                <div className={style.imageWrapper}>
                    <img className={style.photo} src={img} alt={alt}/>
                    <a className={style.workBtn} target={'_blank'} href={link}>Look</a>
                    <div className={style.background}/>
                </div>
                <div className={style.workInfo}>
                    <h3 className={style.workTitle}>{title}</h3>
                    <p className={style.workDescription}>{description}</p>
                </div>
            </div>
        </Reveal>
    )
}