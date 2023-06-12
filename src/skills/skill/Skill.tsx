import React from 'react';
import style from './Skill.module.css';


export type skillPropsType = {
    title: string
    // description: string
    img: string | undefined
    alt: string
}

export const Skill = (props: skillPropsType) => {

    return (
        <div className={style.skill}>
            <div className={style.icon}>
                <img className={style.iconImg} src={props.img} alt={props.alt}/>
            </div>
            {/*<h3>{props.title}</h3>*/}
            <p className={style.description}>{props.title}</p>
            {/*{props.description}*/}
        </div>
    )
}