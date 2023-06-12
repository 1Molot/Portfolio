import style from './Contacts.module.css';
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";


export const Contacts = () => {

    return (
        <section className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title text={'Contacts'}/>
                {/*<h3>Contacts</h3>*/}
                <form className={style.contactForm}>
                    {/*<label form={'Name'}></label>*/}
                    <input placeholder={'Name'} type='text'/>
                    {/*<label form={'Email'}></label>*/}
                    <input placeholder={'Email'} type='text'/>
                    <textarea placeholder={'Message'}/>
                    <button type='submit' className={style.submitBtn}>Send message</button>
                </form>


            </div>
        </section>
    )
}