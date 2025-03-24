import { useState, lazy, Suspense } from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { LanguageProvider, use_language } from './components/header'; // Import the context

const NameGr = lazy(() => import('./components/name_gr'));
const NameEng = lazy(() => import('./components/name_eng'));
const Knowledge = lazy(() => import('./components/skills'));
const PortfolioGr = lazy(() => import('./components/portfolio_gr'));
const PortfolioEng = lazy(() => import('./components/portfolio_eng'));
const ContactGr = lazy(() => import('./components/contact_gr'));
const ContactEng = lazy(() => import('./components/contact_eng'));

function AppContent() {
  const [page, set_page] = useState("home");
  const { language } = use_language(); // Get language from context

  const render_page = () => {
    switch (page) {
      case "knowledge":
        return <Knowledge />;
      case "portfolio":
        return language === 'eng' ? <PortfolioEng /> : <PortfolioGr />;
      case "contact":
        return language === 'eng' ? <ContactEng /> : <ContactGr />;
      default:
        return language === 'eng' ? <NameEng /> : <NameGr />;
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
      <Footer set_page={set_page} page={page} />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
