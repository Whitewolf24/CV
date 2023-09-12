import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact_gr = () => {
    const form = useRef();

    onresize = () => {
        if (window.innerHeight <= 430) {
            document.body.style.overflowY = "scroll";
        }
        else document.body.style.overflowY = "hidden";
    };

    if (window.innerHeight <= 430) {
        document.body.style.overflowY = "scroll";
    }
    else document.body.style.overflowY = "hidden";

    function send_email(e) {
        e.preventDefault();
        emailjs.sendForm("service_csf2yrt", "template_vz3nrl7", form.current, "vlmZE8H22O2e_lQFj")
            .then((response) => {
                console.log('Email sent successfully:', response);
                e.target.reset();
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    }

    return <div className="content">
        <div className="content_contact">
            <form ref={form} onSubmit={send_email} /*method="POST"  data-sitekey="vlmZE8H22O2e_lQFj"*/>
                <div>
                    <input type="email" name="email" placeholder="Email Επικοινωνίας" required />
                </div>

                <div>
                    <textarea name="message" placeholder="Μήνυμα" required></textarea>
                </div>

                <button type="submit" value="Send">Aποστολή</button>
            </form>

        </div>
    </div>
}

export default Contact_gr;