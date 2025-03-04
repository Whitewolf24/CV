import { createContext, useContext, useState, ReactNode } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const LanguageContext = createContext<{
    language: string;
    switch_lang: (lang: string) => void;
} | undefined>(undefined);

export const use_language = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState(cookies.get('lang') || 'gr');

    const switch_lang = (lang: string) => {
        cookies.set('lang', lang, { path: '/' });
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, switch_lang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const Header = () => {
    const { language, switch_lang } = use_language();

    return (
        <header>
            <nav>
                <button className={language === 'eng' ? 'gr nowhover' : 'gr nownohover'} onClick={() => switch_lang('gr')}> {}
                    <img src='gr_flag.webp' alt='EL' />
                </button>
                <span>||</span>
                <button className={language === 'eng' ? 'eng nownohover' : 'eng nowhover'} onClick={() => switch_lang('eng')}> {}
                    <img src='eng_flag.webp' alt='ENG' />
                </button>
            </nav>
        </header>
    );
};
