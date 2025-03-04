import { useState, useEffect } from "react";

const Portfolio_eng = () => {
    const [hover_number, set_number] = useState<number | null>(null);
    const [selected, set_selected] = useState<{ id: number, title: string, img: string, vid?: string } | null>(null);
    const [fadeOut, fade_out] = useState(false);

    const projects = [
        { id: 1, title: "MARINOS.WEBSITE v2", img: "cv2.webp", vid: "vid_cv2.webp" },
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
    fade_out(false);
};

const close_overlay = () => {
    fade_out(true);
    setTimeout(() => {
        set_selected(null);
        fade_out(false);
    }, 300);
};

return (
    <div className="content">
        {selected && (
            <div
                className={`overlay${fadeOut ? " fade_out" : " fade_in"}`}
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
                    className="content"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        background: "linear-gradient(135deg, rgb(40, 44, 52), rgb(20, 22, 30))",
                        borderRadius: "30px",
                        boxShadow: "8px 8px 10px rgba(0, 0, 0, 0.3)",
                        padding: "20px",
                        textAlign: "center",
                        position: "relative",
                        width: "400px",
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
                            borderRadius: "50%",
                            width: "30px",
                            height: "30px",
                            cursor: "pointer",
                        }}
                    >
                        X
                    </button>
                    <h2>{selected.title}</h2>
                    {selected.vid ? (
                        <img
                            src={selected.vid}
                            loading="lazy"
                            style={{ width: "100%", borderRadius: "10px" }}
                        />
                    ) : (
                        <img
                            src={selected.img}
                            alt={selected.title}
                            loading="lazy"
                            style={{ width: "100%", borderRadius: "10px" }}
                        />
                    )}
                    <p>More details about {selected.title} will go here.</p>
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
                    />
                </div>
            ))}
        </div>
    </div>
);
};

export default Portfolio_eng;
