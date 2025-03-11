import { useState, useEffect } from "react";

const Name_gr = () => {
    const [show_butt, show_butt_state] = useState(false);

    useEffect(() => {
        const resize_scale = () => {
            if (!navigator.userAgent.includes("Chrome") && !navigator.userAgent.includes("Mobi")) {
                document.body.style.overflowY = "hidden";
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        };

        resize_scale();
        window.addEventListener("resize", resize_scale);

        return () => {
            window.removeEventListener("resize", resize_scale);
        };
    }, []);

    useEffect(() => {
        const timein = setTimeout(() => {
            show_butt_state(true);
        }, 500);

        const timeout = setTimeout(() => {
            show_butt_state(false);
        }, 9500);

        return () => {
            clearTimeout(timein);
            clearTimeout(timeout);
        };
    }, []);

    const anime_stop = () => {
        document.querySelectorAll("*").forEach((el) => {
            const element = el as HTMLElement;
            const comp_style = window.getComputedStyle(element);
            const anime = comp_style.animationName;

            show_butt_state(false);

            if (anime) {
                // Stop animations for all elements
                element.style.animation = "none";

                // Reset opacity for specific animations
                if (["fade_in", "appear", "header"].includes(anime)) {
                    element.style.opacity = "100%";
                }

                // Apply width based on the animation names, but don't affect footer buttons
                const final_width: Record<string, string> = {
                   typewriter: "11em",
                    typewriter_job: "9em",
                    typewriter_home: "3em",
                    typewriter_knowledge: "7em",
                    typewriter_portfolio: "13em",
                    typewriter_contact: "9em",
                    typewriter_span: "1.5em",
                    typewriter_home_eng: "3em",
                    typewriter_knowledge_eng: "7.5em",
                    typewriter_portfolio_eng: "7.5em",
                    typewriter_contact_eng: "6.5em"
                };

                anime.split(", ").forEach((a) => {
                    if (final_width[a]) {
                        element.style.width = final_width[a];
                        element.style.borderRight = "none"; // Ensure no border interference
                        element.style.opacity = "100%";
                    }
                });

                // Special handling for "contact" class
                if (element.classList.contains("contact")) {
                    element.style.animation = "blinktext 700ms steps(40) infinite normal forwards";
                    element.style.borderRight = "1px solid white";
                }
            }
        });
    };

    return (
        <div className="content">
            <button
                className="anime_stop"
                onClick={anime_stop}
                style={{
                    opacity: show_butt ? 1 : 0,
                    transition: "opacity 0.5s ease-in",
                }}>
                Παράλειψη animations
            </button>
            <div className="content_name">
                <h1 className="name_gr">ΓΕΩΡΓΙΟΣ_ΜΑΡΙΝΟΣ</h1>
                <h2 className="job_gr">WEB_DEVELOPER</h2>

            </div>
        </div>
    );
};

export default Name_gr;
