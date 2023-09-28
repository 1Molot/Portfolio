import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {MainInform} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./woks/Projects";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";
import {GlobalToast} from "./common/components/GlobalToast/GlobalToast";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <MainInform/>
                <Skills/>
                <Projects/>
                {/*<Remote/>*/}
                <Contacts/>
            </main>
            <Footer/>
            <GlobalToast/>
        </div>
    );
}

export default App;
