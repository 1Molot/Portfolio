import React, {useEffect} from 'react';
import style from './Main.module.css';
import styleContainer from './../common/styles/Container.module.css'
import myPhoto from "../assets/img/myPhoto.jpg";

export const MainInform = () => {

const name =() => {
    let text = 'I am Maksim Sinkevich Front-end Developer'
    let content = document.querySelector('#content')

    // @ts-ignore
    for (let i in [...text]) {
        let letter = document.createElement('span')
        // @ts-ignore
        letter.textContent = [...text][i]
        // @ts-ignore
        if(letter.textContent.match(/\s/)) {
        }
        // @ts-ignore
        letter.style.animationDelay = i/10+'s'
        // @ts-ignore
        content?.appendChild &&  content?.appendChild(letter)
    }
}


useEffect(() => {
    name()
}, [])

    return (
        <section className={style.mainBlock}>

            <div className={`${style.mainContainer} ${styleContainer.container}`}>
                <div className={style.text}>
                    <div id="content"/>
            </div>

            <img className={style.photo} src={myPhoto} alt={'myPhoto'}>
            </img>
            {/*</div>*/}

        </div>
</section>
)
}