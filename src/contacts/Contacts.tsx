import style from './Contacts.module.css';
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";
import {Fade} from "react-awesome-reveal";


export const Contacts = () => {

    return (
        <section id="contacts" className={style.contactsBlock}>
            {/*<Fade direction={"down"}>*/}
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title text={'Contacts'}/>
                <form className={style.contactForm}>
                    <input placeholder={'Name'} type='text' className={style.colorText}/>
                    <input placeholder={'Email'} type='text' className={style.colorText}/>
                    <textarea placeholder={'Message'} className={style.colorText}/>
                    <button type='submit' className={style.submitBtn}>Send message</button>
                </form>
            </div>
            {/*</Fade>*/}
        </section>
    )
}