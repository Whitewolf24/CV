
<<<<<<< HEAD
import { useEffect } from 'react';
=======
//import { useEffect, useState } from 'react';
>>>>>>> 650427c1b2aa07d5a4f15a335961e5fe951e105b
import Cookies from 'universal-cookie';
import { Footer } from './components/footer';

const cookies = new Cookies();

if (!cookies.get('lang')) {
  cookies.set('lang', 'gr', { sameSite: true });
}

function App() {

<<<<<<< HEAD
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
  }, []);

=======
>>>>>>> 650427c1b2aa07d5a4f15a335961e5fe951e105b
  return <div>
    {/* <Main name={name} job={"Web Developer"} />
     <Footer lang_gr={change_lang("ελληνικά")} lang_eng={change_lang("ελληνικά")} knowhow_butt={"knowledge"} projects_butt={"projects"} contact_butt={"contact"} />
  content items={["",""]} render={(items:string) => <p>{items}</p>} */}
    <Footer />
  </div>
}

export default App;
