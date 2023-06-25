import React from 'react';
import style from './Remote.module.css';
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";
import {Fade} from "react-awesome-reveal";

export const Remote = () => {

    return (
        <section className={style.remoteBlock}>
            <Fade>
                <div className={`${styleContainer.container} ${style.remoteContainer}`}>
                    <Title text={'Considering Remote Work Options'}/>
                    {/*<h3 className={style.remo}>Considering Remote Work Options</h3>*/}
                    <form>
                        <button className={style.remoBtn}>Hire me</button>
                    </form>
                </div>
            </Fade>
        </section>
    )
}