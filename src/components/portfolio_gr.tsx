import { useState, useEffect } from "react";

const Portfolio_gr = () => {
    const [hover_number, set_number] = useState<number | null>(null);
    const [selected, set_selected] = useState<{ id: number, title: string, img: string, vid?: string } | null>(null);
    const [fade_out, func_fade_out] = useState(false);

    const projects = [
        { id: 1, title: "MARINOS.WEBSITE v2", img: "cv2.webp" },
        { id: 2, title: "ΗΜΕΡΟΛΟΓΙΟ JOYSPOT", img: "joyspot.webp", vid: "vid_joyspot.webp" },
        { id: 3, title: "MARINOS.WEBSITE v1", img: "cv.webp", vid: "vid_cv.webp" },
        { id: 4, title: "MONGOXPRESS", img: "express.webp", vid: "vid_express.webp" },
        { id: 5, title: "E-KIOSK", img: "woocommerce.webp", vid: "vid_woocomerce.webp" },
        { id: 6, title: "ΑΠΟΘΗΚΗ", img: "warehouse.webp", vid: "vid_warehouse.webp" },
        { id: 7, title: "SWLYN", img: "swlyn.webp", vid: "vid_swlyn.webp" },
        { id: 8, title: "EYE LOGIN", img: "eye.webp", vid: "vid_eye.webp" },
        { id: 9, title: "ΕΚΝΕΧΑ", img: "eknexa.webp", vid: "vid_eknexa.webp" },
        { id: 10, title: "ΜΟΥΣΕΙΑ ΛΕΣΒΟΥ", img: "mouseia.webp", vid: "vid_mouseia.webp" },
    ];

    useEffect(() => {
        const overflow = () => {
            if (window.innerWidth < 1240 || (window.innerWidth >= 1240 && window.innerHeight <= 610)) {
                document.body.style.overflowY = "scroll";
            } else {
                document.body.style.overflowY = "hidden";
            }
        };

        overflow();
        window.addEventListener("resize", overflow);
        return () => window.removeEventListener("resize", overflow);
    }, []);

    const open_overlay = (id: number, title: string, img: string, vid?: string) => {
        set_selected({ id, title, img, vid });
        func_fade_out(false);
    };

    const close_overlay = () => {
        func_fade_out(true);
        set_selected((prev) => prev ? { ...prev, vid: undefined } : null);
        setTimeout(() => {
            set_selected(null);
            func_fade_out(false);
        }, 300);
    };

    return (
        <div className="content">
            {selected && (
                <div
                    className={`overlay${fade_out ? " func_fade_out" : " fade_in"}`}
                    onClick={close_overlay}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0, 0, 0, 0.7)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 9999,
                    }}
                >
                    <div
                        id="overlay_content"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            background: "linear-gradient(135deg, rgb(40, 44, 52), rgb(20, 22, 30))",
                            borderRadius: "30px",
                            boxShadow: "8px 8px 10px rgba(0, 0, 0, 0.3)",
                            padding: "20px",
                            textAlign: "center",
                            position: "relative",
                            width: "70%",
                            height: "90vh",
                            display: "flex",
                            flexDirection: "column",
                            overflow: "hidden",
                        }}
                    >
                        <button
                            className="close_butt"
                            onClick={close_overlay}
                            style={{
                                position: "absolute",
                                top: "10px",
                                right: "10px",
                                color: "white",
                                border: "none",
                                width: "30px",
                                height: "30px",
                                cursor: "pointer",
                                backgroundColor: "rgb(55,55,65) ",
                                margin: "10px",
                                paddingInline: "10px",
                                borderRadius: "5px 10px 5px",
                                zIndex: "99"
                            }}
                        >
                            X
                        </button>
                        <h2 style={{
                            borderBottom: "3px dashed",
                            width: "fit-content",
                            marginBottom: "35px",
                            marginInline: "auto",
                            position: "relative",
                            zIndex: "99",
                        }}>{selected.title}</h2>
                        {selected.vid ? (
                            <img
                                src={selected.vid}
                                loading="lazy"
                                style={{
                                    width: "62vw",
                                    height: "40vh",
                                    borderRadius: "10px",
                                    marginBottom: "30px",
                                    position: "relative",
                                    alignSelf: "center"
                                }}
                                draggable="false"
                            />
                        ) : (
                            <img
                                src={selected.img}
                                alt={selected.title}
                                loading="lazy"
                                style={{
                                    width: "62vw",
                                    height: "40vh",
                                    borderRadius: "10px",
                                    marginBottom: "5px",
                                    position: "relative",
                                    alignSelf: "center"
                                }}
                                draggable="false"
                            />
                        )}
                        <p style={{
                            position: "relative",
                            alignSelf: "center"
                        }}>  {selected?.id === 1 ? "Μια εκσυγχρονισμένη έκδοση της portfolio ιστοσελίδας μου, με βελτιωμένο γραφικό περιβάλλον και αναβαθμισμένη αρχιτεκτονική. Αυτό οδήγησε σε ενισχυμένο SEO, και χρησιμοποιώντας React 19, ταχύτερη απόκριση και βέλτιστη απόδοση" :
                            selected?.id === 2 ? "Μια διαδικτυακή εφαρμογή, στην οποία συμμετείχα ως ελεύθερος επαγγελματίας. Εργάστηκα πάνω στην προσαρμογή ενός WordPress plugin ημερολογίου και στη διαμόρφωση του εφαρμοσμένου theme, ώστε να καλύπτει τις εξειδικευμένες ανάγκες ενός γυμναστηρίου. Οι τροποποιήσεις περιλάμβαναν λειτουργίες όπως περιορισμοί στις κρατήσεις ανάλογα με τη συνδρομή του πελάτη, έλεγχος διαθεσιμότητας, καθώς και βελτιώσεις στον σχεδιασμό και την απόκριση."
                                :
                                selected?.id === 3 ? "Το πρώτο μου portfolio, το οποίο ξεκίνησε ως ένα δοκιμαστικό project στην react και εξελίχθηκε σε μια επαγγελματική ιστοσελίδα με σκοπό να παρουσιάσει τα project μου και τις δεξιότητές μου."
                                    :
                                    selected?.id === 4 ? "Μια πλήρως λειτουργική διαδικτυακή πλατφόρμα, όπου οι χρήστες μπορούν να εγγραφούν, να δημοσιεύσουν και να επεξεργαστούν αναρτήσεις, καθώς και να διαβάσεις αναρτήσεις από άλλους χρήστες. Αναπτύχθηκε με Express και χρησιμοποιεί MongoDB για αποθήκευση δεδομένων."
                                        :
                                        selected?.id === 5 ? "Ένα πλήρως λειτουργικό e-commerce site με βάση το WordPress. Η διεπαφή του σχεδιάστηκε μέσω Elementor, ενώ η διαχείριση των προϊόντων πραγματοποιείται μέσω WooCommerce."
                                            :
                                            selected?.id === 6 ? "Ιστοσελίδα που λειτουργεί για καταγραφή προϊόντων, υλοποιημένη με την χρήση jquery για την διαδραστικότητα, και Laravel στο backend. Αργότερα το backend τροποποιήθηκε από MySQL σε PostgreSQL, λόγω νέων απαιτήσεων του hosting περιβάλλοντος."
                                                :
                                                selected?.id === 7 ? `Ένα προσωπικό project για εξάσκηση στη CSS και τη JavaScript, όπου αναπαρήγαγα τη διεπαφή του YouTube. Είναι ένα καθαρά σχεδιαστικό και frontend project. Το μόνο λειτουργικό κομμάτι είναι η αρχική σελίδα, η οποία προσφέρει απεριόριστα, δυναμικά παραγόμενα "βίντεο" μέσω javascript. Επίσης προσφέρεται η δυνατότητα αλλαγής γλώσσας και χρωματικού θέματος.` :
                                                    selected?.id === 8 ? "Ένα προσωπικό project για εξάσκηση στην JQuery, και κυρίως στην PHP και MySQL. Μια απλή φόρμα εγγραφής και σύνδεσης ενός χρήστη, ρυθμισμένη για να ελέγχει και απαιτεί ισχυρό κωδικό κατα την διαδικασία, και σε αντίθετη περίπτωση να προειδοποιεί μέσω μηνυμάτων σχεδιασμένων σε bootstrap. Αν ο χρήστης είναι ήδη καταγεγραμμένος, τότε προωθείτε σε μια δευτερεύουσα σελίδα. Αργότερα το backend τροποποιήθηκε από MySQL σε PostgreSQL, λόγω νέων απαιτήσεων του hosting περιβάλλοντος."
                                                        :
                                                        selected?.id === 9 ? "Διαδικτυακή εφαρμογή που δημιουργήθηκε για να ικανοποιήσει της ανάγκες του γραφείου στο οποίο πραγματοποίησα την πρακτική μου. Μέσω μιας φόρμας, τα κείμενα καταγραφόντουσαν σε τοπικά αρχεία txt μέσω PHP, όπως και οι εικόνες, όποτε δημιουργούταν μια ανάρτηση. Η παρούσα έκδοση αναβαθμίστηκε σε Laravel, και τροποποιήθηκε για να τοποθετεί τα κείμενα και τις φωτογραφίες στην cloud αποθήκη Backblaze"
                                                            : selected?.id === 10 ? "Ένα project που υλοποιήθηκε κατά τη διάρκεια των σπουδών μου. Αποτελεί ένα προσχέδιο, με βάση το οποίο θα κατασκευαζόταν μια ιστοσελίδα με στόχο την προώθηση των μουσείων και της φυσικής ομορφιάς του νησιού της Λέσβου."
                                                                : ""}
                        </p>
                        <p className="overlay_skillz"
                            style={{
                                position: "absolute",
                                alignSelf: "center",
                                width: "30vw",
                                bottom: "0",
                            }}>  {selected?.id === 1 ? `<2024-2025> : "react19", "sass", "typescript", "vite", "responsive"` :
                                selected?.id === 2 ? `<2024-2025> : "wordpress", "wordpress themes", "wordpress plugins", "php", "mysql"`
                                    :
                                    selected?.id === 3 ? `<2020-2021, 2023> : "react18", "sass", "typescript", "vite", "responsive"`
                                        :
                                        selected?.id === 4 ? `<2022, 2024> : "api", "ejs", "postcss", "tailwind", "mongodb", "redis", "express", "node", "responsive"`
                                            : selected?.id === 5 ? `<2021>: "wordpress", "woocomerce", "elementor", "responsive"` :
                                                selected?.id === 6 ? `<2020, 2024> : "jquery", "sass", "laravel", "php", "mysql", "pqsl", "docker", "responsive"`
                                                    :
                                                    selected?.id === 7 ? `<2018> : "js", "css", "responsive"`
                                                        :
                                                        selected?.id === 8 ? `<2016, 2024> : "jquery", "bootstrap", "laravel", "php", "mysql", "pqsl", "docker", "responsive"`
                                                            :
                                                            selected?.id === 9 ? `<2014, 2024>: "api", "js", "css", "laravel", "php", "mysql", "pqsl", "docker", "responsive"`
                                                                :
                                                                selected?.id === 10 ? `<2013>: "jquery", "css"`
                                                                    : ""}
                        </p>
                        <div className="overlay_buttons_div">
                            <button
                                className="www"
                                onClick={close_overlay}
                                disabled={selected?.id === 1}
                                style={{
                                    position: "absolute",
                                    bottom: "0",
                                    left: "-0.25rem",
                                    color: "white",
                                    borderRadius: "5px 20px 5px",
                                    height: "40px",
                                    cursor: selected?.id === 1 ? "default" : "pointer",
                                    fontSize: "1ch",
                                    letterSpacing: "1.5px",
                                    backgroundColor: "rgb(40,55,70) ",
                                    marginInline: "10px",
                                    marginBottom: "6px",
                                    paddingInline: "10px",
                                    paddingTop: "2px",
                                    width: "16ch",
                                    pointerEvents: selected?.id === 1 ? "none" : "auto",
                                    filter: `brightness(${selected?.id === 1 ? 0.6 : 1})`,
                                    boxShadow: selected?.id === 1
                                        ? "inset 0 4px 6px rgba(0, 0, 0, 0.5), inset 0 1px 4px rgba(0, 0, 0, 0.3)"
                                        : "none"
                                }}
                            >
                                {selected?.id === 1 ? "ΒΡΙΣΚΕΣΤΕ ΕΔΩ" : "ΕΠΙΣΚΕΦΤΕΙΤΕ"}
                            </button>
                            <button
                                className="git"
                                onClick={close_overlay}
                                style={{
                                    position: "absolute",
                                    bottom: "0x",
                                    right: "10px",
                                    color: "white",
                                    borderRadius: "5px 10px 5px",
                                    height: "30px",
                                    cursor: "pointer",
                                    fontSize: "1ch",
                                    letterSpacing: "1.5px",
                                    backgroundColor: "rgb(40,55,70) ",
                                    margin: "10px",
                                    paddingInline: "10px",
                                }}
                            >
                                GIT
                            </button>
                        </div>
                    </div>
                </div>
            )
            }

            <div className="content_portfolio">
                {projects.map(({ id, title, img, vid }) => (
                    <div
                        key={id}
                        className="portfolio_item"
                        onMouseEnter={() => set_number(id)}
                        onMouseLeave={() => set_number(null)}
                    >
                        <div
                            className="description_div"
                            style={{
                                opacity: hover_number === id ? 1 : 0,
                                animation: hover_number === id ? "fade_in 0.3s ease-in forwards" : "fade_out 0.3s ease-in forwards",
                            }}
                        >
                            <p style={{ pointerEvents: "none" }}>{title}</p>
                        </div>
                        <img
                            className="portfolio_img"
                            src={img}
                            alt={title}
                            onClick={() => open_overlay(id, title, img, vid)}
                            style={{ cursor: "pointer" }}
                            draggable="false"
                        />
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Portfolio_gr;
