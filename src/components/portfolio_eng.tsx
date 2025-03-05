import { useState, useEffect } from "react";

const Portfolio_eng = () => {
    const [hover_number, set_number] = useState<number | null>(null);
    const [selected, set_selected] = useState<{ id: number, title: string, img: string, vid?: string } | null>(null);
    const [fade_out, func_fade_out] = useState(false);

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
                        zIndex: 1000,
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
                            }}
                        >
                            X
                        </button>
                        <h2 style={{
                            borderBottom: "3px dashed",
                            width: "fit-content",
                            marginBottom: "35px",
                            marginInline: "auto"
                        }}>{selected.title}</h2>
                        {selected.vid ? (
                            <img
                                src={selected.vid}
                                loading="lazy"
                                style={{ width: "100%", borderRadius: "10px" }}
                                draggable="false"
                            />
                        ) : (
                            <img
                                src={selected.img}
                                alt={selected.title}
                                loading="lazy"
                                style={{ width: "100%", borderRadius: "10px" }}
                                draggable="false"
                            />
                        )}
                        <p style={{ marginBottom: "50px" }}> {selected.title}</p>
                        <button
                            className="www"
                            onClick={close_overlay}
                            disabled={selected?.id === 1}
                            style={{
                                position: "absolute",
                                bottom: "0px",
                                left: "10px",
                                color: "white",
                                borderRadius: "5px 20px 5px",
                                height: "30px",
                                cursor: selected?.id === 1 ? "default" : "pointer",
                                fontSize: "1ch",
                                letterSpacing: "1.5px",
                                backgroundColor: "rgb(40,55,70) ",
                                margin: "10px",
                                paddingInline: "10px",
                                pointerEvents: selected?.id === 1 ? "none" : "auto",
                                filter: `brightness(${selected?.id === 1 ? 0.6 : 1})`
                            }}
                        >
                            {selected?.id === 1 ? "YOU ARE HERE" : "VISIT"}
                        </button>
                        <button
                            className="git"
                            onClick={close_overlay}
                            style={{
                                position: "absolute",
                                bottom: "0px",
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
            )}

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
        </div>
    );
};


export default Portfolio_eng;
