import React from 'react';
import style from './Projects.module.css';
import styleContainer from './../common/styles/Container.module.css'
import {Project} from "./Project/Project";
import {Title} from "../common/components/Title/Title";
import Social from "../assets/img/Social.jpg";
import Todo from "../assets/img/Todo.jpg";
import SeaFoods from "../assets/img/SeaFoods.jpg";
import LostJeans from "../assets/img/LostJeans.jpg";
import Plants from "../assets/img/Plants.jpg";
import Card from "../assets/img/Card.png";

export const Projects = () => {

    const projects = [{
        title: 'Social Network',
        description: 'Social Network is an online platform that allows people to create an account, interact with other people on the website. ',
        link: 'https://1molot.github.io/samurai-way-main/#/',
        img: `${Social}`,
        alt: 'SocialNetwork'
    },
        {
            title: 'Task Manager',
            description: 'Task Manager  is an online platform for organizing your personal or Project tasks which can help you to increase the productivity, prioritise tasks, manage tasks effectively and improve time management.',
            link: 'https://1molot.github.io/TaskManagerRtk/#/',
            img: `${Todo}`,
            alt: 'TaskManager'
        }, {
            title: 'Cards Manager',
            description: 'Cards Manager is an online platform for creating cards with useful tasks, taking surveys, and sharing them. ',
            link: 'https://cards-ek92bomjw-1molots-projects.vercel.app/login',
            img: `${Card}`,
            alt: 'CardsManager'
        },
        {
            title: 'SeaFoods',
            description: 'Mini online store for ordering seafood.',
            link: 'https://1molot.github.io/seafoods.github.io/',
            img: `${SeaFoods}`,
            alt: 'SeaFoods'
        },
        {
            title: 'LostJeans',
            description: 'Mini online store for ordering clothes, still in operation.',
            link: 'https://1molot.github.io/lost-jersey.github.io/',
            img: `${LostJeans}`,
            alt: 'LostJeans'
        },{
            title: 'Plants',
            description: 'Mini web application for advice on growing plants, still in work.',
            link: 'https://1molot.github.io/plants.github.io/',
            img: `${Plants}`,
            alt: 'Plants'
        }]

    return (
        <section id="projects" className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'My Projects'}/>
                <div className={style.skills}>
                    {projects.map((el, index) => <Project
                        link={el.link}
                        key={index}
                        img={el.img} alt={el.alt} title={el.title} description={el.description}/>)}
                </div>
            </div>
        </section>
    )
}
