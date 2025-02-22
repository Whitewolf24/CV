const Skills = () => {

    onresize = () => {
        const content_skills = document.querySelector(".content_skills") as HTMLDivElement;
        if (window.innerHeight <= 580 && window.innerWidth <= 450
            || window.innerHeight <= 592 && window.innerWidth >= 450 && !(window.innerWidth == 800)
            || window.innerHeight <= 509 && window.innerWidth >= 800) {
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
        if (window.innerHeight <= 580 && window.innerWidth <= 450
            || window.innerHeight <= 592 && window.innerWidth >= 450 && !(window.innerWidth == 800)
            || window.innerHeight <= 509 && window.innerWidth >= 800) {
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
                //content_skills.style.cssText += "right: 0.2rem !important";
                content_skills.style.cssText += "margin: 0 auto !important";
            }
        }}>
            <div id="backend">
                <h3>Backend</h3>
                <p>{"<?php"}</p>
                <p>&#x007b;route::get ('/laravel')&#x007d;</p>
                <p>SELECT * FROM mysql JOIN postgre</p>
                <p>_id: MongoDB</p>
                <p>rPush(Redis)</p>
                <p>router.get ('express')</p>
                <p>&#x007b;"JSON"&#x007d;</p>
            </div>
            <div id="frontend">
                <h3>Frontend</h3>
                <p>&#x003c;html&#x003e;&#x003c;/html&#x003e;</p>
                <p>css {" {.bootstrap, .sass, "} <br></br> {".tailwind, .postcss}"}</p>
                <p>javascript() {"{<%=ejs%>, $jquery, :typescript, <React />}"}</p>
            </div>
            <div id="wordp">
                <h3>Wordpress</h3>
                <p>&#x003c;! --Plugins-- &#x003e;</p>
                <p>&#x003c;! --Elementor-- &#x003e;</p>
                <p>&#x003c;! --WPbakery-- &#x003e;</p>
                <p>&#x003c;! --Woocomerce-- &#x003e;</p>
            </div>
            <div id="tools">
                <h3>Workflow</h3>
                <p>{":dev {NPM, Git, Docker}"}</p>
                <p>{":design {Adobe, Figma}"}</p>
                <p>{":SEO"}</p>
            </div>
        </div>
    </div >
}

export default Skills;