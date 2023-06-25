import React, {useCallback, useEffect} from 'react';
import style from './Main.module.css';
import styleContainer from './../common/styles/Container.module.css'
import myPhoto from "../assets/img/myPhoto.jpg";
import {loadFull} from "tsparticles";
import {Engine} from "tsparticles-engine";
import Particles from "react-tsparticles";
 import {Fade} from "react-awesome-reveal";



export const MainInform = () => {

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: any) => {
        await console.log(container);
    }, []);

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
        <section className={style.mainBlock}>
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
            <Fade direction={"top-left"}>
                <div className={`${style.mainContainer} ${styleContainer.container}`}>
                    <div className={style.text}>
                        <h2 className={style.h2Text}>Hi There</h2>
                        <div id="content"/>
                    </div>
                    <div className={style.photo}>
                        <img src={myPhoto} alt={'myPhoto'}>
                        </img>
                    </div>
                </div>
            </Fade>
        </section>
    )
}
