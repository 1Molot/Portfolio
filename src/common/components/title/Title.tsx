import React from 'react';
import style from './Title.module.css';
import {skillPropsType} from "../../../skills/skill/Skill";


export type titlePropsType = {
    text:string
}

export const Title = (props:titlePropsType) => {

    const Titles = [{
        text: 'My Projects'
    },{
        text: 'Skills'
    },{
        text: 'Considering remote work options'
    },{
        text: 'Contacts'
    },{
        text: 'Sinkevich Maksim'
    },
    ]

    return (

        <div className={style.title}>
            <h2>{props.text}</h2>
        </div>
    )
}