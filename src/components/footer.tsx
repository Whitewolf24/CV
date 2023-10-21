import Cookies from 'universal-cookie';
import { useState, useEffect, lazy, Suspense } from 'react';
// import { first_run, changeto_eng, changeto_gr } from './functions';

const cookies = new Cookies();

if (navigator.userAgent.includes("Chrome") && navigator.userAgent.includes("Mobi")) {
    onanimationstart = () => {
        document.body.style.cssText += "overflow: hidden scroll !important";
    }
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const Name_gr = lazy(() => import('./name_gr'));
const Name_eng = lazy(() => import('./name_eng'));
const Skills = lazy(() => import('./skills'));
const Portfolio_gr = lazy(() => import('./portfolio_gr'));
const Portfolio_eng = lazy(() => import('./portfolio_eng'));
const Contact_gr = lazy(() => import('./contact_gr'));
const Contact_eng = lazy(() => import('./contact_eng'));

export const Footer = () => {

    const gr = document.querySelector(".gr") as HTMLButtonElement;
    const eng = document.querySelector(".eng") as HTMLButtonElement;

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

            const home = document.querySelector(".home") as HTMLButtonElement;
            const knowledge = document.querySelector(".knowledge") as HTMLButtonElement;
            const portfolio = document.querySelector(".portfolio") as HTMLButtonElement;
            const contact = document.querySelector(".contact") as HTMLButtonElement;

            sleep(100).then(() => {

                home?.classList.add("home_eng");
                home?.classList.remove("home");
                knowledge?.classList.add("knowledge_eng");
                knowledge?.classList.remove("knowledge");
                portfolio?.classList.add("portfolio_eng");
                portfolio?.classList.remove("portfolio");
                contact?.classList.add("contact_eng");
                contact?.classList.remove("contact");

                eng?.classList.add("nownohover");
                eng?.classList.remove("nowhover");
                gr?.classList.remove("nownohover");
                gr?.classList.add("nowhover");

                eng?.addEventListener("click", function (event) {
                    event.preventDefault()
                });
            });

            const meta = document.getElementsByTagName("meta");
            const lang = document.getElementsByTagName("html");

            if (meta.length > 0) {
                const meta_element = meta[3];
                meta_element.setAttribute('content', 'On this page you will find my Portfolio, and references to all my knowledge surrounding Frontend, Backend and Wordpress Web Development.');
            }

            if (lang.length > 0) {
                const lang_element = lang[0];
                lang_element.setAttribute('lang', 'en');
            }

            document.title = 'George Marinos, Fullstack Web Developer Portfolio';
            if (page.location === 'home') {
                /*  home_eng.addEventListener("click", function (event) {
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
            if (page.location === 'contact') {
                return <Contact_eng />
            }
        }

        else if (cookies.get('lang') === 'gr') {

            sleep(100).then(() => {

                gr?.classList.add("nownohover");
                gr?.classList.remove("nowhover");
                eng?.classList.remove("nownohover");
                eng?.classList.add("nowhover");

                gr?.addEventListener("click", function (event) {
                    event.preventDefault()
                });

            });

            const meta = document.getElementsByTagName("meta");
            const lang = document.getElementsByTagName("html");

            if (meta.length > 0) {
                const meta_element = meta[3];
                meta_element.setAttribute('content', "Αυτή η ιστοσελίδα περιέχει το Portfolio μου, και αναφορές στις γνώσεις μου, γύρω από το Frontend, Backend και Wordpress Web Development.");
            }
            if (lang.length > 0) {
                const lang_element = lang[0];
                lang_element.setAttribute('lang', 'el');
            }

            document.title = 'Γεώργιος Μαρίνος, Fullstack Web Developer Portfolio';
            if (page.location === 'home') {
                return <Name_gr />
            }
            if (page.location === 'knowledge') {
                return <Skills />
            }
            if (page.location === 'portfolio') {
                return <Portfolio_gr />
            }
            if (page.location === 'contact') {
                return <Contact_gr />
            }
        }
    }

    function disable_menu() {
        if (cookies.get('lang') === 'eng') {

            sleep(1000).then(() => {
                const home_eng = document.querySelector(".home_eng") as HTMLButtonElement;
                const knowledge_eng = document.querySelector(".knowledge_eng") as HTMLButtonElement;
                const portfolio_eng = document.querySelector(".portfolio_eng") as HTMLButtonElement;
                const contact_eng = document.querySelector(".contact_eng") as HTMLButtonElement;
                if (page.location === 'home') {
                    home_eng.style.pointerEvents = "none";
                    knowledge_eng.style.pointerEvents = "auto";
                    portfolio_eng.style.pointerEvents = "auto";
                    contact_eng.style.pointerEvents = "auto";

                    home_eng.style.cursor = "default";
                    knowledge_eng.style.cursor = "pointer";
                    portfolio_eng.style.cursor = "pointer";
                    contact_eng.style.cursor = "pointer";
                }
                if (page.location === 'knowledge') {
                    home_eng.style.pointerEvents = "auto";
                    knowledge_eng.style.pointerEvents = "none";
                    portfolio_eng.style.pointerEvents = "auto";
                    contact_eng.style.pointerEvents = "auto";

                    home_eng.style.cursor = "pointer";
                    knowledge_eng.style.cursor = "default";
                    portfolio_eng.style.cursor = "pointer";
                    contact_eng.style.cursor = "pointer";
                }
                if (page.location === 'portfolio') {
                    home_eng.style.pointerEvents = "auto";
                    knowledge_eng.style.pointerEvents = "auto";
                    portfolio_eng.style.pointerEvents = "none";
                    contact_eng.style.pointerEvents = "auto";

                    home_eng.style.cursor = "pointer";
                    knowledge_eng.style.cursor = "pointer";
                    portfolio_eng.style.cursor = "default";
                    contact_eng.style.cursor = "pointer";
                }
                if (page.location === 'contact') {
                    home_eng.style.pointerEvents = "auto";
                    knowledge_eng.style.pointerEvents = "auto";
                    portfolio_eng.style.pointerEvents = "auto";
                    contact_eng.style.pointerEvents = "none";

                    home_eng.style.cursor = "pointer";
                    knowledge_eng.style.cursor = "pointer";
                    portfolio_eng.style.cursor = "pointer";
                    contact_eng.style.cursor = "default";
                }
            });
        }
        if (cookies.get('lang') === 'gr') {
            const home = document.querySelector(".home") as HTMLButtonElement;
            const knowledge = document.querySelector(".knowledge") as HTMLButtonElement;
            const portfolio = document.querySelector(".portfolio") as HTMLButtonElement;
            const contact = document.querySelector(".contact") as HTMLButtonElement;

            if (page.location === 'home') {
                home.style.pointerEvents = "none";
                knowledge.style.pointerEvents = "auto";
                portfolio.style.pointerEvents = "auto";
                contact.style.pointerEvents = "auto";

                home.style.cursor = "default";
                knowledge.style.cursor = "pointer";
                portfolio.style.cursor = "pointer";
                contact.style.cursor = "pointer";
            }
            if (page.location === 'knowledge') {
                home.style.pointerEvents = "auto";
                knowledge.style.pointerEvents = "none";
                portfolio.style.pointerEvents = "auto";
                contact.style.pointerEvents = "auto";

                home.style.cursor = "pointer";
                knowledge.style.cursor = "default";
                portfolio.style.cursor = "pointer";
                contact.style.cursor = "pointer";
            }
            if (page.location === 'portfolio') {
                home.style.pointerEvents = "auto";
                knowledge.style.pointerEvents = "auto";
                portfolio.style.pointerEvents = "none";
                contact.style.pointerEvents = "auto";

                home.style.cursor = "pointer";
                knowledge.style.cursor = "pointer";
                portfolio.style.cursor = "default";
                contact.style.cursor = "pointer";
            }
            if (page.location === 'contact') {
                home.style.pointerEvents = "auto";
                knowledge.style.pointerEvents = "auto";
                portfolio.style.pointerEvents = "auto";
                contact.style.pointerEvents = "none";


                home.style.cursor = "pointer";
                knowledge.style.cursor = "pointer";
                portfolio.style.cursor = "pointer";
                contact.style.cursor = "default";
            }
        }
    }

    useEffect(() => {
        disable_menu();
        change_text();
        showbody();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [language, page]);

    const content_section = document.querySelector(".content_section") as HTMLDivElement;

    const footer_butt = document.querySelector("footer button:nth-of-type(3)") as HTMLButtonElement;

    return (
        <main>
            <header onAnimationStart={() => {
                const header = document?.querySelector("header") as HTMLDivElement;
                if (navigator.userAgent.includes("Chrome") && navigator.userAgent.includes("Mobi") && !(navigator.userAgent.includes("Edg"))) {
                    header.style.cssText += "bottom: 46rem !important";
                }

                /*  else if (navigator.userAgent.includes("Edg") && navigator.userAgent.includes("Mobi")) {
                     header.style.cssText += "bottom: 45.5rem !important";
                 } */
            }}>
                <nav>
                    <button className='gr nownohover' onClick={() => {
                        cookies.set('lang', 'gr', { sameSite: true }); set_language({ language: "greek" });


                        const home_eng = document.querySelector(".home_eng") as HTMLButtonElement;
                        const knowledge_eng = document.querySelector(".knowledge_eng") as HTMLButtonElement;
                        const portfolio_eng = document.querySelector(".portfolio_eng") as HTMLButtonElement;
                        const contact_eng = document.querySelector(".contact_eng") as HTMLButtonElement;

                        home_eng.classList.remove("home_eng_no_anime");
                        knowledge_eng.classList.remove("knowledge_eng_no_anime");
                        portfolio_eng.classList.remove("portfolio_eng_no_anime");
                        contact_eng.classList.remove("contact_eng_no_anime");

                        home_eng.classList.add("home_no_anime");
                        knowledge_eng.classList.add("knowledge_no_anime");
                        portfolio_eng.classList.add("portfolio_no_anime");
                        contact_eng.classList.add("contact_no_anime");

                        home_eng.classList.add("home");
                        home_eng.classList.remove("home_eng");
                        knowledge_eng.classList.add("knowledge");
                        knowledge_eng.classList.remove("knowledge_eng");
                        portfolio_eng.classList.add("portfolio");
                        portfolio_eng.classList.remove("portfolio_eng");
                        contact_eng.classList.add("contact");
                        contact_eng.classList.remove("contact_eng");

                        footer_butt.style.width = "13em";

                        gr.classList.add("nownohover");
                        gr.classList.remove("nowhover");
                        eng.classList.remove("nownohover");
                        eng.classList.add("nowhover");

                        gr.addEventListener("click", function (event) {
                            event.preventDefault()
                        });

                    }}>
                        <img src="gr_flag.webp" alt="EL" />
                    </button>
                    <span>||</span>

                    <button className='eng nowhover' onClick={() => {
                        cookies.set('lang', 'eng', { sameSite: true }); set_language({ language: "english" });

                        const home = document.querySelector(".home") as HTMLButtonElement;
                        const knowledge = document.querySelector(".knowledge") as HTMLButtonElement;
                        const portfolio = document.querySelector(".portfolio") as HTMLButtonElement;
                        const contact = document.querySelector(".contact") as HTMLButtonElement;

                        home.classList.remove("home_no_anime");
                        knowledge.classList.remove("knowledge_no_anime");
                        portfolio.classList.remove("portfolio_no_anime");
                        contact.classList.remove("contact_no_anime");

                        home.classList.add("home_eng_no_anime");
                        knowledge.classList.add("knowledge_eng_no_anime");
                        portfolio.classList.add("portfolio_eng_no_anime");
                        contact.classList.add("contact_eng_no_anime");

                        home.classList.add("home_eng");
                        home.classList.remove("home");
                        knowledge.classList.add("knowledge_eng");
                        knowledge.classList.remove("knowledge");
                        portfolio.classList.add("portfolio_eng");
                        portfolio.classList.remove("portfolio");
                        contact.classList.add("contact_eng");
                        contact.classList.remove("contact");

                        footer_butt.style.width = "8em";

                        eng.classList.add("nownohover");
                        eng.classList.remove("nowhover");
                        gr.classList.remove("nownohover");
                        gr.classList.add("nowhover");

                        eng.addEventListener("click", function (event) {
                            event.preventDefault()
                        });
                    }}>
                        <img src="eng_flag.webp" alt="ENG" /* style={{ filter: "grayscale(95%)", height: "12px", objectFit: "cover", width: "22px" }} */ />
                    </button>
                </nav>
            </header>
            <section className='content_section'>
                <Suspense fallback={<span className='loader'>.........</span>}>
                    {showbody()}
                </Suspense>
            </section>
            <footer
                onAnimationStart={() => {
                    const footer = document?.querySelector("footer") as HTMLDivElement;
                    if (navigator.userAgent.includes("Chrome") && navigator.userAgent.includes("Mobi") && !(navigator.userAgent.includes("Edg"))) {
                        footer.style.cssText += "top: 42vh !important";
                        footer.style.cssText += "height: 12vh !important";
                        footer.style.cssText += "width: 27.4rem !important";
                        footer.style.cssText += "position: relative !important";
                    }

                    /*   else if (navigator.userAgent.includes("Edg") && navigator.userAgent.includes("Mobi")) {
                         footer.style.cssText += "top: 42vh !important";
                         footer.style.cssText += "height: 12vh !important";
                         footer.style.cssText += "width: 26.8rem !important";
                         footer.style.cssText += "position: relative !important";
                     }
 
                     if (navigator.userAgent.includes("Kiwi") && navigator.userAgent.includes("Mobi")) {
                          const footer = document?.querySelector("footer") as HTMLDivElement;
                          footer.style.cssText += "top: 42vh !important";
                          footer.style.cssText += "height: 12vh !important";
                          footer.style.cssText += "width: 23.3rem !important";
                          footer.style.cssText += "position: relative !important";
                      }  */
                }}>
                <nav>
                    <button className='home' onClick={() => {
                        set_page({ location: "home" });
                        content_section.style.transform = "translate(0, 5vh)"
                    }}>
                        {text.home}
                    </button>
                    <span>||</span>
                    <button className='knowledge' onClick={() => {
                        set_page({ location: "knowledge" }); document.body.style.overflowY = "hidden";
                        content_section.style.transform = "translate(0, 50%)"
                    }}>
                        {text.knowledge}
                    </button>
                    <span>||</span>
                    <button className='portfolio' onClick={() => {
                        set_page({ location: "portfolio" });
                        content_section.style.transform = "translate(0, 20%)";
                    }}>
                        {text.portfolio}
                    </button>
                    <span>||</span>
                    <button className='contact' onClick={() => {
                        set_page({ location: "contact" });
                        document.body.style.overflowY = "hidden";
                        content_section.style.transform = "translate(0, -4vh)";
                    }}>
                        {text.contact}
                    </button>

                </nav>
            </footer>
        </main >
    )
}