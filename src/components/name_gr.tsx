
const Name_gr = () => {

    onresize = () => {
        if (window.innerHeight <= 240) {
            document.body.style.overflowY = "scroll";
        }
        else document.body.style.overflowY = "hidden";
    };

    if (window.innerHeight <= 240) {
        document.body.style.overflowY = "scroll";
    }
    else document.body.style.overflowY = "hidden";

    return <div className="content">
        <div className="content_name">
            <h1 className="name_gr">ΓΕΩΡΓΙΟΣ_ΜΑΡΙΝΟΣ</h1>
            <h2 className="job_gr">WEB_DEVELOPER</h2>
        </div>
    </div>
}

export default Name_gr;
