import React from 'react';
import style from './Title.module.css';

export type titlePropsType = {
    text: string
}

export const Title = (props: titlePropsType) => {

    const Titles = [{
        text: 'My Projects'
    }, {
        text: 'Skills'
    }, {
        text: 'Considering remote Project options'
    }, {
        text: 'Contacts'
    }, {
        text: 'Sinkevich Maksim'
    },
    ]

    return (
        <div className={style.title}>
            <h2>{props.text}</h2>
        </div>
    )
}