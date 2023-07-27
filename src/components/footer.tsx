import Cookies from 'universal-cookie';
import { useState, useEffect, lazy, Suspense } from 'react';
import { first_run, changeto_eng, changeto_gr } from './functions';

const cookies = new Cookies();

const Name_gr = lazy(() => import('./name_gr'));
const Name_eng = lazy(() => import('./name_eng'));
const Skills = lazy(() => import('./skills'));
const Portfolio_gr = lazy(() => import('./portfolio_gr'));
const Portfolio_eng = lazy(() => import('./portfolio_eng'));

/* function wait(time: number) {
    return new Promise(resolve => { setTimeout(resolve, time) })
} */

export const Footer = () => {
    const [text, set_text] = useState({
        home: "",
        knowledge: "",
        portfolio: "",
        contact: "",
    });

    const [page, set_page] = useState({
        location: "home",
    })

    const [language, set_language] = useState({
        language: "greek",
    })

    function change_text() {
        if (cookies.get('lang') === 'eng') {
            if (page.location === "home") {
                set_text(
                    {
                        home: "</G>",
                        knowledge: "<KNOWLEDGE>",
                        portfolio: "<PORTFOLIO>",
                        contact: "<CONTACT>",
                    })
            }
            if (page.location === "knowledge") {
                set_text(
                    {
                        home: "<G>",
                        knowledge: "</KNOWLEDGE>",
                        portfolio: "<PORTFOLIO>",
                        contact: "<CONTACT>",
                    })
            }
            if (page.location === "portfolio") {
                set_text(
                    {
                        home: "<G>",
                        knowledge: "<KNOWLEDGE>",
                        portfolio: "</PORTFOLIO>",
                        contact: "<CONTACT>",
                    })
            }
            if (page.location === "contact") {
                set_text(
                    {
                        home: "<G>",
                        knowledge: "<KNOWLEDGE>",
                        portfolio: "<PORTFOLIO>",
                        contact: "</CONTACT>",
                    })
            }
        }
        if (cookies.get('lang') === 'gr') {
            if (page.location === "home") {
                set_text(
                    {
                        home: "</Γ>",
                        knowledge: "<ΓΝΩΣΕΙΣ>",
                        portfolio: "<ΔΕΙΓΜΑΤΑ ΔΟΥΛΕΙΑΣ>",
                        contact: "<ΕΠΙΚΟΙΝΩΝΙΑ>",
                    })
            }
            if (page.location === "knowledge") {
                set_text(
                    {
                        home: "<Γ>",
                        knowledge: "</ΓΝΩΣΕΙΣ>",
                        portfolio: "<ΔΕΙΓΜΑΤΑ ΔΟΥΛΕΙΑΣ>",
                        contact: "<ΕΠΙΚΟΙΝΩΝΙΑ>",
                    })
            }
            if (page.location === "portfolio") {
                set_text(
                    {
                        home: "<Γ>",
                        knowledge: "<ΓΝΩΣΕΙΣ>",
                        portfolio: "</ΔΕΙΓΜΑΤΑ ΔΟΥΛΕΙΑΣ>",
                        contact: "<ΕΠΙΚΟΙΝΩΝΙΑ>",
                    })
            }
            if (page.location === "contact") {
                set_text(
                    {
                        home: "<Γ>",
                        knowledge: "<ΓΝΩΣΕΙΣ>",
                        portfolio: "<ΔΕΙΓΜΑΤΑ ΔΟΥΛΕΙΑΣ>",
                        contact: "</ΕΠΙΚΟΙΝΩΝΙΑ>",
                    })
            }
        }
    }


    function showbody() {
        if (cookies.get('lang') === 'eng') {
            document.title = 'George Marinos CV';
            if (page.location === 'home') {
                /*  document.querySelector<HTMLElement>(".home_eng")!.addEventListener("click", function (event) {
                    event.preventDefault()
                 }); */
                return <Name_eng />
            }
            if (page.location === 'knowledge') {
                return <Skills />
            }
            if (page.location === 'portfolio') {
                return <Portfolio_eng />
            }
        }

        else if (cookies.get('lang') === 'gr') {
            document.title = 'Γεώργιος Μαρίνος CV';
            if (page.location === 'home') {
                return <Name_gr />
            }
            if (page.location === 'knowledge') {
                return <Skills />
            }
            if (page.location === 'portfolio') {
                return <Portfolio_gr />
            }
        }
    }

    function disable_menu() {
        if (cookies.get('lang') === 'eng') {
            if (page.location === 'home') {
                document.querySelector<HTMLElement>(".home_eng")!.style.pointerEvents = "none";
                document.querySelector<HTMLElement>(".knowledge_eng")!.style.pointerEvents = "auto";
                document.querySelector<HTMLElement>(".portfolio_eng")!.style.pointerEvents = "auto";
                document.querySelector<HTMLElement>(".contact_eng")!.style.pointerEvents = "auto";
            }
            if (page.location === 'knowledge') {
                document.querySelector<HTMLElement>(".home_eng")!.style.pointerEvents = "auto";
                document.querySelector<HTMLElement>(".knowledge_eng")!.style.pointerEvents = "none";
                document.querySelector<HTMLElement>(".portfolio_eng")!.style.pointerEvents = "auto";
                document.querySelector<HTMLElement>(".contact_eng")!.style.pointerEvents = "auto";
            }
            if (page.location === 'portfolio') {
                document.querySelector<HTMLElement>(".home_eng")!.style.pointerEvents = "auto";
                document.querySelector<HTMLElement>(".knowledge_eng")!.style.pointerEvents = "auto";
                document.querySelector<HTMLElement>(".portfolio_eng")!.style.pointerEvents = "none";
                document.querySelector<HTMLElement>(".contact_eng")!.style.pointerEvents = "auto";
            }
            if (page.location === 'contact') {
                document.querySelector<HTMLElement>(".home_eng")!.style.pointerEvents = "auto";
                document.querySelector<HTMLElement>(".knowledge_eng")!.style.pointerEvents = "auto";
                document.querySelector<HTMLElement>(".portfolio_eng")!.style.pointerEvents = "auto";
                document.querySelector<HTMLElement>(".contact_eng")!.style.pointerEvents = "none";
            }
        }
        if (cookies.get('lang') === 'gr') {
            if (page.location === 'home') {
                document.querySelector<HTMLElement>(".home")!.style.pointerEvents = "none";
                document.querySelector<HTMLElement>(".knowledge")!.style.pointerEvents = "auto";
                document.querySelector<HTMLElement>(".portfolio")!.style.pointerEvents = "auto";
                document.querySelector<HTMLElement>(".contact")!.style.pointerEvents = "auto";
            }
            if (page.location === 'knowledge') {
                document.querySelector<HTMLElement>(".home")!.style.pointerEvents = "auto";
                document.querySelector<HTMLElement>(".knowledge")!.style.pointerEvents = "none";
                document.querySelector<HTMLElement>(".portfolio")!.style.pointerEvents = "auto";
                document.querySelector<HTMLElement>(".contact")!.style.pointerEvents = "auto";
            }
            if (page.location === 'portfolio') {
                document.querySelector<HTMLElement>(".home")!.style.pointerEvents = "auto";
                document.querySelector<HTMLElement>(".knowledge")!.style.pointerEvents = "auto";
                document.querySelector<HTMLElement>(".portfolio")!.style.pointerEvents = "none";
                document.querySelector<HTMLElement>(".contact")!.style.pointerEvents = "auto";
            }
            if (page.location === 'contact') {
                document.querySelector<HTMLElement>(".home")!.style.pointerEvents = "auto";
                document.querySelector<HTMLElement>(".knowledge")!.style.pointerEvents = "auto";
                document.querySelector<HTMLElement>(".portfolio")!.style.pointerEvents = "auto";
                document.querySelector<HTMLElement>(".contact")!.style.pointerEvents = "none";
            }
        }
    }

    useEffect(() => {
        first_run();
        disable_menu()
    }, []);

    useEffect(() => {
        change_text();
        showbody();
        disable_menu()
    }, [page, language]);

    return (
        <main>
            <header>
                <nav>
                    <button className='gr nownohover' onClick={() => {
                        cookies.set('lang', 'gr', { sameSite: true }); set_language({ language: "greek" }); changeto_gr()
                    }}>
                        <img src="gr_flag.webp" alt="EL" />
                    </button>
                    <span>||</span>
                    <button className='eng nowhover' onClick={() => {
                        cookies.set('lang', 'eng', { sameSite: true }); set_language({ language: "english" }); changeto_eng()
                    }}>
                        <img src="eng_flag.webp" alt="ENG" /* style={{ filter: "grayscale(95%)", height: "12px", objectFit: "cover", width: "22px" }} */ />
                    </button>
                </nav>
            </header>
            <section>
                <Suspense fallback={<span className='loader'>.........</span>}>
                    {showbody()}
                </Suspense>
            </section>
            <footer>
                <nav>
                    <button className='home' onClick={() => { set_page({ location: "home" }); }}>
                        {text.home}
                    </button>
                    <span>||</span>
                    <button className='knowledge' onClick={() => { set_page({ location: "knowledge" }); }}>
                        {text.knowledge}
                    </button>
                    <span>||</span>
                    <button className='portfolio' onClick={() => { set_page({ location: "portfolio" }); }}>
                        {text.portfolio}
                    </button>
                    <span>||</span>
                    <button className='contact' onClick={() => { set_page({ location: "contact" }); }}>
                        {text.contact}
                    </button>

                </nav>
            </footer>
        </main >
    )
}