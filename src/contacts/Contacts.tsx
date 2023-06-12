import style from './Contacts.module.css';
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";


export const Contacts = () => {

    return (
        <section className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title text={'Contacts'}/>
                <form className={style.contactForm}>
                    <input placeholder={'Name'} type='text'/>
                    <input placeholder={'Email'} type='text'/>
                    <textarea placeholder={'Message'}/>
                    <button type='submit' className={style.submitBtn}>Send message</button>
                </form>
            </div>
        </section>
    )
}