
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import Footer from './components/footer';

const cookies = new Cookies();

if (!cookies.get('lang')) {
  cookies.set('lang', 'gr', { sameSite: true });
}

function App() {

  return <div>
    {/* <Main name={name} job={"Web Developer"} />
     <Footer lang_gr={change_lang("ελληνικά")} lang_eng={change_lang("ελληνικά")} knowhow_butt={"knowledge"} projects_butt={"projects"} contact_butt={"contact"} />
  content items={["",""]} render={(items:string) => <p>{items}</p>} */}
    <Footer />
  </div>
}

export default App;
