import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const Footer = ({ setPage, page }: { setPage: (page: string) => void, page: string }) => {
    const [text, setText] = useState({
        home: "",
        knowledge: "",
        portfolio: "",
        contact: "",
    });

    const [language, setLanguage] = useState(cookies.get('lang') || 'gr'); // Track current language

    // Update text and language settings based on cookies
    useEffect(() => {
        if (language === 'eng') {
            setText({
                home: "</G>",
                knowledge: "<KNOWLEDGE>",
                portfolio: "<PORTFOLIO>",
                contact: "<CONTACT>",
            });
            document.title = 'George Marinos, Fullstack Web Developer Portfolio';
            // Update meta description
            const meta = document.querySelector("meta[name='description']") as HTMLMetaElement;
            if (meta) {
                meta.setAttribute('content', 'On this page you will find my Portfolio, and references to all my knowledge surrounding Frontend, Backend and Wordpress Web Development.');
            }
            document.documentElement.setAttribute('lang', 'en');
        } else {
            setText({
                home: "</Γ>",
                knowledge: "<ΓΝΩΣΕΙΣ>",
                portfolio: "<ΔΕΙΓΜΑΤΑ ΔΟΥΛΕΙΑΣ>",
                contact: "<ΕΠΙΚΟΙΝΩΝΙΑ>",
            });
            document.title = 'Γεώργιος Μαρίνος, Fullstack Web Developer Portfolio';
            // Update meta description
            const meta = document.querySelector("meta[name='description']") as HTMLMetaElement;
            if (meta) {
                meta.setAttribute('content', "Αυτή η ιστοσελίδα περιέχει το Portfolio μου, και αναφορές στις γνώσεις μου, γύρω από το Frontend, Backend και Wordpress Web Development.");
            }
            document.documentElement.setAttribute('lang', 'el');
        }

        // Disable/enable menu items based on the page and language
        disable_menu();
        // Change text based on the page and language
        change_text();
    }, [language, page]);

    const switch_lang = (lang: string) => {
        cookies.set('lang', lang, { path: '/' });
        setLanguage(lang);
    };

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

    const change_text = () => {
        if (cookies.get('lang') === 'eng') {
            if (page === "home") {
                setText({
                    home: "</G>",
                    knowledge: "<KNOWLEDGE>",
                    portfolio: "<PORTFOLIO>",
                    contact: "<CONTACT>",
                });
            }
            if (page === "knowledge") {
                setText({
                    home: "<G>",
                    knowledge: "</KNOWLEDGE>",
                    portfolio: "<PORTFOLIO>",
                    contact: "<CONTACT>",
                });
            }
            if (page === "portfolio") {
                setText({
                    home: "<G>",
                    knowledge: "<KNOWLEDGE>",
                    portfolio: "</PORTFOLIO>",
                    contact: "<CONTACT>",
                });
            }
            if (page === "contact") {
                setText({
                    home: "<G>",
                    knowledge: "<KNOWLEDGE>",
                    portfolio: "<PORTFOLIO>",
                    contact: "</CONTACT>",
                });
            }
        }
        if (cookies.get('lang') === 'gr') {
            if (page === "home") {
                setText({
                    home: "</Γ>",
                    knowledge: "<ΓΝΩΣΕΙΣ>",
                    portfolio: "<ΔΕΙΓΜΑΤΑ ΔΟΥΛΕΙΑΣ>",
                    contact: "<ΕΠΙΚΟΙΝΩΝΙΑ>",
                });
            }
            if (page === "knowledge") {
                setText({
                    home: "<Γ>",
                    knowledge: "</ΓΝΩΣΕΙΣ>",
                    portfolio: "<ΔΕΙΓΜΑΤΑ ΔΟΥΛΕΙΑΣ>",
                    contact: "<ΕΠΙΚΟΙΝΩΝΙΑ>",
                });
            }
            if (page === "portfolio") {
                setText({
                    home: "<Γ>",
                    knowledge: "<ΓΝΩΣΕΙΣ>",
                    portfolio: "</ΔΕΙΓΜΑΤΑ ΔΟΥΛΕΙΑΣ>",
                    contact: "<ΕΠΙΚΟΙΝΩΝΙΑ>",
                });
            }
            if (page === "contact") {
                setText({
                    home: "<Γ>",
                    knowledge: "<ΓΝΩΣΕΙΣ>",
                    portfolio: "<ΔΕΙΓΜΑΤΑ ΔΟΥΛΕΙΑΣ>",
                    contact: "</ΕΠΙΚΟΙΝΩΝΙΑ>",
                });
            }
        }
    };

    return (
        <footer>
            <nav>
                <button
                    className={language === 'eng' ? 'home_eng' : 'home'}
                    onClick={() => setPage("home")}
                >
                    {text.home}
                </button>
                <span>||</span>
                <button
                    className={language === 'eng' ? 'knowledge_eng' : 'knowledge'}
                    onClick={() => setPage("knowledge")}
                >
                    {text.knowledge}
                </button>
                <span>||</span>
                <button
                    className={language === 'eng' ? 'portfolio_eng' : 'portfolio'}
                    onClick={() => setPage("portfolio")}
                >
                    {text.portfolio}
                </button>
                <span>||</span>
                <button
                    className={language === 'eng' ? 'contact_eng' : 'contact'}
                    onClick={() => setPage("contact")}
                >
                    {text.contact}
                </button>
            </nav>
            <div>
                <button
                    onClick={() => switch_lang('eng')}
                    className={language === 'eng' ? "nownohover" : "nowhover"}
                >
                    English
                </button>
                <button
                    onClick={() => switch_lang('gr')}
                    className={language === 'gr' ? "nownohover" : "nowhover"}
                >
                    Greek
                </button>
            </div>
        </footer>
    );
};
