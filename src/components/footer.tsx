import Cookies from 'universal-cookie';
import { useState, useEffect, lazy, Suspense } from 'react';
//import { Name, Name_eng } from './name';
//import { Skills, Skills_eng } from './skills';

const cookies = new Cookies();

const Name_gr = lazy(() => import('./name_gr'));
const Name_eng = lazy(() => import('./name_eng'));
const Skills_gr = lazy(() => import('./skills'));

/* function wait(time: number) {
    return new Promise(resolve => { setTimeout(resolve, time) })
} */

const Footer = (props: any) => {
    const [text, set_text] = useState({
        home: "",
        knowledge: "",
        portfolio: "",
        contact: "",
    });

    const [location, set_location] = useState({
        location: "home",
    })

    const [language, set_language] = useState({
        language: "greek",
    })

    function change_text() {
        if (cookies.get('lang') === 'eng' && location.location === "home") {
            set_text(
                {
                    home: "</G>",
                    knowledge: "<KNOWLEDGE>",
                    portfolio: "<PORTFOLIO>",
                    contact: "<CONTACT>",
                })
        }
        if (cookies.get('lang') === 'gr' && location.location === "home") {
            set_text(
                {
                    home: "</Γ>",
                    knowledge: "<ΓΝΩΣΕΙΣ>",
                    portfolio: "<ΔΕΙΓΜΑΤΑ ΔΟΥΛΕΙΑΣ>",
                    contact: "<ΕΠΙΚΟΙΝΩΝΙΑ>",
                })
        }
        if (cookies.get('lang') === 'eng' && location.location === "knowledge") {
            set_text(
                {
                    home: "<G>",
                    knowledge: "</KNOWLEDGE>",
                    portfolio: "<PORTFOLIO>",
                    contact: "<CONTACT>",
                })
        }
        if (cookies.get('lang') === 'gr' && location.location === "knowledge") {
            set_text(
                {
                    home: "<Γ>",
                    knowledge: "</ΓΝΩΣΕΙΣ>",
                    portfolio: "<ΔΕΙΓΜΑΤΑ ΔΟΥΛΕΙΑΣ>",
                    contact: "<ΕΠΙΚΟΙΝΩΝΙΑ>",
                })
        }
        if (cookies.get('lang') === 'eng' && location.location === "portfolio") {
            set_text(
                {
                    home: "<G>",
                    knowledge: "<KNOWLEDGE>",
                    portfolio: "</PORTFOLIO>",
                    contact: "<CONTACT>",
                })
        }
        if (cookies.get('lang') === 'gr' && location.location === "portfolio") {
            set_text(
                {
                    home: "<Γ>",
                    knowledge: "<ΓΝΩΣΕΙΣ>",
                    portfolio: "</ΔΕΙΓΜΑΤΑ ΔΟΥΛΕΙΑΣ>",
                    contact: "<ΕΠΙΚΟΙΝΩΝΙΑ>",
                })
        }
        if (cookies.get('lang') === 'eng' && location.location === "contact") {
            set_text(
                {
                    home: "<G>",
                    knowledge: "<KNOWLEDGE>",
                    portfolio: "<PORTFOLIO>",
                    contact: "</CONTACT>",
                })
        }
        if (cookies.get('lang') === 'gr' && location.location === "contact") {
            set_text(
                {
                    home: "<Γ>",
                    knowledge: "<ΓΝΩΣΕΙΣ>",
                    portfolio: "<ΔΕΙΓΜΑΤΑ ΔΟΥΛΕΙΑΣ>",
                    contact: "</ΕΠΙΚΟΙΝΩΝΙΑ>",
                })
        }
    }


    function showbody() {
        if (cookies.get('lang') === 'eng') {
            document.title = 'George Marinos CV';
            if (location.location === 'home') {
                return <Name_eng />
            }

            /*  if (location.location === 'knowledge') {
                 document.title = 'Γεώργιος Μαρίνος CV';
                 return <Skills_eng />
             } */
        }

        else if (cookies.get('lang') === 'gr') {
            if (location.location === 'home') {
                return <Name_gr />
            }
            if (location.location === 'knowledge') {
                return <Skills_gr />
            }
        }
    }


    function changeto_eng() {
        document.querySelector<HTMLElement>(".gr")!.classList.add("nowhover");
        document.querySelector<HTMLElement>(".eng")!.classList.remove("nowhover");
        document.querySelector<HTMLElement>(".eng")!.classList.add("nownohover");

        document.querySelector<HTMLElement>(".home")!.classList.remove("home_no_anime");
        document.querySelector<HTMLElement>(".knowledge")!.classList.remove("knowledge_no_anime");
        document.querySelector<HTMLElement>(".portfolio")!.classList.remove("portfolio_no_anime");
        document.querySelector<HTMLElement>(".contact")!.classList.remove("contact_no_anime");
        document.querySelector<HTMLElement>(".home")!.classList.add("home_eng_no_anime");
        document.querySelector<HTMLElement>(".knowledge")!.classList.add("knowledge_eng_no_anime");
        document.querySelector<HTMLElement>(".portfolio")!.classList.add("portfolio_eng_no_anime");
        document.querySelector<HTMLElement>(".contact")!.classList.add("contact_eng_no_anime");
        document.querySelector<HTMLElement>(".home")!.classList.add("home_eng");
        document.querySelector<HTMLElement>(".knowledge")!.classList.add("knowledge_eng");
        document.querySelector<HTMLElement>(".portfolio")!.classList.add("portfolio_eng");
        document.querySelector<HTMLElement>(".contact")!.classList.add("contact_eng");
        document.querySelector<HTMLElement>(".home_eng_no_anime")!.classList.remove("home");
        document.querySelector<HTMLElement>(".knowledge_eng_no_anime")!.classList.remove("knowledge");
        document.querySelector<HTMLElement>(".portfolio_eng_no_anime")!.classList.remove("portfolio");
        document.querySelector<HTMLElement>(".contact_eng_no_anime")!.classList.remove("contact");
    }

    function changeto_gr() {
        document.querySelector<HTMLElement>(".eng")!.classList.add("nowhover");
        document.querySelector<HTMLElement>(".gr")!.classList.remove("nowhover");
        document.querySelector<HTMLElement>(".gr")!.classList.add("nownohover");

        document.querySelector<HTMLElement>(".home_eng")!.classList.remove("home_eng_no_anime");
        document.querySelector<HTMLElement>(".knowledge_eng")!.classList.remove("knowledge_eng_no_anime");
        document.querySelector<HTMLElement>(".portfolio_eng")!.classList.remove("portfolio_eng_no_anime");
        document.querySelector<HTMLElement>(".contact_eng")!.classList.remove("contact_eng_no_anime");
        document.querySelector<HTMLElement>(".home_eng")!.classList.add("home_no_anime");
        document.querySelector<HTMLElement>(".knowledge_eng")!.classList.add("knowledge_no_anime");
        document.querySelector<HTMLElement>(".portfolio_eng")!.classList.add("portfolio_no_anime");
        document.querySelector<HTMLElement>(".contact_eng")!.classList.add("contact_no_anime");
        document.querySelector<HTMLElement>(".home_eng")!.classList.add("home");
        document.querySelector<HTMLElement>(".knowledge_eng")!.classList.add("knowledge");
        document.querySelector<HTMLElement>(".portfolio_eng")!.classList.add("portfolio");
        document.querySelector<HTMLElement>(".contact_eng")!.classList.add("contact");
        document.querySelector<HTMLElement>(".home")!.classList.remove("home_eng");
        document.querySelector<HTMLElement>(".knowledge")!.classList.remove("knowledge_eng");
        document.querySelector<HTMLElement>(".portfolio")!.classList.remove("portfolio_eng");
        document.querySelector<HTMLElement>(".contact")!.classList.remove("contact_eng");
    }

    useEffect(() => {
        change_text();
        showbody();
    }, [location, language]);

    return (
        <main>
            <header>
                <nav>
                    <button className='gr nownohover' onClick={() => {
                        cookies.set('lang', 'gr', { sameSite: true }); set_language({ language: "greek" }); changeto_gr()
                    }}>
                        <img src="/gr_flag.webp" alt="EL" />
                    </button>
                    <span>||</span>
                    <button className='eng nowhover' onClick={() => {
                        cookies.set('lang', 'eng', { sameSite: true }); set_language({ language: "english" }); changeto_eng()
                    }}>
                        <img src="/eng_flag.webp" alt="ENG" /* style={{ filter: "grayscale(95%)", height: "12px", objectFit: "cover", width: "22px" }} */ />
                    </button>
                </nav>
            </header>
            <section>
                <Suspense /* fallback={<span>...</span>} */>
                    {showbody()}
                </Suspense>
            </section>
            <footer>
                <nav>
                    <button className='home' onClick={() => { set_location({ location: "home" }); }}>
                        {/* <img id="logo" src="/logo_nobg.png" alt="Logo" /> */}
                        {text.home}
                    </button>
                    <span>||</span>
                    <button className='knowledge' onClick={() => { set_location({ location: "knowledge" }); }}>
                        {text.knowledge}
                    </button>
                    <span>||</span>
                    <button className='portfolio' onClick={() => { set_location({ location: "portfolio" }); }}>
                        {text.portfolio}
                    </button>
                    <span>||</span>
                    <button className='contact' onClick={() => { set_location({ location: "contact" }); }}>
                        {text.contact}
                    </button>
                </nav>
            </footer>
        </main >
    )

}

export default Footer;