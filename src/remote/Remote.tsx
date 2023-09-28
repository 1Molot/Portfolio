import React from 'react';
import style from './Remote.module.css';
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/Title/Title";

export const Remote = () => {

    return (
        <section className={style.remoteBlock}>
                <div className={`${styleContainer.container} ${style.remoteContainer}`}>
                    <Title text={'Considering Remote Project Options'}/>
                    <form>
                    <button className={style.remoBtn}>Hire me</button>
                    </form>
                </div>
        </section>
    )
}