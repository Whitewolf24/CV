const Skills = (props: any) => {
    return <div className="content">
        <div className="content_skills">
            <div id="backend">
                <h3>Backend</h3>
                <p>{"<?php?>"}</p>
                <p>SELECT * FROM MYSQL</p>
                <p>_id: MongoDB</p>
                <p>router get('express')</p>
                <p>{"require"}('moongoose')</p>
                <p>&#x007b;"JSON"&#x007d;</p>
                <p>/(Regex)/</p>
            </div>
            <div id="frontend">
                <h3>Frontend</h3>
                <p>&#x003c;html&#x003e;&#x003c;/html&#x003e;</p>
                <p>css {" {.bootstrap .sass "} <br></br> {".tailwind .postcss }"}</p>
                <p>javascript() {"{ <%=ejs%> $jquery :typescript /react }"}</p>
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
                <p>Postman</p>
                <p>AdobeXD</p>
                <p>Figma</p>
                <p>Git</p>
            </div>
        </div>
    </div >
}

export default Skills;