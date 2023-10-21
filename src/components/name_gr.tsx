
const Name_gr = () => {

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

    return <div className="content">
        <div className="content_name" onAnimationStart={() => {
            if (navigator.userAgent.includes("Chrome") && navigator.userAgent.includes("Mobi")) {
                const content_name = document?.querySelector(".content_name") as HTMLDivElement;
                content_name.style.cssText += "height: fit-content !important";
            }
        }}>
            <h1 className="name_gr">ΓΕΩΡΓΙΟΣ_ΜΑΡΙΝΟΣ</h1>
            <h2 className="job_gr">WEB_DEVELOPER</h2>
        </div>
    </div>
}

export default Name_gr;
