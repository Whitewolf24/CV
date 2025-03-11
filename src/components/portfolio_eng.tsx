import { useState, useEffect } from "react";

const Portfolio_eng = () => {
    const [hover_number, set_number] = useState<number | null>(null);
    const [selected, set_selected] = useState<{ id: number, title: string, img: string, vid?: string } | null>(null);
    const [fade_out, func_fade_out] = useState(false);
    const [window_height, set_window_height] = useState(window.innerHeight);

    const projects = [
        { id: 1, title: "MARINOS.WEBSITE v2", img: "cv2.webp" },
        { id: 2, title: "JOYSPOT CALENDAR", img: "joyspot.webp", vid: "vid_joyspot.webp" },
        { id: 3, title: "MARINOS.WEBSITE v1", img: "cv.webp", vid: "vid_cv.webp" },
        { id: 4, title: "MONGOXPRESS", img: "express.webp", vid: "vid_express.webp" },
        { id: 5, title: "E-KIOSK", img: "woocommerce.webp", vid: "vid_woocomerce.webp" },
        { id: 6, title: "WAREHOUSE", img: "warehouse.webp", vid: "vid_warehouse.webp" },
        { id: 7, title: "SWLYN", img: "swlyn.webp", vid: "vid_swlyn.webp" },
        { id: 8, title: "EYE LOGIN", img: "eye.webp", vid: "vid_eye.webp" },
        { id: 9, title: "EKNEXA", img: "eknexa.webp", vid: "vid_eknexa.webp" },
        { id: 10, title: "MUSEUMS OF LESVOS", img: "mouseia.webp", vid: "vid_mouseia.webp" },
    ];

    useEffect(() => {
        const overflow = () => {
            if (window.innerWidth < 1240 || (window.innerWidth >= 1240 && window.innerHeight <= 610)) {
                document.body.style.overflowY = "scroll";
            } else {
                document.body.style.overflowY = "hidden";
            }
        };

        overflow();
        window.addEventListener("resize", overflow);
        return () => window.removeEventListener("resize", overflow);
    }, []);

    const open_overlay = (id: number, title: string, img: string, vid?: string) => {
        set_selected({ id, title, img, vid });
        func_fade_out(false);
    };

    const close_overlay = () => {
        func_fade_out(true);
        set_selected((prev) => prev ? { ...prev, vid: undefined } : null);
        setTimeout(() => {
            set_selected(null);
            func_fade_out(false);
        }, 300);
    };

    useEffect(() => {
        const detect_height = () => set_window_height(window.innerHeight);
        detect_height();
        window.addEventListener('resize', detect_height);

        return () => {
            window.removeEventListener('resize', detect_height);
        };
    }, []);

    const p_top = selected?.id === 2 ? "0vh" : "";
    const p_top_media = window_height <= 360 ? "3vh" : p_top;

    const p_scroll = selected?.id === 2 ? "hidden" : "hidden";
    const p_scroll_media = window_height <= 600 ? "scroll" : p_scroll;

    const p_scale = selected?.id === 2 ? "0.9" : "";
    const p_scale_media = window_height <= 600 ? "0.7" : p_scale;

    return (
        <div className="content">
            {selected && (
                <div
                    className={`overlay${fade_out ? " func_fade_out" : " fade_in"}`}
                    onClick={close_overlay}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0, 0, 0, 0.7)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 9999,
                    }}
                >
                    <div
                        id="overlay_content"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            background: "linear-gradient(135deg, rgb(40, 44, 52), rgb(20, 22, 30))",
                            borderRadius: "30px",
                            boxShadow: "8px 8px 10px rgba(0, 0, 0, 0.3)",
                            padding: "20px",
                            textAlign: "center",
                            position: "relative",
                            width: "70%",
                            height: "90vh",
                            display: "flex",
                            flexDirection: "column",
                            overflow: "hidden",
                        }}
                    >
                        <button
                            className="close_butt"
                            onClick={close_overlay}
                            style={{
                                position: "absolute",
                                top: "10px",
                                right: "10px",
                                color: "white",
                                border: "none",
                                width: "30px",
                                height: "30px",
                                cursor: "pointer",
                                backgroundColor: "rgb(55,55,65) ",
                                margin: "10px",
                                paddingInline: "10px",
                                borderRadius: "5px 10px 5px",
                                zIndex: "99"
                            }}
                        >
                            X
                        </button>
                        <h2 style={{
                            borderBottom: "3px dashed",
                            width: "fit-content",
                            marginBottom: "25px",
                            position: "relative",
                            marginTop: "0px",
                            zIndex: "99",
                        }}>{selected.title}</h2>
                        {selected.vid ? (
                            <img
                                src={selected.vid}
                                loading="lazy"
                                style={{
                                    borderRadius: "10px",
                                    position: "relative",
                                    alignSelf: "center"
                                }}
                                draggable="false"
                            />
                        ) : (
                            <img
                                src={selected.img}
                                alt={selected.title}
                                loading="lazy"
                                style={{
                                    borderRadius: "10px",
                                    position: "relative",
                                    alignSelf: "center"
                                }}
                                draggable="false"
                            />
                        )}
                        <p style={{
                            alignSelf: "center",
                            position: "relative",
                            textAlign: "justify",
                            scale: selected?.id === 2 ? p_scale_media : "",
                            overflowY: selected?.id === 2 ? p_scroll_media : "hidden",
                            top: selected?.id === 2 ? p_top_media : "",
                            width: selected?.id === 2 ? "70vw" : "",

                        }}>  {selected?.id === 1 ? "A modernized version of my portfolio website with an improved user interface and enhanced architecture. This resulted in stronger SEO, and by utilizing React 19, it achieves faster response times and optimal performance." :
                            selected?.id === 2 ? "A web application which I worked on as a freelance developer. I customized a WordPress calendar plugin and modified the applied theme to meet the specific needs of a gym. The modifications included booking restrictions based on customer subscription type, availability checks, as well as design and performance improvements."
                                :
                                selected?.id === 3 ? "My first portfolio, which started as a test project in React and evolved into a professional website designed to showcase my projects and skills."
                                    :
                                    selected?.id === 4 ? "A fully functional online platform where users can register, post, and edit content, as well as read posts from other users. Developed with Express and using MongoDB for data storage."
                                        :
                                        selected?.id === 5 ? "A fully operational e-commerce site built on WordPress. The interface was designed using Elementor, while product management is handled through WooCommerce."
                                            :
                                            selected?.id === 6 ? "A website built for product cataloging, developed using jQuery for interactivity and Laravel for the backend. Later, the backend was migrated from MySQL to PostgreSQL due to new hosting requirements."
                                                :
                                                selected?.id === 7 ? `A personal project for practicing CSS and JavaScript, where I recreated YouTube’s interface. It is purely a design and frontend project, with the only functional part being the homepage, which dynamically generates unlimited "videos" via JavaScript. It also includes options for changing the language and color theme` :
                                                    selected?.id === 8 ? "A personal project for practicing jQuery, with a focus on PHP and MySQL. It includes a simple user registration and login form, programmed to enforce strong passwords and display warnings using Bootstrap notifications. If the user is already registered, they are redirected to a secondary page. Later, the backend was migrated from MySQL to PostgreSQL due to new hosting requirements."
                                                        :
                                                        selected?.id === 9 ? "A web application created to fulfill the needs of the office where I completed my internship. Through a form, text was stored in local .txt files via PHP, and images were saved locally whenever a post was created. The current version was upgraded to Laravel and modified to store text and images in Backblaze cloud storage"
                                                            : selected?.id === 10 ? "A project developed during my studies. It serves as a prototype for a website designed to promote museums and the natural beauty of the island of Lesvos."
                                                                : ""}
                        </p>
                        <p className="overlay_skillz"
                            style={{
                                position: "absolute",
                                alignSelf: "center",
                                bottom: "0",
                            }}>  {selected?.id === 1 ? `<2024-2025> : "react19", "sass", "typescript", "vite", "responsive"` :
                                selected?.id === 2 ? `<2024-2025> : "wordpress", "wordpress themes", "wordpress plugins", "php", "mysql"`
                                    :
                                    selected?.id === 3 ? `<2020-2021, 2023> : "react18", "sass", "typescript", "vite", "responsive"`
                                        :
                                        selected?.id === 4 ? `<2022, 2024> : "api", "ejs", "postcss", "tailwind", "mongodb", "redis", "express", "node", "responsive"`
                                            : selected?.id === 5 ? `<2021>: "wordpress", "woocomerce", "elementor", "responsive"` :
                                                selected?.id === 6 ? `<2020, 2024> : "jquery", "sass", "laravel", "php", "mysql", "pqsl", "docker", "responsive"`
                                                    :
                                                    selected?.id === 7 ? `<2018> : "js", "css", "responsive"`
                                                        :
                                                        selected?.id === 8 ? `<2016, 2024> : "jquery", "bootstrap", "laravel", "php", "mysql", "pqsl", "docker", "responsive"`
                                                            :
                                                            selected?.id === 9 ? `<2014, 2024>: "api", "js", "css", "laravel", "php", "mysql", "pqsl", "docker", "responsive"`
                                                                :
                                                                selected?.id === 10 ? `<2013>: "jquery", "css"`
                                                                    : ""}
                        </p>
                        <div className="overlay_buttons_div">
                            <button
                                className="www"
                                onClick={close_overlay}
                                disabled={selected?.id === 1}
                                style={{
                                    position: "absolute",
                                    bottom: "0",
                                    left: "-0.25rem",
                                    color: "white",
                                    borderRadius: "5px 20px 5px",
                                    height: selected?.id === 1
                                        ? "40px" : "35px",
                                    cursor: selected?.id === 1 ? "default" : "pointer",
                                    fontSize: "10px",
                                    letterSpacing: "1.5px",
                                    backgroundColor: "rgb(40,55,70) ",
                                    marginLeft: "12px",
                                    marginBottom: selected?.id === 1
                                        ? "5.8px" : "8px",
                                    width: selected?.id === 1
                                        ? "4.5rem" : "5rem",
                                    pointerEvents: selected?.id === 1 ? "none" : "auto",
                                    filter: `brightness(${selected?.id === 1 ? 0.6 : 1})`,
                                    boxShadow: selected?.id === 1
                                        ? "inset 0 4px 6px rgba(0, 0, 0, 0.5), inset 0 1px 4px rgba(0, 0, 0, 0.3)"
                                        : "none"
                                }}>
                                {selected?.id === 1 ? "YOU ARE HERE" : "VISIT"}
                            </button>
                            <button
                                className="git"
                                onClick={close_overlay}
                                style={{
                                    position: "absolute",
                                    bottom: "0",
                                    right: "10px",
                                    color: "white",
                                    borderRadius: "5px 10px 5px",
                                    height: "30px",
                                    cursor: "pointer",
                                    fontSize: "1ch",
                                    letterSpacing: "1.5px",
                                    backgroundColor: "rgb(40,55,70) ",
                                    margin: "10px",
                                    paddingInline: "10px",
                                }}
                            >
                                GIT
                            </button>
                        </div>
                    </div>
                </div>
            )
            }

            <div className="content_portfolio">
                {projects.map(({ id, title, img, vid }) => (
                    <div
                        key={id}
                        className="portfolio_item"
                        onMouseEnter={() => set_number(id)}
                        onMouseLeave={() => set_number(null)}
                    >
                        <div
                            className="description_div"
                            style={{
                                opacity: hover_number === id ? 1 : 0,
                                animation: hover_number === id ? "fade_in 0.3s ease-in forwards" : "fade_out 0.3s ease-in forwards",
                            }}
                        >
                            <p style={{ pointerEvents: "none" }}>{title}</p>
                        </div>
                        <img
                            className="portfolio_img"
                            src={img}
                            alt={title}
                            onClick={() => open_overlay(id, title, img, vid)}
                            style={{ cursor: "pointer" }}
                            draggable="false"
                        />
                    </div>
                ))}
            </div>
        </div >
    );
};


export default Portfolio_eng;
