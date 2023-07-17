import React from 'react';
import style from './Projects.module.css';
import styleContainer from './../common/styles/Container.module.css'
import {Project} from "./Project/Project";
import {Title} from "../common/components/Title/Title";
import Social from "../assets/img/Social.jpg";
import Todo from "../assets/img/Todo.jpg";



export const Projects = () => {


    const projects = [{
        title: 'Social Network',
        description: 'Social Network is an online platform that allows people to create an account, interact with other people on the website. ',
        link: 'https://1molot.github.io/samurai-way-main/#/',
        img: `${Social}`,
        alt: 'Social'
    },
        {
            title: 'Task Manager',
            description: 'Task Manager  is an online platform for organizing your personal or Project tasks which can help you to increase the productivity, prioritise tasks, manage tasks effectively and improve time management.',
            link: 'https://1molot.github.io/TaskManagerRtk/#/',
            img: `${Todo}`,
            alt: 'Todo'
        }]

    return (
        <section id="projects" className={style.skillsBlock}>
                <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                    <Title text={'My Projects'}/>
                    <div className={style.skills}>
                        {projects.map((el, index) => <Project
                            link={el.link}
                            key={index}
                            img={el.img} alt={el.alt} title={el.title} description={el.description} />)}
                    </div>
                </div>

        </section>
    )
}