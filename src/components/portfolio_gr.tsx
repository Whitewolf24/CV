import { useEffect, useState } from "react";

const Portfolio_gr = () => {
    const [width, set_width] = useState(window.innerWidth);
    const [height, set_height] = useState(window.innerHeight);
    const [hoverNumber, set_number] = useState<number | null>(null);
    const [selected, set_selected] = useState<{ id: number, title: string, img: string } | null>(null);

    useEffect(() => {
        const handle_resize = () => {
            set_width(window.innerWidth);
            set_height(window.innerHeight);
        };

        window.addEventListener("resize", handle_resize);
        return () => window.removeEventListener("resize", handle_resize);
    }, []);

    const hover_desc = (num: number | null) => {
        set_number(num);
    };

    const projects = [
        { id: 1, title: "JOYSPOT", img: "cv.webp" },
        { id: 2, title: "MARINOS.WEBSITE", img: "cv.webp" },
        { id: 3, title: "MONGOXPRESS", img: "express.webp" },
        { id: 4, title: "E-KIOSK", img: "cv.webp" },
        { id: 5, title: "ΑΠΟΘΗΚΗ", img: "warehouse.webp" },
        { id: 6, title: "SWLYN", img: "express.webp" },
        { id: 7, title: "EYE LOGIN", img: "warehouse.webp" },
        { id: 8, title: "ΕΚΝΕΧΑ", img: "cv.webp" },
        { id: 9, title: "ΜΟΥΣΕΙΑ ΛΕΣΒΟΥ", img: "cv.webp" },
    ];

    const overflow = () => {
        if (window.innerHeight <= 630) {
            document.body.style.overflowY = "scroll";
        }
        else document.body.style.overflowY = "hidden";
    };


    overflow();
    window.addEventListener("resize", overflow);

    return (
        <div className="content">
            {selected && (
                <div className="overlay" onClick={() => set_selected(null)} style={{
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
                }}>
                    <div className="content" onClick={(e) => e.stopPropagation()} style={{
                        background: "white",
                        padding: "20px",
                        borderRadius: "10px",
                        width: "400px",
                        textAlign: "center",
                        position: "relative",
                    }}>
                        <button onClick={() => set_selected(null)} style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            background: "red",
                            color: "white",
                            border: "none",
                            borderRadius: "50%",
                            width: "30px",
                            height: "30px",
                            cursor: "pointer",
                        }}>X</button>
                        <h2>{selected.title}</h2>
                        <img src={selected.img} alt={selected.title} style={{ width: "100%", borderRadius: "10px" }} />
                        <p>More details about {selected.title} will go here.</p>
                    </div>
                </div>
            )}
            <div className="content_portfolio">
                {projects.map(({ id, title, img }) => (
                    <div key={id} className="portfolio_item"
                        onMouseEnter={() => hover_desc(id)}
                        onMouseLeave={() => hover_desc(null)}
                        onClick={() => set_selected({ id, title, img })}
                    >
                        <div
                            className="description_div"
                            style={{ opacity: hoverNumber === id ? 1 : 0 }}
                        >
                            <p>{title}</p>
                        </div>
                        <img
                            className="portfolio_img"
                            src={img}
                            alt={title}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio_gr;
