import React, {useCallback, useEffect} from 'react';
import style from './Main.module.css';
import styleContainer from './../common/styles/Container.module.css'
import myPhoto from "../assets/img/myPhoto.jpg";
import {loadFull} from "tsparticles";
import {Engine} from "tsparticles-engine";
import Particles from "react-tsparticles";
import {Tilt} from 'react-tilt'
import {Reveal} from "../common/components/Reveal/Reveal";

export const MainInform = () => {

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: any) => {
        await console.log(container);
    }, []);

    const defaultOptions = {
        reverse: false,
        max: 20,
        perspective: 1000,
        scale: 1.03,
        speed: 1000,
        transition: true,
        axis: null,
        reset: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
    }

    const name = () => {
        let text = 'I am Maksim Sinkevich Front-end Developer'
        let content = document.querySelector('#content')
        // @ts-ignore
        for (let i in [...text]) {
            let letter = document.createElement('span')
            letter.classList.add('animated-span')
            // @ts-ignore
            letter.textContent = [...text][i]
            // @ts-ignore
            if (letter.textContent.match(/\s/)) {
            }
            // @ts-ignore
            letter.style.animationDelay = i / 10 + 's'
            // @ts-ignore
            content?.appendChild && content?.appendChild(letter)
        }
    }

    useEffect(() => {
        name()
    }, [])


    return (
        <section id="main" className={style.mainBlock}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            resize: true,
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffa500",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.3,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.1,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: {min: 1, max: 5},
                        },
                    },
                    detectRetina: true,
                }}
            />
            <div className={`${style.mainContainer} ${styleContainer.container}`}>
                <div className={style.text}>
                    <Reveal>
                        <h2 className={style.h2Text}>Hi There</h2>
                        <div id="content"/>
                        <p className={style.pText}>Frontend developer with knowledge in software development.
                            Responsible, hardworking and interested in IT. Theoretical skills in designing, developing,
                            optimizing web applications. Understand and use the principles of OOP. Strong interpersonal
                            and communication skills, ability to work under pressure and manage multiple tasks, result
                            and goal oriented, willingness to work, attentive and easy learning. Easily find a common
                            language with everyone.
                        </p>
                    </Reveal>
                </div>
                <Tilt options={defaultOptions}>
                    <div className={style.photo}>
                        <Reveal>
                        <img src={myPhoto} alt={'myPhoto'}/>
                        </Reveal>
                    </div>
                </Tilt>
            </div>
        </section>
    )
}
