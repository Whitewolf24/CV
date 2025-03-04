import { useState, useEffect } from 'react';
import { use_language } from './header'; // Import the language context
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const Footer = ({ set_page, page }: { set_page: (page: string) => void, page: string }) => {
    const { language, switch_lang } = use_language();

    const [text, set_text] = useState({
        home: "",
        knowledge: "",
        portfolio: "",
        contact: "",
    });

    useEffect(() => {
        if (language === 'eng') {
            set_text({
                home: "</G>",
                knowledge: "<KNOWLEDGE>",
                portfolio: "<PORTFOLIO>",
                contact: "<CONTACT>",
            });
            document.title = 'George Marinos, Fullstack Web Developer Portfolio';
            const meta = document.querySelector("meta[name='description']") as HTMLMetaElement;
            if (meta) {
                meta.setAttribute('content', 'On this page you will find my Portfolio, and references to all my knowledge surrounding Frontend, Backend and Wordpress Web Development.');
            }
            document.documentElement.setAttribute('lang', 'en');
        } else {
            set_text({
                home: "</Γ>",
                knowledge: "<ΓΝΩΣΕΙΣ>",
                portfolio: "<ΔΕΙΓΜΑΤΑ ΔΟΥΛΕΙΑΣ>",
                contact: "<ΕΠΙΚΟΙΝΩΝΙΑ>",
            });
            document.title = 'Γεώργιος Μαρίνος, Fullstack Web Developer Portfolio';
            const meta = document.querySelector("meta[name='description']") as HTMLMetaElement;
            if (meta) {
                meta.setAttribute('content', "Αυτή η ιστοσελίδα περιέχει το Portfolio μου, και αναφορές στις γνώσεις μου, γύρω από το Frontend, Backend και Wordpress Web Development.");
            }
            document.documentElement.setAttribute('lang', 'el');
        }

        disable_menu();

    }, [language, page]);

    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const disable_menu = () => {
        if (cookies.get('lang') === 'eng') {
            sleep(1000).then(() => {
                const home_eng = document.querySelector(".home_eng") as HTMLButtonElement;
                const knowledge_eng = document.querySelector(".knowledge_eng") as HTMLButtonElement;
                const portfolio_eng = document.querySelector(".portfolio_eng") as HTMLButtonElement;
                const contact_eng = document.querySelector(".contact_eng") as HTMLButtonElement;

                if (page === 'home') {
                    home_eng.style.pointerEvents = "none";
                    knowledge_eng.style.pointerEvents = "auto";
                    portfolio_eng.style.pointerEvents = "auto";
                    contact_eng.style.pointerEvents = "auto";
                    home_eng.style.cursor = "default";
                    knowledge_eng.style.cursor = "pointer";
                    portfolio_eng.style.cursor = "pointer";
                    contact_eng.style.cursor = "pointer";
                }
                if (page === 'knowledge') {
                    home_eng.style.pointerEvents = "auto";
                    knowledge_eng.style.pointerEvents = "none";
                    portfolio_eng.style.pointerEvents = "auto";
                    contact_eng.style.pointerEvents = "auto";
                    home_eng.style.cursor = "pointer";
                    knowledge_eng.style.cursor = "default";
                    portfolio_eng.style.cursor = "pointer";
                    contact_eng.style.cursor = "pointer";
                }
                if (page === 'portfolio') {
                    home_eng.style.pointerEvents = "auto";
                    knowledge_eng.style.pointerEvents = "auto";
                    portfolio_eng.style.pointerEvents = "none";
                    contact_eng.style.pointerEvents = "auto";
                    home_eng.style.cursor = "pointer";
                    knowledge_eng.style.cursor = "pointer";
                    portfolio_eng.style.cursor = "default";
                    contact_eng.style.cursor = "pointer";
                }
                if (page === 'contact') {
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

            if (page === 'home') {
                home.style.pointerEvents = "none";
                knowledge.style.pointerEvents = "auto";
                portfolio.style.pointerEvents = "auto";
                contact.style.pointerEvents = "auto";
                home.style.cursor = "default";
                knowledge.style.cursor = "pointer";
                portfolio.style.cursor = "pointer";
                contact.style.cursor = "pointer";
            }
            if (page === 'knowledge') {
                home.style.pointerEvents = "auto";
                knowledge.style.pointerEvents = "none";
                portfolio.style.pointerEvents = "auto";
                contact.style.pointerEvents = "auto";
                home.style.cursor = "pointer";
                knowledge.style.cursor = "default";
                portfolio.style.cursor = "pointer";
                contact.style.cursor = "pointer";
            }
            if (page === 'portfolio') {
                home.style.pointerEvents = "auto";
                knowledge.style.pointerEvents = "auto";
                portfolio.style.pointerEvents = "none";
                contact.style.pointerEvents = "auto";
                home.style.cursor = "pointer";
                knowledge.style.cursor = "pointer";
                portfolio.style.cursor = "default";
                contact.style.cursor = "pointer";
            }
            if (page === 'contact') {
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
    };

    const applyLanguageStyles = (language: string) => {
        const home = document.querySelector('.home') as HTMLElement | null;
        const knowledge = document.querySelector('.knowledge') as HTMLElement | null;
        const portfolio = document.querySelector('.portfolio') as HTMLElement | null;
        const contact = document.querySelector('.contact') as HTMLElement | null;

        const homeEng = document.querySelector('.home_eng') as HTMLElement | null;
        const knowledgeEng = document.querySelector('.knowledge_eng') as HTMLElement | null;
        const portfolioEng = document.querySelector('.portfolio_eng') as HTMLElement | null;
        const contactEng = document.querySelector('.contact_eng') as HTMLElement | null;

        if (language === 'eng') {
            if (homeEng) {
                homeEng.style.animation = 'none';
                homeEng.style.opacity = '100%';
                homeEng.style.width = '3em';
            }

            if (knowledgeEng) {
                knowledgeEng.style.animation = 'none';
                knowledgeEng.style.opacity = '100%';
                knowledgeEng.style.width = '7.5em';
            }

            if (portfolioEng) {
                portfolioEng.style.animation = 'none';
                portfolioEng.style.opacity = '100%';
                portfolioEng.style.width = '7.5em';
            }

            if (contactEng) {
                contactEng.style.animation = 'blinktext 700ms steps(40) 1s infinite normal forwards';
                contactEng.style.borderRight = '1px solid white';
                contactEng.style.opacity = '100%';
                contactEng.style.width = '6.5em';
            }
        } else {
            if (home) {
                home.style.animation = 'none';
                home.style.opacity = '100%';
                home.style.width = '3em';
            }

            if (knowledge) {
                knowledge.style.animation = 'none';
                knowledge.style.opacity = '100%';
                knowledge.style.width = '7em';
            }

            if (portfolio) {
                portfolio.style.animation = 'none';
                portfolio.style.opacity = '100%';
                portfolio.style.width = '12em';
            }

            if (contact) {
                contact.style.animation = 'blinktext 700ms steps(40) 1s infinite normal forwards';
                contact.style.borderRight = '1px solid white';
                contact.style.opacity = '100%';
                contact.style.width = '9em';
            }
        }
    };

    useEffect(() => {
        applyLanguageStyles(language);
    }, [language]);

    return (
        <footer>
            <nav>
                <button className={language === 'eng' ? 'home_eng' : 'home'} onClick={() => set_page("home")}>
                    {text.home}
                </button>
                <span>||</span>
                <button className={language === 'eng' ? 'knowledge_eng' : 'knowledge'} onClick={() => set_page("knowledge")}>
                    {text.knowledge}
                </button>
                <span>||</span>
                <button className={language === 'eng' ? 'portfolio_eng' : 'portfolio'} onClick={() => set_page("portfolio")}>
                    {text.portfolio}
                </button>
                <span>||</span>
                <button className={language === 'eng' ? 'contact_eng' : 'contact'} onClick={() => set_page("contact")}>
                    {text.contact}
                </button>
            </nav>
            <div>
                <button onClick={() => switch_lang('eng')} className={language === 'eng' ? "nownohover" : "nowhover"}>
                    English
                </button>
                <button onClick={() => switch_lang('gr')} className={language === 'gr' ? "nownohover" : "nowhover"}>
                    Greek
                </button>
            </div>
        </footer>
    );
};
