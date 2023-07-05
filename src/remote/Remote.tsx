import React from 'react';
import style from './Remote.module.css';
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/Title/Title";
import {Fade} from "react-awesome-reveal";

export const Remote = () => {

    return (
        <section className={style.remoteBlock}>
            {/*<Fade direction={"down"}>*/}
                <div className={`${styleContainer.container} ${style.remoteContainer}`}>
                    <Title text={'Considering Remote Project Options'}/>
                    {/*<h3 className={style.remo}>Considering Remote Project Options</h3>*/}
                    <form>
                    <button className={style.remoBtn}>Hire me</button>

                    </form>
                    {/*<a className={style.remoBtn} href="tel:+375255101830">Hire me</a>*/}
                </div>
            {/*</Fade>*/}
        </section>
    )
}