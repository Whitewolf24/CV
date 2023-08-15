import { useEffect, useState } from 'react';


const Portfolio_gr = () => {

    const [desc_height_mouseia, set_desc_height_mouseia] = useState<string>("30px")
    const [desc_margin_b_mouseia, set_desc_margin_b_mouseia] = useState<string>("0px")
    const [desc_top_mouseia, set_desc_top_mouseia] = useState<string>("7.4rem")
    const [desc_left_mouseia, set_desc_left_mouseia] = useState<string>("1.2rem")

    const [desc_height_eknexa, set_desc_height_eknexa] = useState<string>("30px")
    const [desc_margin_b_eknexa, set_desc_margin_b_eknexa] = useState<string>("0px")
    const [desc_top_eknexa, set_desc_top_eknexa] = useState<string>("7.4rem")
    const [desc_left_eknexa, set_desc_left_eknexa] = useState<string>("1.2rem")

    const [desc_height_eye, set_desc_height_eye] = useState<string>("30px")
    const [desc_margin_b_eye, set_desc_margin_b_eye] = useState<string>("0px")
    const [desc_top_eye, set_desc_top_eye] = useState<string>("7.4rem")
    const [desc_left_eye, set_desc_left_eye] = useState<string>("1.2rem")

    const [desc_height_swlyn, set_desc_height_swlyn] = useState<string>("30px")
    const [desc_margin_b_swlyn, set_desc_margin_b_swlyn] = useState<string>("0px")
    const [desc_top_swlyn, set_desc_top_swlyn] = useState<string>("7.4rem")
    const [desc_left_swlyn, set_desc_left_swlyn] = useState<string>("1.2rem")

    const [desc_height_warehouse, set_desc_height_warehouse] = useState<string>("30px")
    const [desc_margin_b_warehouse, set_desc_margin_b_warehouse] = useState<string>("0px")
    const [desc_top_warehouse, set_desc_top_warehouse] = useState<string>("7.4rem")
    const [desc_left_warehouse, set_desc_left_warehouse] = useState<string>("1.2rem")

    const [desc_height_woo, set_desc_height_woo] = useState<string>("30px")
    const [desc_margin_b_woo, set_desc_margin_b_woo] = useState<string>("0px")
    const [desc_top_woo, set_desc_top_woo] = useState<string>("7.4rem")
    const [desc_left_woo, set_desc_left_woo] = useState<string>("1.2rem")

    const [desc_height_express, set_desc_height_express] = useState<string>("30px")
    const [desc_margin_b_express, set_desc_margin_b_express] = useState<string>("0px")
    const [desc_top_express, set_desc_top_express] = useState<string>("7.4rem")
    const [desc_left_express, set_desc_left_express] = useState<string>("1.2rem")

    const [desc_height_cv, set_desc_height_cv] = useState<string>("30px")
    const [desc_margin_b_cv, set_desc_margin_b_cv] = useState<string>("0px")
    const [desc_top_cv, set_desc_top_cv] = useState<string>("7.4rem")
    const [desc_left_cv, set_desc_left_cv] = useState<string>("1.2rem")

    const mouseia_style = {
        height: desc_height_mouseia,
        marginBlock: desc_margin_b_mouseia,
        top: desc_top_mouseia,
        left: desc_left_mouseia
    }

    const eknexa_style = {
        height: desc_height_eknexa,
        marginBlock: desc_margin_b_eknexa,
        top: desc_top_eknexa,
        left: desc_left_eknexa
    }

    const eye_style = {
        height: desc_height_eye,
        marginBlock: desc_margin_b_eye,
        top: desc_top_eye,
        left: desc_left_eye
    }

    const swlyn_style = {
        height: desc_height_swlyn,
        marginBlock: desc_margin_b_swlyn,
        top: desc_top_swlyn,
        left: desc_left_swlyn
    }

    const warehouse_style = {
        height: desc_height_warehouse,
        marginBlock: desc_margin_b_warehouse,
        top: desc_top_warehouse,
        left: desc_left_warehouse
    }
    const woo_style = {
        height: desc_height_woo,
        marginBlock: desc_margin_b_woo,
        top: desc_top_woo,
        left: desc_left_woo
    }

    const express_style = {
        height: desc_height_express,
        marginBlock: desc_margin_b_express,
        top: desc_top_express,
        left: desc_left_express
    }

    const cv_style = {
        height: desc_height_cv,
        marginBlock: desc_margin_b_cv,
        top: desc_top_cv,
        left: desc_left_cv
    }

    useEffect(() => {
        reset_mouseia_desc();
        reset_eknexa_desc();
        reset_eye_desc();
        reset_swlyn_desc();
        reset_warehouse_desc();
        reset_woo_desc();
        reset_express_desc();
        reset_cv_desc();
    }, []);

    //

    function hover_mouseia_desc() {
        if (window.innerWidth <= 482) {
            set_desc_height_mouseia("70px");
            set_desc_margin_b_mouseia("-19px")
            set_desc_top_mouseia("3.2rem")
        }
        if (window.innerWidth > 482 && window.innerWidth <= 600) {
            set_desc_height_mouseia("80px");
            set_desc_margin_b_mouseia("-25px")
            set_desc_top_mouseia("3.4rem")
            set_desc_left_mouseia("0.82rem")
        }
        else if (window.innerWidth > 600 && window.innerWidth <= 800) {
            set_desc_height_mouseia("110px");
        }
        else if (window.innerWidth > 800 && window.innerWidth <= 1020) {
            set_desc_height_mouseia("116px");
        }
        else if (window.innerWidth > 1020) {
            set_desc_height_mouseia("136px");
        }
    }

    function reset_mouseia_desc() {
        if (window.innerWidth <= 482) {
            set_desc_height_mouseia("30px");
            set_desc_margin_b_mouseia("1px")
            set_desc_top_mouseia("4.45rem")
            set_desc_left_mouseia("1.12rem")
        }
        if (window.innerWidth > 482 && window.innerWidth <= 600) {
            set_desc_height_mouseia("30px");
            set_desc_margin_b_mouseia("0px")
            set_desc_top_mouseia("5.1rem")
            set_desc_left_mouseia("0.82rem")
        }
        else if (window.innerWidth > 600 && window.innerWidth <= 800) {
            set_desc_height_mouseia("110px");
        }
        else if (window.innerWidth > 800 && window.innerWidth <= 1020) {
            set_desc_height_mouseia("116px");
        }
        else if (window.innerWidth > 1020) {
            set_desc_height_mouseia("136px");
        }
    }

    //

    function hover_eknexa_desc() {
        if (window.innerWidth <= 482) {
            set_desc_height_eknexa("70px");
            set_desc_margin_b_eknexa("-19px")
            set_desc_top_eknexa("3.15rem")
        }
        if (window.innerWidth > 482 && window.innerWidth <= 600) {
            set_desc_height_eknexa("80px");
            set_desc_margin_b_eknexa("-25px")
            set_desc_top_eknexa("3.4rem")
            set_desc_left_eknexa("0.82rem")
        }
        else if (window.innerWidth > 600 && window.innerWidth <= 800) {
            set_desc_height_eknexa("110px");
        }
        else if (window.innerWidth > 800 && window.innerWidth <= 1020) {
            set_desc_height_eknexa("116px");
        }
        else if (window.innerWidth > 1020) {
            set_desc_height_eknexa("136px");
        }
    }

    function reset_eknexa_desc() {
        if (window.innerWidth <= 482) {
            set_desc_height_eknexa("30px");
            set_desc_margin_b_eknexa("1px")
            set_desc_top_eknexa("4.45rem")
            set_desc_left_eknexa("1.12rem")
        }
        if (window.innerWidth > 482 && window.innerWidth <= 600) {
            set_desc_height_eknexa("30px");
            set_desc_margin_b_eknexa("0px")
            set_desc_top_eknexa("5.1rem")
            set_desc_left_eknexa("0.82rem")
        }
        else if (window.innerWidth > 600 && window.innerWidth <= 800) {
            set_desc_height_eknexa("110px");
        }
        else if (window.innerWidth > 800 && window.innerWidth <= 1020) {
            set_desc_height_eknexa("116px");
        }
        else if (window.innerWidth > 1020) {
            set_desc_height_eknexa("136px");
        }
    }

    //

    function hover_eye_desc() {
        if (window.innerWidth <= 482) {
            set_desc_height_eye("70px");
            set_desc_margin_b_eye("-19px")
            set_desc_top_eye("3.2rem")
        }
        if (window.innerWidth > 482 && window.innerWidth <= 600) {
            set_desc_height_eye("80px");
            set_desc_margin_b_eye("-25px")
            set_desc_top_eye("3.4rem")
            set_desc_left_eye("0.82rem")
        }
        else if (window.innerWidth > 600 && window.innerWidth <= 800) {
            set_desc_height_eye("110px");
        }
        else if (window.innerWidth > 800 && window.innerWidth <= 1020) {
            set_desc_height_eye("116px");
        }
        else if (window.innerWidth > 1020) {
            set_desc_height_eye("136px");
        }
    }

    function reset_eye_desc() {
        if (window.innerWidth <= 482) {
            set_desc_height_eye("30px");
            set_desc_margin_b_eye("1px")
            set_desc_top_eye("4.45rem")
            set_desc_left_eye("1.12rem")
        }
        if (window.innerWidth > 482 && window.innerWidth <= 600) {
            set_desc_height_eye("30px");
            set_desc_margin_b_eye("0px")
            set_desc_top_eye("5.1rem")
            set_desc_left_eye("0.82rem")
        }
        else if (window.innerWidth > 600 && window.innerWidth <= 800) {
            set_desc_height_eye("110px");
        }
        else if (window.innerWidth > 800 && window.innerWidth <= 1020) {
            set_desc_height_eye("116px");
        }
        else if (window.innerWidth > 1020) {
            set_desc_height_eye("136px");
        }
    }

    //

    function hover_swlyn_desc() {
        if (window.innerWidth <= 482) {
            set_desc_height_swlyn("70px");
            set_desc_margin_b_swlyn("-19px")
            set_desc_top_swlyn("3.2rem")
        }
        if (window.innerWidth > 482 && window.innerWidth <= 600) {
            set_desc_height_swlyn("80px");
            set_desc_margin_b_swlyn("-25px")
            set_desc_top_swlyn("3.4rem")
            set_desc_left_swlyn("0.82rem")
        }
        else if (window.innerWidth > 600 && window.innerWidth <= 800) {
            set_desc_height_swlyn("110px");
        }
        else if (window.innerWidth > 800 && window.innerWidth <= 1020) {
            set_desc_height_swlyn("116px");
        }
        else if (window.innerWidth > 1020) {
            set_desc_height_swlyn("136px");
        }
    }

    function reset_swlyn_desc() {
        if (window.innerWidth <= 482) {
            set_desc_height_swlyn("30px");
            set_desc_margin_b_swlyn("1px")
            set_desc_top_swlyn("4.45rem")
            set_desc_left_swlyn("1.12rem")
        }
        if (window.innerWidth > 482 && window.innerWidth <= 600) {
            set_desc_height_swlyn("30px");
            set_desc_margin_b_swlyn("0px")
            set_desc_top_swlyn("5.1rem")
            set_desc_left_swlyn("0.82rem")
        }
        else if (window.innerWidth > 600 && window.innerWidth <= 800) {
            set_desc_height_swlyn("110px");
        }
        else if (window.innerWidth > 800 && window.innerWidth <= 1020) {
            set_desc_height_swlyn("116px");
        }
        else if (window.innerWidth > 1020) {
            set_desc_height_swlyn("136px");
        }
    }

    //

    function hover_warehouse_desc() {
        if (window.innerWidth <= 482) {
            set_desc_height_warehouse("70px");
            set_desc_margin_b_warehouse("-19px")
            set_desc_top_warehouse("3.2rem")
        }
        if (window.innerWidth > 482 && window.innerWidth <= 600) {
            set_desc_height_warehouse("80px");
            set_desc_margin_b_warehouse("-25px")
            set_desc_top_warehouse("3.4rem")
            set_desc_left_warehouse("0.82rem")
        }
        else if (window.innerWidth > 600 && window.innerWidth <= 800) {
            set_desc_height_warehouse("110px");
        }
        else if (window.innerWidth > 800 && window.innerWidth <= 1020) {
            set_desc_height_warehouse("116px");
        }
        else if (window.innerWidth > 1020) {
            set_desc_height_warehouse("136px");
        }
    }

    function reset_warehouse_desc() {
        if (window.innerWidth <= 482) {
            set_desc_height_warehouse("30px");
            set_desc_margin_b_warehouse("1px")
            set_desc_top_warehouse("4.45rem")
            set_desc_left_warehouse("1.12rem")
        }
        if (window.innerWidth > 482 && window.innerWidth <= 600) {
            set_desc_height_warehouse("30px");
            set_desc_margin_b_warehouse("0px")
            set_desc_top_warehouse("5.1rem")
            set_desc_left_warehouse("0.82rem")
        }
        else if (window.innerWidth > 600 && window.innerWidth <= 800) {
            set_desc_height_warehouse("110px");
        }
        else if (window.innerWidth > 800 && window.innerWidth <= 1020) {
            set_desc_height_warehouse("116px");
        }
        else if (window.innerWidth > 1020) {
            set_desc_height_warehouse("136px");
        }
    }

    //

    function hover_woo_desc() {
        if (window.innerWidth <= 482) {
            set_desc_height_woo("70px");
            set_desc_margin_b_woo("-19px")
            set_desc_top_woo("3.2rem")
        }
        if (window.innerWidth > 482 && window.innerWidth <= 600) {
            set_desc_height_woo("80px");
            set_desc_margin_b_woo("-25px")
            set_desc_top_woo("3.4rem")
            set_desc_left_woo("0.82rem")
        }
        else if (window.innerWidth > 600 && window.innerWidth <= 800) {
            set_desc_height_woo("110px");
        }
        else if (window.innerWidth > 800 && window.innerWidth <= 1020) {
            set_desc_height_woo("116px");
        }
        else if (window.innerWidth > 1020) {
            set_desc_height_woo("136px");
        }
    }

    function reset_woo_desc() {
        if (window.innerWidth <= 482) {
            set_desc_height_woo("30px");
            set_desc_margin_b_woo("1px")
            set_desc_top_woo("4.45rem")
            set_desc_left_woo("1.12rem")
        }
        if (window.innerWidth > 482 && window.innerWidth <= 600) {
            set_desc_height_woo("30px");
            set_desc_margin_b_woo("0px")
            set_desc_top_woo("5.1rem")
            set_desc_left_woo("0.82rem")
        }
        else if (window.innerWidth > 600 && window.innerWidth <= 800) {
            set_desc_height_woo("110px");
        }
        else if (window.innerWidth > 800 && window.innerWidth <= 1020) {
            set_desc_height_woo("116px");
        }
        else if (window.innerWidth > 1020) {
            set_desc_height_woo("136px");
        }
    }

    //

    function hover_express_desc() {
        if (window.innerWidth <= 482) {
            set_desc_height_express("70px");
            set_desc_margin_b_express("-19px")
            set_desc_top_express("3.2rem")
        }
        if (window.innerWidth > 482 && window.innerWidth <= 600) {
            set_desc_height_express("80px");
            set_desc_margin_b_express("-25px")
            set_desc_top_express("3.4rem")
            set_desc_left_express("0.82rem")
        }
        else if (window.innerWidth > 600 && window.innerWidth <= 800) {
            set_desc_height_express("110px");
        }
        else if (window.innerWidth > 800 && window.innerWidth <= 1020) {
            set_desc_height_express("116px");
        }
        else if (window.innerWidth > 1020) {
            set_desc_height_express("136px");
        }
    }

    function reset_express_desc() {
        if (window.innerWidth <= 482) {
            set_desc_height_express("30px");
            set_desc_margin_b_express("1px")
            set_desc_top_express("4.45rem")
            set_desc_left_express("1.12rem")
        }
        if (window.innerWidth > 482 && window.innerWidth <= 600) {
            set_desc_height_express("30px");
            set_desc_margin_b_express("0px")
            set_desc_top_express("5.1rem")
            set_desc_left_express("0.82rem")
        }
        else if (window.innerWidth > 600 && window.innerWidth <= 800) {
            set_desc_height_express("110px");
        }
        else if (window.innerWidth > 800 && window.innerWidth <= 1020) {
            set_desc_height_express("116px");
        }
        else if (window.innerWidth > 1020) {
            set_desc_height_express("136px");
        }
    }

    //

    function hover_cv_desc() {
        if (window.innerWidth <= 482) {
            set_desc_height_cv("70px");
            set_desc_margin_b_cv("-19px")
            set_desc_top_cv("3.2rem")
        }
        if (window.innerWidth > 482 && window.innerWidth <= 600) {
            set_desc_height_cv("80px");
            set_desc_margin_b_cv("-25px")
            set_desc_top_cv("3.4rem")
            set_desc_left_cv("0.82rem")
        }
        else if (window.innerWidth > 600 && window.innerWidth <= 800) {
            set_desc_height_cv("110px");
        }
        else if (window.innerWidth > 800 && window.innerWidth <= 1020) {
            set_desc_height_cv("116px");
        }
        else if (window.innerWidth > 1020) {
            set_desc_height_cv("136px");
        }
    }

    function reset_cv_desc() {
        if (window.innerWidth <= 482) {
            set_desc_height_cv("30px");
            set_desc_margin_b_cv("1px")
            set_desc_top_cv("4.45rem")
            set_desc_left_cv("1.12rem")
        }
        if (window.innerWidth > 482 && window.innerWidth <= 600) {
            set_desc_height_cv("30px");
            set_desc_margin_b_cv("0px")
            set_desc_top_cv("5.1rem")
            set_desc_left_cv("0.82rem")
        }
        else if (window.innerWidth > 600 && window.innerWidth <= 800) {
            set_desc_height_cv("110px");
        }
        else if (window.innerWidth > 800 && window.innerWidth <= 1020) {
            set_desc_height_cv("116px");
        }
        else if (window.innerWidth > 1020) {
            set_desc_height_cv("136px");
        }
    }

    //----------//

    return <div className="content">
        <div className="content_portfolio">
            <div className="mouseia">
                <div className="description_div mouseia_desc" style={mouseia_style}>
                    <p>ΜΟΥΣΕΙΑ ΛΕΣΒΟΥ</p>
                </div>
                <img className="fake" src="#" onMouseEnter={hover_mouseia_desc} onMouseLeave={reset_mouseia_desc}></img>
                <img src="mouseia.webp"></img>
                <div className="tech">
                    <p className="year _2013">2013&nbsp;
                        <span className="libraries">&#123;jquery&#125;</span></p>
                </div>
            </div>
            <div className="eknexa">
                <div className="description_div eknexa_desc" style={eknexa_style}>
                    <p>ΣΤΗΝ ΠΛΑΤΕΙΑ</p>
                </div>
                <img className="fake" src="#" onMouseEnter={hover_eknexa_desc} onMouseLeave={reset_eknexa_desc}></img>
                <img src="eknexa.webp"></img>
                <div className="tech">
                    <p className="year _2014">2014&nbsp;
                        <span className="libraries">&#123;php,responsive&#125;</span></p>
                </div>
            </div>
            <div className="eye">
                <div className="description_div eye_desc" style={eye_style}>
                    <p>EYE</p>
                </div>
                <img className="fake" src="#" onMouseEnter={hover_eye_desc} onMouseLeave={reset_eye_desc}></img>

                <img src="eye.webp"></img>
                <div className="tech _2016_tech">
                    <p className="year _eknexa016">2016&nbsp;
                        <span className="libraries">&#123;bootstrap,jquery, responsive&#125;</span></p>
                </div>
            </div>
            <div className="swlyn">
                <div className="description_div swlyn_desc" style={swlyn_style}>
                    <p>ΣΩΛΥΝ</p>
                </div>
                <img className="fake" src="#" onMouseEnter={hover_swlyn_desc} onMouseLeave={reset_swlyn_desc}></img>

                <img src="swlyn.webp" ></img>
                <div className="tech">
                    <p className="year _2018">2018&nbsp;
                        <span className="libraries">&#123;JS,responsive&#125;</span></p>
                </div>
            </div>
            <div className="warehouse">
                <div className="description_div warehouse_desc" style={warehouse_style}>
                    <p>ΑΠΟΘΗΚΗ</p>
                </div>
                <img className="fake" src="#" onMouseEnter={hover_warehouse_desc} onMouseLeave={reset_warehouse_desc}></img>

                <img src="warehouse.webp"></img>
                <div className="tech _2020_tech">
                    <p className="year _2020">2020&nbsp;
                        <span className="libraries">&#123;JS,sass,laravel, mysql,responsive&#125;</span></p>
                </div>
            </div>
            <div className="woocommerce">
                <div className="description_div woocomerce_desc" style={woo_style}>
                    <p>E-KIOSK</p>
                </div>
                <img className="fake" src="#" onMouseEnter={hover_woo_desc} onMouseLeave={reset_woo_desc}></img>

                <img src="woocommerce.webp" ></img>
                <div className="tech _2021_tech">
                    <p className="year _2021">2021&nbsp;
                        <span className="libraries">&#123;elementor,woo- comerce,responsive&#125;</span></p>
                </div>
            </div>
            <div className="express">
                <div className="description_div express_desc" style={express_style}>
                    <p>MONGOXPRESS</p>
                </div>
                <img className="fake" src="#" onMouseEnter={hover_express_desc} onMouseLeave={reset_express_desc}></img>
                <img src="express.webp"></img>
                <div className="tech _2022_tech">
                    <p className="year _2022">2022
                        <span className="libraries">&#123;JS,ejs,postcss,mongo, tailwind,express, moongoose,responsive&#125;</span></p>
                </div>
            </div>
            <div className="cv">
                <div className="description_div cv_desc" style={cv_style}>
                    <p>CV</p>
                </div>
                <img className="fake" src="#" onMouseEnter={hover_cv_desc} onMouseLeave={reset_cv_desc}></img>
                <img src="#"></img>
                <div className="tech _2023_tech">
                    <p className="year _2023">2020-2023&nbsp;
                        <span className="libraries">&#123;react18,sass, typescript, responsive&#125;</span></p>
                </div>
            </div>
        </div>
    </div >
}

export default Portfolio_gr;
