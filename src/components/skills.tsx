const Skills = () => {

    onresize = () => {
        const content_skills = document.querySelector(".content_skills") as HTMLDivElement;
        if (window.innerHeight <= 509) {
            document.body.style.overflowY = "scroll";
            content_skills.style.paddingBottom = "0.1rem";
        }
        else {
            document.body.style.overflowY = "hidden";
            content_skills.style.paddingBottom = "0rem";
        }
    };

    onload = () => {
        const content_skills = document.querySelector(".content_skills") as HTMLDivElement;
        if (window.innerHeight <= 509) {
            document.body.style.overflowY = "scroll";
            content_skills.style.paddingBottom = "0.1rem";
        }
        else {
            document.body.style.overflowY = "hidden";
            content_skills.style.paddingBottom = "0rem";
        }
    }

    return <div className="content"
        onAnimationStart={() => {
            if (navigator.userAgent.includes("Chrome") && navigator.userAgent.includes("Mobi")) {
                const content = document?.querySelector(".content") as HTMLDivElement;

                content.style.cssText += "overflow: hidden !important";
            }
        }}>
        <div className="content_skills" onAnimationStart={() => {
            if (navigator.userAgent.includes("Chrome") && navigator.userAgent.includes("Mobi")) {
                const content_skills = document?.querySelector(".content_skills") as HTMLDivElement;
                content_skills.style.cssText += "height: fit-content !important";
            }
        }}>
            <div id="backend">
                <h3>Backend</h3>
                <p>{"<?php?>"}</p>
                <p>@laravel</p>
                <p>SELECT * FROM MYSQL</p>
                <p>_id: MongoDB</p>
                <p>Next.</p>
                <p>router get('express')</p>
                <p>{"require"} ('moongoose')</p>
                <p>&#x007b;"JSON"&#x007d;</p>
                <p>/(Regex)/</p>
            </div>
            <div id="frontend">
                <h3>Frontend</h3>
                <p>&#x003c;html&#x003e;&#x003c;/html&#x003e;</p>
                <p>css {" {.bootstrap, .sass, "} <br></br> {".tailwind, .postcss}"}</p>
                <p>javascript() {"{<%=ejs%>, $jquery, :typescript, <react/>}"}</p>
            </div>
            <div id="wordp">
                <h3>Wordpress</h3>
                <p>&#x003c;! --Elementor-- &#x003e;</p>
                <p>&#x003c;! --WPbakery-- &#x003e;</p>
                <p>&#x003c;! --Woocomerce-- &#x003e;</p>
            </div>
            <div id="tools">
                <h3>Tools</h3>
                <p>NPM</p>
                <p>Git</p>
                <p>SEO</p>
                <p>Postman</p>
                <p>Jira</p>
                <p>Adobe XD</p>
                <p>Figma</p>
            </div>
        </div>
    </div >
}

onload = () => {
    if (navigator.userAgent.includes("Firefox") && navigator.userAgent.includes("Mobi")) {
        const footer = document?.querySelector("footer") as HTMLDivElement;
        footer.style.cssText += "top: 0rem !important";
        footer.style.cssText += "position: fixed !important";
    }
}

export default Skills;