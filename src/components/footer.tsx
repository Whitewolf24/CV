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
        // Initial load: Set "home" as active page with "/"
        if (language === 'eng') {
            set_text({
                home: page === 'home' || page === '' ? "</G>" : "<G>", // Set / on home initially
                knowledge: page === 'knowledge' ? "</KNOWLEDGE>" : "<KNOWLEDGE>",
                portfolio: page === 'portfolio' ? "</PORTFOLIO>" : "<PORTFOLIO>",
                contact: page === 'contact' ? "</CONTACT>" : "<CONTACT>",
            });
            document.title = 'George Marinos, Fullstack Web Developer Portfolio';
            const meta = document.querySelector("meta[name='description']") as HTMLMetaElement;
            if (meta) {
                meta.setAttribute('content', 'On this page you will find my Portfolio, and references to all my knowledge surrounding Frontend, Backend and Wordpress Web Development.');
            }
            document.documentElement.setAttribute('lang', 'en');
        } else {
            set_text({
                home: page === 'home' || page === '' ? "</Γ>" : "<Γ>", // Set / on home initially
                knowledge: page === 'knowledge' ? "</ΓΝΩΣΕΙΣ>" : "<ΓΝΩΣΕΙΣ>",
                portfolio: page === 'portfolio' ? "</ΔΕΙΓΜΑΤΑ ΔΟΥΛΕΙΑΣ>" : "<ΔΕΙΓΜΑΤΑ ΔΟΥΛΕΙΑΣ>",
                contact: page === 'contact' ? "</ΕΠΙΚΟΙΝΩΝΙΑ>" : "<ΕΠΙΚΟΙΝΩΝΙΑ>",
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

    const disable_menu = () => {
        const langPrefix = cookies.get('lang') === 'eng' ? 'eng' : 'gr';
        const pages = ['home', 'knowledge', 'portfolio', 'contact'];

        pages.forEach((pageName) => {
            const button = document.querySelector(`.${langPrefix}_${pageName}`) as HTMLButtonElement;
            if (button) {
                button.style.pointerEvents = page === pageName ? "none" : "auto";
                button.style.cursor = page === pageName ? "default" : "pointer";
            }
        });
    };

    const applyLanguageStyles = (language: string) => {
        const langPrefix = language === 'eng' ? 'eng' : 'gr';
        const pages = ['home', 'knowledge', 'portfolio', 'contact'];

        pages.forEach((pageName) => {
            const button = document.querySelector(`.${langPrefix}_${pageName}`) as HTMLElement | null;
            if (button) {
                if (pageName === 'contact') {
                    button.style.animation = 'blinktext 700ms steps(40) 1s infinite normal forwards';
                    button.style.borderRight = '1px solid white';
                }
                button.style.opacity = '100%';
                button.style.width = pageName === 'contact' ? (language === 'eng' ? '6.5em' : '9em') :
                    pageName === 'portfolio' ? (language === 'eng' ? '7.5em' : '12em') :
                        (language === 'eng' ? '3em' : '7em');
            }
        });
    };

    useEffect(() => {
        applyLanguageStyles(language);
    }, [language]);


    const updateFooterButtonWidths = (language: string, page: string) => {
        const final_width: Record<string, string> = {
            typewriter_home: "3em",
            typewriter_knowledge: "7em",
            typewriter_portfolio: "13em",
            typewriter_contact: "9em",
            typewriter_span: "1.5em",
            typewriter_home_eng: "3em",
            typewriter_knowledge_eng: "7.5em",
            typewriter_portfolio_eng: "7.5em",
            typewriter_contact_eng: "6.5em"
        };

        const pages = ['home', 'knowledge', 'portfolio', 'contact'];

        // Loop through all pages and apply appropriate styles based on the language
        pages.forEach((pageName) => {
            const langPrefix = language === 'eng' ? '_eng' : '';  // Check if the language is 'eng' and apply _eng suffix for English buttons
            const button = document.querySelector(`.${pageName}${langPrefix}`) as HTMLElement | null;

            if (button) {
                // Apply width based on the language and page
                const buttonWidthKey = `typewriter_${pageName}${langPrefix}`;
                button.style.width = final_width[buttonWidthKey] || 'auto'; // Default to 'auto' if the key is missing

                // Adjust pointer events based on the active page
                if (page === pageName) {
                    button.style.pointerEvents = "none";
                    button.style.cursor = "default";
                } else {
                    button.style.pointerEvents = "auto";
                    button.style.cursor = "pointer";
                }
            }
        });
    };

    useEffect(() => {
        // This ensures that the widths are updated after the DOM has re-rendered
        const timer = setTimeout(() => {
            updateFooterButtonWidths(language, page);
        }, 0); // Using a 0ms timeout to allow the DOM to reflow first

        return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts

    }, [language, page]); // Update when either language or page changes


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
