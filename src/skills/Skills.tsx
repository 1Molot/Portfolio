import React from 'react';
import style from './Skills.module.css';
import styleContainer from './../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import JS from "../assets/img/JS.svg";
import HTML from "../assets/img/HTML.svg";
import CSS from "../assets/img/CSS.svg";
import ReactImg from "../assets/img/ReactImg.svg";
import ReImg from "../assets/img/ReImg.svg";
import TypeScript from "../assets/img/TypeScript.svg";
import GitHub from "../assets/img/GitHub.svg";
import RestApi from "../assets/img/RestApi.svg";
import Storybook from "../assets/img/Storybook.svg";
import Sass from "../assets/img/Sass.svg";
import Jest from "../assets/img/Jest.svg";
import Material from "../assets/img/Material.svg";
import {Title} from "../common/components/title/Title";


export const Skills = () => {

    const Skills = [
        {
            title: 'JS',
            img: `${JS}`,
            alt: 'JS'
        }, {
            title: 'HTML',
            img: `${HTML}`,
            alt: 'HTML'
        }, {
            title: 'CSS',
            img: `${CSS}`,
            alt: 'CSS'
        }, {
            title: 'React',
            img: `${ReactImg}`,
            alt: 'RImg'
        }, {
            title: 'Redux',
            img: `${ReImg}`,
            alt: 'Redux'
        }, {
            title: 'TypeScript ',
            img: `${TypeScript}`,
            alt: 'TypeScript'
        }, {
            title: 'GitHub ',
            img: `${GitHub}`,
            alt: 'GitHub'
        }, {
            title: 'RestApi ',
            img: `${RestApi}`,
            alt: 'RestApi'
        }, {
            title: 'Storybook ',
            img: `${Storybook}`,
            alt: 'Storybook'
        }, {
            title: 'Sass ',
            img: `${Sass}`,
            alt: 'Sass'
        }, {
            title: 'Jest ',
            img: `${Jest}`,
            alt: 'Tdd'
        }, {
            title: 'MaterialUi ',
            img: `${Material}`,
            alt: 'Material'
        }
    ]

    return (
        <section className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                    <Title text={'Skills'}/>
                <div className={style.skills}>
                    {Skills.map((el,index) => <Skill
                        key={index}
                        img={el.img} alt={el.alt} title={el.title}/>)}
                </div>
            </div>
        </section>
    )
}