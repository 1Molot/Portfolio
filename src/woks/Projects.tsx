import React from 'react';
import style from './Projects.module.css';
import styleContainer from './../common/styles/Container.module.css'
import {Project} from "./Project/Project";
import {Title} from "../common/components/title/Title";
import Social from "../assets/img/Social.jpg";
import Todo from "../assets/img/Todo.jpg";



export const Projects = () => {


    const projects = [{
        title: 'Social Network',
        description: 'Social Network is an online platform that allows people to create an account, interact with other people on the website. ',
        img: `${Social}`,
        alt: 'Social'
    },
        {
            title: 'TodoList',
            description: 'TodoList  is an online platform for organizing your personal or Project tasks which can help you to increase the productivity, prioritise tasks, manage tasks effectively and improve time management.',
            img: `${Todo}`,
            alt: 'Todo'
        }]

    return (
        <section id="projects" className={style.skillsBlock}>
                <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                    <Title text={'My Projects'}/>
                    <div className={style.skills}>
                        {projects.map((el, index) => <Project
                            key={index}
                            img={el.img} alt={el.alt} title={el.title} description={el.description}/>)}
                    </div>
                </div>

        </section>
    )
}