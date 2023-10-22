const Name_eng = () => {

    onresize = () => {
        //const content_name = document.querySelector(".content_name") as HTMLDivElement;
        if (window.innerHeight <= 230) {
            document.body.style.overflowY = "scroll";
        }
        else {
            if (!navigator.userAgent.includes("Chrome") && !navigator.userAgent.includes("Mobi")) {
                document.body.style.overflowY = "hidden";
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };

    onload = () => {
        if (window.innerHeight <= 230) {
            document.body.style.overflowY = "scroll";
        }
        else {
            if (!navigator.userAgent.includes("Chrome") && !navigator.userAgent.includes("Mobi")) {
                document.body.style.overflowY = "hidden";
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    }


    if (navigator.userAgent.includes("Firefox") && navigator.userAgent.includes("Mobi")) {
        onload = () => {
            const footer = document?.querySelector("footer") as HTMLDivElement;
            // document.body.style.cssText += "overflow: hidden !important";
            footer.style.cssText += "top: auto !important";
            footer.style.cssText += "bottom: 0rem !important";
            footer.style.cssText += "position: fixed !important";
        }
    }

    return <div className="content"
        onAnimationStart={() => {
            if (navigator.userAgent.includes("Chrome") && navigator.userAgent.includes("Mobi")) {
                const content = document?.querySelector(".content") as HTMLDivElement;

                content.style.cssText += "overflow: hidden !important";
            }
        }}>        <div className="content_name" onAnimationStart={() => {
            if (navigator.userAgent.includes("Chrome") && navigator.userAgent.includes("Mobi")) {
                const content_name = document?.querySelector(".content_name") as HTMLDivElement;
                content_name.style.cssText += "height: fit-content !important";
            }
        }}>
            <h1 className="name_eng">GEORGE MARINOS</h1>
            <h2 className="job_eng">WEB_DEVELOPER</h2>
        </div>
    </div >
}

export default Name_eng;