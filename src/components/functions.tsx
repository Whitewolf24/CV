import Cookies from 'universal-cookie';

const cookies = new Cookies();

export function first_run() {
    if (cookies.get('lang') === 'eng') {
        document.querySelector<HTMLElement>("section span")!.style.display = "none";

        document.querySelector<HTMLElement>(".gr")!.classList.add("nowhover");
        document.querySelector<HTMLElement>(".eng")!.classList.remove("nowhover");
        document.querySelector<HTMLElement>(".eng")!.classList.add("nownohover");

        document.querySelector<HTMLElement>(".eng")!.style.pointerEvents = "none";

        document.querySelector<HTMLElement>("footer button:first-of-type")!.classList.add("home_eng");
        document.querySelector<HTMLElement>("footer button:first-of-type")!.classList.remove("home");
        document.querySelector<HTMLElement>("footer button:nth-of-type(2)")!.classList.add("knowledge_eng");
        document.querySelector<HTMLElement>("footer button:nth-of-type(2)")!.classList.remove("knowledge");
        document.querySelector<HTMLElement>("footer button:nth-of-type(3)")!.classList.add("portfolio_eng");
        document.querySelector<HTMLElement>("footer button:nth-of-type(3)")!.classList.remove("portfolio");
        document.querySelector<HTMLElement>("footer button:nth-of-type(4)")!.classList.add("contact_eng");
        document.querySelector<HTMLElement>("footer button:nth-of-type(4)")!.classList.remove("contact");
    }
    else if (cookies.get('lang') === 'gr') {
        document.querySelector<HTMLElement>("section span")!.style.display = "none";

        document.querySelector<HTMLElement>(".eng")!.classList.add("nowhover");
        document.querySelector<HTMLElement>(".gr")!.classList.remove("nowhover");
        document.querySelector<HTMLElement>(".gr")!.classList.add("nownohover");

        document.querySelector<HTMLElement>(".gr")!.style.pointerEvents = "none";

        document.querySelector<HTMLElement>("footer button:first-of-type")!.classList.remove("home_eng");
        document.querySelector<HTMLElement>("footer button:first-of-type")!.classList.add("home");
        document.querySelector<HTMLElement>("footer button:nth-of-type(2)")!.classList.remove("knowledge_eng");
        document.querySelector<HTMLElement>("footer button:nth-of-type(2)")!.classList.add("knowledge");
        document.querySelector<HTMLElement>("footer button:nth-of-type(3)")!.classList.remove("portfolio_eng");
        document.querySelector<HTMLElement>("footer button:nth-of-type(3)")!.classList.add("portfolio");
        document.querySelector<HTMLElement>("footer button:nth-of-type(4)")!.classList.remove("contact_eng");
        document.querySelector<HTMLElement>("footer button:nth-of-type(4)")!.classList.add("contact");
    }
}


export function changeto_eng() {
    document.querySelector<HTMLElement>(".gr")!.classList.add("nowhover");
    document.querySelector<HTMLElement>(".eng")!.classList.remove("nowhover");
    document.querySelector<HTMLElement>(".eng")!.classList.add("nownohover");

    document.querySelector<HTMLElement>(".gr")!.style.pointerEvents = "auto";

    document.querySelector<HTMLElement>(".home")!.classList.remove("home_no_anime");
    document.querySelector<HTMLElement>(".knowledge")!.classList.remove("knowledge_no_anime");
    document.querySelector<HTMLElement>(".portfolio")!.classList.remove("portfolio_no_anime");
    document.querySelector<HTMLElement>(".contact")!.classList.remove("contact_no_anime");
    document.querySelector<HTMLElement>(".home")!.classList.add("home_eng_no_anime");
    document.querySelector<HTMLElement>(".knowledge")!.classList.add("knowledge_eng_no_anime");
    document.querySelector<HTMLElement>(".portfolio")!.classList.add("portfolio_eng_no_anime");
    document.querySelector<HTMLElement>(".contact")!.classList.add("contact_eng_no_anime");
    document.querySelector<HTMLElement>(".home")!.classList.add("home_eng");
    document.querySelector<HTMLElement>(".knowledge")!.classList.add("knowledge_eng");
    document.querySelector<HTMLElement>(".portfolio")!.classList.add("portfolio_eng");
    document.querySelector<HTMLElement>(".contact")!.classList.add("contact_eng");
    document.querySelector<HTMLElement>(".home_eng_no_anime")!.classList.remove("home");
    document.querySelector<HTMLElement>(".knowledge_eng_no_anime")!.classList.remove("knowledge");
    document.querySelector<HTMLElement>(".portfolio_eng_no_anime")!.classList.remove("portfolio");
    document.querySelector<HTMLElement>(".contact_eng_no_anime")!.classList.remove("contact");
}

export function changeto_gr() {
    document.querySelector<HTMLElement>(".eng")!.classList.add("nowhover");
    document.querySelector<HTMLElement>(".gr")!.classList.remove("nowhover");
    document.querySelector<HTMLElement>(".gr")!.classList.add("nownohover");

    document.querySelector<HTMLElement>(".eng")!.style.pointerEvents = "auto";

    document.querySelector<HTMLElement>(".home_eng")!.classList.remove("home_eng_no_anime");
    document.querySelector<HTMLElement>(".knowledge_eng")!.classList.remove("knowledge_eng_no_anime");
    document.querySelector<HTMLElement>(".portfolio_eng")!.classList.remove("portfolio_eng_no_anime");
    document.querySelector<HTMLElement>(".contact_eng")!.classList.remove("contact_eng_no_anime");
    document.querySelector<HTMLElement>(".home_eng")!.classList.add("home_no_anime");
    document.querySelector<HTMLElement>(".knowledge_eng")!.classList.add("knowledge_no_anime");
    document.querySelector<HTMLElement>(".portfolio_eng")!.classList.add("portfolio_no_anime");
    document.querySelector<HTMLElement>(".contact_eng")!.classList.add("contact_no_anime");
    document.querySelector<HTMLElement>(".home_eng")!.classList.add("home");
    document.querySelector<HTMLElement>(".knowledge_eng")!.classList.add("knowledge");
    document.querySelector<HTMLElement>(".portfolio_eng")!.classList.add("portfolio");
    document.querySelector<HTMLElement>(".contact_eng")!.classList.add("contact");
    document.querySelector<HTMLElement>(".home")!.classList.remove("home_eng");
    document.querySelector<HTMLElement>(".knowledge")!.classList.remove("knowledge_eng");
    document.querySelector<HTMLElement>(".portfolio")!.classList.remove("portfolio_eng");
    document.querySelector<HTMLElement>(".contact")!.classList.remove("contact_eng");
}

