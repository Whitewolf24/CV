/* import { useEffect } from 'react'; */
import Cookies from 'universal-cookie';

const cookies = new Cookies();

if (!cookies.get('lang')) {
    const userLang = navigator.language.startsWith('el') ? 'gr' : 'eng';
    cookies.set('lang', userLang, { sameSite: true });
}

export const Header = () => {
    const language = cookies.get('lang'); // Get the language from cookies

    /*  useEffect(() => {
         const header = document?.querySelector("header") as HTMLDivElement;
         if (navigator.userAgent.includes("Chrome") && navigator.userAgent.includes("Mobi") && !(navigator.userAgent.includes("Edg"))) {
             header.style.cssText += "top: 0 !important; position: fixed !important; height: 0rem !important; width: 100% !important;";
         }
     }, []); */

    const switch_lang = (lang: string) => {
        cookies.set('lang', lang, { path: '/' });
        window.location.reload();  // Refresh the page to apply language changes
    };

    return (
        <header>
            <nav>
                <button className={language === 'eng' ? 'gr nowhover' : 'gr nownohover'} onClick={() => switch_lang('gr')}>
                    <img src='gr_flag.webp' alt='EL' />
                </button>
                <span>||</span>
                <button className={language === 'eng' ? 'eng nownohover' : 'eng nowhover'} onClick={() => switch_lang('eng')}>
                    <img src='eng_flag.webp' alt='ENG' />
                </button>
            </nav>
        </header>
    );
};
