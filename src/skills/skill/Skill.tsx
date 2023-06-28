import React from 'react';
import style from './Skill.module.css';
// import {Fade} from "react-awesome-reveal";
import {Fade} from "react-awesome-reveal";

export type skillPropsType = {
    title: string
    img: string | undefined
    alt: string
}

export const Skill = (props: skillPropsType) => {

    return (
        <div className={style.skill}>
            {/*<Fade direction={"down"}>*/}
            <div className={style.icon}>
                <img className={style.iconImg} src={props.img} alt={props.alt}/>
            </div>
            <p className={style.description}>{props.title}</p>
            {/*</Fade>*/}
        </div>
    )
}