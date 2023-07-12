import Cookies from 'universal-cookie';
import { useState, useEffect, lazy, Suspense } from 'react';
//import { Name, Name_eng } from './name';
//import { Skills, Skills_eng } from './skills';

const cookies = new Cookies();

const Name_gr = lazy(() => import('./name_gr'));
const Name_eng = lazy(() => import('./name_eng'));
const Skills_gr = lazy(() => import('./skills_gr'));
const Skills_eng = lazy(() => import('./skills_eng'));

/* function wait(time: number) {
    return new Promise(resolve => { setTimeout(resolve, time) })
} */

function Footer() {

    const [text, set_text] = useState({
        landing: "",
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
        cookies.get('lang') === 'eng' ? set_text(
            {
                landing: "G",
                knowledge: "KNOWLEDGE",
                portfolio: "PORTFOLIO",
                contact: "CONTACT",
            }) : set_text(
                {
                    landing: "Γ",
                    knowledge: "ΓΝΩΣΕΙΣ",
                    portfolio: "ΔΕΙΓΜΑΤΑ ΔΟΥΛΕΙΑΣ",
                    contact: "ΕΠΙΚΟΙΝΩΝΙΑ",
                })
    }

    function showbody() {
        if (cookies.get('lang') === 'eng') {
            document.title = 'George Marinos CV';
            if (location.location === 'home') {
                return <Name_eng />
            }

            if (location.location === 'knowledge') {
                document.title = 'Γεώργιος Μαρίνος CV';
                return <Skills_eng />
            }
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

    useEffect(() => {
        change_text();
        showbody();
    }, [location, language]);

    return (
        <main>
            <header>
                <nav>
                    <button id='gr' onClick={() => {
                        cookies.set('lang', 'gr', { sameSite: true }); set_language({ language: "greek" });
                    }}>
                        <img src="/gr_flag.png" alt="GR" />
                    </button>
                    <span>||</span>
                    <button id='eng' onClick={() => { cookies.set('lang', 'eng', { sameSite: true }); set_language({ language: "english" }); }}>
                        <img src="/eng_flag.png" alt="ENG" />
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
                    <button onClick={() => { cookies.set('cont', 'name', { sameSite: true }); set_location({ location: "home" }); }}>
                        {/* <img id="logo" src="/logo_nobg.png" alt="Logo" /> */}
                        {text.landing}
                    </button>
                    <span>||</span>
                    <button onClick={() => { cookies.set('cont', 'knowledge', { sameSite: true }); set_location({ location: "knowledge" }); }}>
                        {text.knowledge}
                    </button>
                    <span>||</span>
                    <button>
                        {text.portfolio}
                    </button>
                    <span>||</span>
                    <button>
                        {text.contact}
                    </button>
                </nav>
            </footer>
        </main >
    )

}

export default Footer;