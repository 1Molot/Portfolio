import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {MainInform} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Works} from "./woks/Works";
import {Remote} from "./remote/Remote";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <MainInform/>
                <Skills text={"text"}/>
                <Works />
                <Remote />
                <Contacts/>
            </main>
            <Footer />
        </div>
    );
}

export default App;
