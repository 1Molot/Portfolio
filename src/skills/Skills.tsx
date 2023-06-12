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
import Tdd from "../assets/img/Tdd.svg";
import Material from "../assets/img/Material.svg";
import {Title, titlePropsType} from "../common/components/title/Title";


export const Skills = (props:titlePropsType) => {

    const Skills = [
        {
            title: 'JS',
            // description: 'My description',
            img: `${JS}`,
            alt: 'JS'
        }, {
            title: 'HTML',
            // description: 'My description',
            img: `${HTML}`,
            alt: 'HTML'
        }, {
            title: 'CSS',
            // description: 'My  description',
            img: `${CSS}`,
            alt: 'CSS'
        }, {
            title: 'React',
            // description: 'My description',
            img: `${ReactImg}`,
            alt: 'RImg'
        }, {
            title: 'Redux',
            // description: 'My description',
            img: `${ReImg}`,
            alt: 'Redux'
        }, {
            title: 'TypeScript ',
            // description: 'My description',
            img: `${TypeScript}`,
            alt: 'TypeScript'
        }, {
            title: 'GitHub ',
            // description: 'My description',
            img: `${GitHub}`,
            alt: 'GitHub'
        }, {
            title: 'RestApi ',
            // description: 'My description',
            img: `${RestApi}`,
            alt: 'RestApi'
        }, {
            title: 'Storybook ',
            // description: 'My description',
            img: `${Storybook}`,
            alt: 'Storybook'
        }, {
            title: 'Sass ',
            // description: 'My description',
            img: `${Sass}`,
            alt: 'Sass'
        }, {
            title: 'Tdd ',
            // description: 'My description',
            img: `${Tdd}`,
            alt: 'Tdd'
        }, {
            title: 'MaterialUi ',
            // description: 'My description',
            img: `${Material}`,
            alt: 'Material'
        }
    ]

    return (
        <section className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                {/*<div className={style.skilo}>*/}
                    <Title text={'Skills'}/>
                {/*</div>*/}

                {/*<h2 className={style.title}>Skills</h2>*/}
                <div className={style.skills}>
                    {Skills.map((el,index) => <Skill
                        key={index}
                        img={el.img} alt={el.alt} title={el.title}/>)}
                    {/*title={el.title} description={el.description}*/}
                </div>
            </div>
        </section>
    )
}