import { useState, useEffect, useRef } from "react";

const Name_gr = () => {
    const [show_butt, show_butt_state] = useState(false);

    const name_ref = useRef<HTMLHeadingElement | null>(null);
    const job_ref = useRef<HTMLHeadingElement | null>(null);

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
        }, 7000);

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
                element.style.animation = "none";

                if (["fade_in", "appear", "header"].includes(anime)) {
                    element.style.opacity = "100%";
                }

                const final_width: Record<string, string> = {
                    typewriter: "11em",
                    typewriter_job: "9em",
                    typewriter_home: "3em",
                    typewriter_knowledge: "7em",
                    typewriter_portfolio: "13em",
                    typewriter_contact: "9em",
                    typewriter_span: "1.5em",
                    typewriter_home_eng: "4em",
                    typewriter_knowledge_eng: "8em",
                    typewriter_portfolio_eng: "8em",
                    typewriter_contact_eng: "6.5em"
                };

                anime.split(", ").forEach((a) => {
                    if (final_width[a]) {
                        element.style.width = final_width[a];
                        element.style.borderRight = "none";
                        element.style.opacity = "100%";
                    }
                });

                if (element.classList.contains("contact")) {
                    element.style.animation = "blinktext 700ms steps(40) infinite normal forwards";
                    element.style.borderRight = "1px solid white";
                }
            }
        });
    };

    useEffect(() => {
        if (name_ref.current && job_ref.current) {
            const name_element = name_ref.current;
            const job_element = job_ref.current;

            name_element.classList.add("start-animation");
            job_element.classList.add("start-animation");

            setTimeout(() => {
                name_element.classList.remove("start-animation");
                name_element.classList.add("start-animation");

                job_element.classList.remove("start-animation");
                job_element.classList.add("start-animation");
            }, 10);
        }
    }, []);

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
                <h1 className="name_gr" ref={name_ref}>ΓΕΩΡΓΙΟΣ_ΜΑΡΙΝΟΣ</h1>
                <h2 className="job_gr" ref={job_ref}>WEB_DEVELOPER</h2>

            </div>
        </div>
    );
};

export default Name_gr;
