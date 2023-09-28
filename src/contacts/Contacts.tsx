import React, {KeyboardEvent} from 'react';
import style from './Contacts.module.css';
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/Title/Title";
import {Reveal} from "../common/components/Reveal/Reveal";
import {SubmitHandler, useForm} from "react-hook-form";
import emailjs, {EmailJSResponseStatus} from 'emailjs-com';
import {toast} from "react-toastify";


type contactFormType = {
    name: string;
    email: string;
    message: string;
};
export const Contacts = () => {

    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    const {
        register,
        handleSubmit,
        reset,
        getValues,
        formState: {errors}
    } = useForm<contactFormType>({
        defaultValues: {
            name: "",
            email: "",
            message: ""
        },
        mode: "all"
    });

    function keyEnter<T>(e: KeyboardEvent<T>) {
        const email = getValues('email')
        const name = getValues('name')
        const message = getValues('message')

        if(e.key === 'Enter') {
            onSubmit({email, name ,message})
        }
    }

    const onSubmit: SubmitHandler<contactFormType> = (data) => {

        const serviceId: string = 'service_ltklexe';
        const templateId: string = 'template_v9x5ah5';
        const publicKey: string = 'K-ssZwNTNRixNgoSU';

        emailjs.send(serviceId, templateId, data, publicKey).then(
            (result: EmailJSResponseStatus) => {
                console.log(result.text);
                toast.success("Thank you for your letter!");
            },
            (error: EmailJSResponseStatus) => {
                console.log(error.text);
            }
        );
        reset();
    };

        return (
            <section id="contacts" className={style.contactsBlock}>
                <Reveal>
                    <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                        <Title text={'Contacts'}/>

                        <form onSubmit={handleSubmit(onSubmit)} className={style.contactForm}>
                                    <input placeholder="Name" type="text" className={style.colorText}
                                           onKeyDown={keyEnter<HTMLInputElement>}
                                           {...register("name", {
                                               required: "The field is required",
                                               minLength: {
                                                   value: 3,
                                                   message: "The minimum length is 3 symbol",
                                               },
                                           })}
                                    />
                                    {errors.name && <p>{errors.name.message}</p>}
                                    <input placeholder="Email" type="text" className={style.colorText}
                                           onKeyDown={keyEnter<HTMLInputElement>}
                                           {...register("email", {
                                               required: "This field is required",
                                               pattern: {
                                                   value: emailPattern,
                                                   message: "Invalid email address",
                                               },
                                           })}
                                    />
                                    {errors.email && <p>{errors.email.message}</p>}
                                <textarea placeholder="Message" onKeyDown={keyEnter<HTMLTextAreaElement>} {...register("message", {required: true})} className={style.colorText}></textarea>
                                {errors.message && <p>This field is required</p>}
                                <button  className={style.submitBtn} type="submit">
                                    Send Message
                                </button>
                        </form>
                    </div>
                </Reveal>
            </section>
        )
    }
