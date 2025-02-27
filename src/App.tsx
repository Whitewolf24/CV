import { useState, lazy, Suspense } from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const lang = cookies.get('lang');

const NameGr = lazy(() => import('./components/name_gr'));
const NameEng = lazy(() => import('./components/name_eng'));
const Knowledge = lazy(() => import('./components/skills'));
const PortfolioGr = lazy(() => import('./components/portfolio_gr'));
const PortfolioEng = lazy(() => import('./components/portfolio_eng'));
const ContactGr = lazy(() => import('./components/contact_gr'));
const ContactEng = lazy(() => import('./components/contact_eng'));

function App() {
  const [page, setPage] = useState("home");
  const [lang, setLang] = useState(cookies.get('lang'));

  const render_page = () => {
    switch (page) {
      case "knowledge":
        return <Knowledge />;
      case "portfolio":
        return lang === 'eng' ? <PortfolioEng /> : <PortfolioGr />;
      case "contact":
        return lang === 'eng' ? <ContactEng /> : <ContactGr />;
      default:
        return lang === 'eng' ? <NameEng /> : <NameGr />;
    }
  };

  return (
    <div>
      <Header />
      <main>
        <section className='content_section'>
          <Suspense fallback={<span className='loader'>.........</span>}>
            {render_page()}
          </Suspense>
        </section>
      </main>
      <Footer setPage={setPage} page={page} />
    </div>
  );
}

export default App;
