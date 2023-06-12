import React from 'react';
import style from './Work.module.css';

export type WorkPropsType = {
    title: string
    description: string
    img: string | undefined
    alt: string
}

export const Work = ({title, description, img, alt}: WorkPropsType) => {

    return (
        <div className={style.work}>
            <div className={style.imageWrapper}>
                <img className={style.photo} src={img} alt={alt}/>
                <a className={style.workBtn}>Look</a>
                <div className={style.background}/>
            </div>
            <div className={style.workInfo}>
                <h3 className={style.workTitle}>{title}</h3>
                <p className={style.workDescription}>{description}</p>
            </div>
        </div>
    )
}