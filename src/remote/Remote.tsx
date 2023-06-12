import React from 'react';
import style from './Remote.module.css';
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";


export const Remote = () => {

    return (
        <section className={style.remoteBlock}>
            <div className={`${styleContainer.container} ${style.remoteContainer}`}>
               {/*<Title text={'Considering remote work options'}/>*/}
                <h3 className={style.remo}>Considering Remote Work Options</h3>
                <form>
                <button type='submit' className={style.remoBtn}>Hire me</button>
                </form>
            </div>
        </section>
    )
}