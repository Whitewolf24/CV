import { useEffect, useState } from 'react';


const Portfolio_eng = () => {

    let number = 0;

    /* const explanation_mouseia = document.querySelector("#explanation_mouseia") as HTMLSpanElement;
    const explanation_eknexa = document.querySelector("#explanation_eknexa") as HTMLSpanElement;
    const explanation_eye = document.querySelector("#explanation_eye") as HTMLSpanElement;
    const explanation_swlyn = document.querySelector("#explanation_swlyn") as HTMLSpanElement;
    const explanation_warehouse = document.querySelector("#explanation_warehouse") as HTMLSpanElement;
    const explanation_kiosk = document.querySelector("#explanation_kiosk") as HTMLSpanElement;
    const explanation_express = document.querySelector("#explanation_express") as HTMLSpanElement; */

    const hover_420_height = "70px";
    const hover_420_margin = "-24px";
    const hover_420_top = "2.85rem";

    const hover_800_height = "110px";
    const hover_800_margin = "-40px";

    const hover_1020_height = "116px";
    const hover_1020_margin = "-43px";
    const hover_1020_top = "4.55rem";

    const hover_therest_height = "136px";
    const hover_therest_margin = "-52.5px";
    const hover_therest_top = "5.2rem";
    const hover_therest_top_alt = "5.25rem";

    const reset_420_height = "20px";
    const reset_420_margin = "1px";
    const reset_420_top = "4.45rem";
    const reset_420_left = "1.12rem";

    const reset_600_top = "5rem";

    const reset_800_top = "7.25rem";
    const reset_800_top_alt = "6.9rem";

    const reset_1020_plus_margin = "0.5px";
    const reset_1020_plus_top = "8.53rem";

    const reset_therest_height = "30px";

    const hover_reset_1020_plus_left = "0.5rem";

    const hover_reset_therest_left = "0.8rem";
    const hover_reset_therest_left_alt = "0.82rem";

    const hover_reset_1020_left = "1.1rem";

    const reset_therest_margin = "0px";

    ///////////

    const [desc_mouseia, set_desc_mouseia] = useState({
        height: reset_therest_height,
        margin: reset_therest_margin,
        top: "7.4rem",
        left: reset_420_left
    })

    const [desc_eknexa, set_desc_eknexa] = useState({
        height: reset_therest_height,
        margin: reset_therest_margin,
        top: "7.2rem",
        left: hover_reset_1020_left
    })

    const [desc_eye, set_desc_eye] = useState({
        height: reset_therest_height,
        margin: reset_therest_margin,
        top: reset_600_top,
        left: "1.15rem"
    })

    const [desc_swlyn, set_desc_swlyn] = useState({
        height: reset_therest_height,
        margin: reset_therest_margin,
        top: reset_600_top,
        left: reset_420_left
    })

    const [desc_warehouse, set_desc_warehouse] = useState({
        height: reset_therest_height,
        margin: reset_therest_margin,
        top: reset_600_top,
        left: "1.15rem"
    })

    const [desc_woo, set_desc_woo] = useState({
        height: reset_therest_height,
        margin: reset_therest_margin,
        top: reset_600_top,
        left: "1.15rem"
    })

    const [desc_express, set_desc_express] = useState({
        height: reset_therest_height,
        margin: reset_therest_margin,
        top: "7.2rem",
        left: hover_reset_1020_left
    })

    const [desc_cv, set_desc_cv] = useState({
        height: reset_therest_height,
        margin: reset_therest_margin,
        top: "7.2rem",
        left: hover_reset_1020_left
    })

    /////////

    const mouseia_style = {
        height: desc_mouseia.height,
        marginBlock: desc_mouseia.margin,
        top: desc_mouseia.top,
        left: desc_mouseia.left
    }

    const eknexa_style = {
        height: desc_eknexa.height,
        marginBlock: desc_eknexa.margin,
        top: desc_eknexa.top,
        left: desc_eknexa.left
    }

    const eye_style = {
        height: desc_eye.height,
        marginBlock: desc_eye.margin,
        top: desc_eye.top,
        left: desc_eye.left
    }

    const swlyn_style = {
        height: desc_swlyn.height,
        marginBlock: desc_swlyn.margin,
        top: desc_swlyn.top,
        left: desc_swlyn.left
    }

    const warehouse_style = {
        height: desc_warehouse.height,
        marginBlock: desc_warehouse.margin,
        top: desc_warehouse.top,
        left: desc_warehouse.left
    }
    const woo_style = {
        height: desc_woo.height,
        marginBlock: desc_woo.margin,
        top: desc_woo.top,
        left: desc_woo.left
    }

    const express_style = {
        height: desc_express.height,
        marginBlock: desc_express.margin,
        top: desc_express.top,
        left: desc_express.left
    }

    const cv_style = {
        height: desc_cv.height,
        marginBlock: desc_cv.margin,
        top: desc_cv.top,
        left: desc_cv.left
    }

    const [width, set_width] = useState<number>(window.innerWidth);
    const [height, set_height] = useState<number>(window.innerHeight);

    onresize = () => {
        set_width(window.innerWidth);
        set_height(window.innerHeight);

        if (
            window.innerHeight <= 615 && window.innerWidth <= 568
            || window.innerHeight <= 700 && window.innerWidth < 1253 && !(window.innerWidth <= 568)
            || window.innerHeight <= 730 && window.innerWidth >= 1253 && !(window.innerWidth >= 1553)
            || window.innerHeight <= 700 && window.innerWidth >= 601 && !(window.innerWidth > 799)
            /*             || window.innerHeight <= 660 && window.innerWidth >= 800 && !(window.innerWidth >= 1253) */
            || window.innerHeight <= 555 && window.innerWidth >= 1553
            || window.innerWidth >= 450 && window.innerWidth < 600) {
            document.body.style.overflowY = "scroll";
        }
        else if (window.innerHeight > 660 && window.innerWidth >= 800) {
            document.body.style.overflowY = "hidden";
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    onanimationend = () => {
        if (
            window.innerHeight <= 615 && window.innerWidth <= 568
            || window.innerHeight <= 700 && window.innerWidth < 1253 && !(window.innerWidth <= 568)
            || window.innerHeight <= 730 && window.innerWidth >= 1253 && !(window.innerWidth >= 1553)
            || window.innerHeight <= 700 && window.innerWidth >= 601 && !(window.innerWidth > 799)
            /*             || window.innerHeight <= 660 && window.innerWidth >= 800 && !(window.innerWidth >= 1253) */
            || window.innerHeight <= 555 && window.innerWidth >= 1553
            || window.innerWidth >= 450 && window.innerWidth < 600) {
            document.body.style.overflowY = "scroll";
        }
        else if (window.innerHeight > 660 && window.innerWidth >= 800) {
            document.body.style.overflowY = "hidden";
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    //



    function hover_desc() {

        /*   switch (number) {
              case 1:
                  explanation_mouseia?.classList.add("explanation_intro");
                  break;
              case 2:
                  explanation_eknexa?.classList.add("explanation_intro");
                  break;
              case 3:
                  explanation_eye?.classList.add("explanation_intro");
                  break;
              case 4:
                  explanation_swlyn?.classList.add("explanation_intro");
                  break;
              case 5:
                  explanation_warehouse?.classList.add("explanation_intro");
                  break;
              case 6:
                  explanation_kiosk?.classList.add("explanation_intro");
                  break;
              case 7:
                  explanation_express?.classList.add("explanation_intro");
                  break;
              /*  case 8:
                   explanation_warehouse?.classList.add("explanation_intro");
                   break; }*/



        if (window.innerHeight <= 420) {
            switch (number) {
                case 1:
                    set_desc_mouseia({
                        height: hover_420_height,
                        margin: hover_420_margin,
                        top: hover_420_top,
                        left: hover_reset_therest_left
                    });
                    break;
                case 2:
                    set_desc_eknexa({
                        height: hover_420_height,
                        margin: hover_420_margin,
                        top: hover_420_top,
                        left: hover_reset_therest_left
                    });
                    break;
                case 3:
                    set_desc_eye({
                        height: hover_420_height,
                        margin: hover_420_margin,
                        top: hover_420_top,
                        left: "0.5rem"
                    });
                    break;
                case 4:
                    set_desc_swlyn({
                        height: hover_420_height,
                        margin: hover_420_margin,
                        top: hover_420_top,
                        left: hover_reset_therest_left
                    });
                    break;
                case 5:
                    set_desc_warehouse({
                        height: hover_420_height,
                        margin: hover_420_margin,
                        top: hover_420_top,
                        left: hover_reset_therest_left
                    });
                    break;
                case 6:
                    set_desc_woo({
                        height: hover_420_height,
                        margin: hover_420_margin,
                        top: hover_420_top,
                        left: hover_reset_therest_left
                    });
                    break;
                case 7:
                    set_desc_express({
                        height: hover_420_height,
                        margin: hover_420_margin,
                        top: hover_420_top,
                        left: hover_reset_therest_left
                    });
                    break;
                /*  case 8:
                     set_desc_cv({
                         height: hover_420_height,
                         margin: hover_420_margin,
                         top: hover_420_top,
                         left: reset_420_left
                     });
                     break; */
            }
        }

        if (window.innerWidth < 482 && !(window.innerHeight <= 420)) {
            switch (number) {
                case 1:
                    set_desc_mouseia({
                        height: hover_420_height,
                        margin: hover_420_margin,
                        top: "2.9rem",
                        left: hover_reset_therest_left_alt
                    });
                    break;
                case 2:
                    set_desc_eknexa({
                        height: hover_420_height,
                        margin: hover_420_margin,
                        top: hover_420_top,
                        left: hover_reset_therest_left_alt
                    });
                    break;
                case 3:
                    set_desc_eye({
                        height: hover_420_height,
                        margin: hover_420_margin,
                        top: hover_420_top,
                        left: "0.5rem"

                    });
                    break;
                case 4:
                    set_desc_swlyn({
                        height: hover_420_height,
                        margin: hover_420_margin,
                        top: hover_420_top,
                        left: hover_reset_therest_left_alt
                    });
                    break;
                case 5:
                    set_desc_warehouse({
                        height: hover_420_height,
                        margin: hover_420_margin,
                        top: hover_420_top,
                        left: hover_reset_therest_left_alt
                    });
                    break;
                case 6:
                    set_desc_woo({
                        height: hover_420_height,
                        margin: hover_420_margin,
                        top: hover_420_top,
                        left: hover_reset_therest_left_alt
                    });
                    break;
                case 7:
                    set_desc_express({
                        height: hover_420_height,
                        margin: hover_420_margin,
                        top: hover_420_top,
                        left: hover_reset_therest_left_alt
                    });
                    break;
                /*  case 8:
                     set_desc_cv({
                         height: hover_420_height,
                         margin: hover_420_margin,
                         top: hover_420_top,
                         left: reset_420_left
                     });
                     break; */
            }
        }

        if (window.innerWidth >= 482 && window.innerWidth < 530 && window.innerHeight > 729) {
            switch (number) {
                case 1:
                    set_desc_mouseia({
                        height: hover_800_height,
                        margin: "-45px",
                        top: "4.05rem",
                        left: "0.7rem"
                    });
                    break;
                case 2:
                    set_desc_eknexa({
                        height: hover_800_height,
                        margin: "-45px",
                        top: "4.05rem",
                        left: "0.7rem"
                    });
                    break;
                case 3:
                    set_desc_eye({
                        height: hover_800_height,
                        margin: "-45px",
                        top: "4.1rem",
                        left: "0.7rem"
                    });
                    break;
                case 4:
                    set_desc_swlyn({
                        height: hover_800_height,
                        margin: "-45px",
                        top: "4.06rem",
                        left: "0.7rem"
                    });
                    break;
                case 5:
                    set_desc_warehouse({
                        height: hover_800_height,
                        margin: "-45px",
                        top: "4.05rem",
                        left: "0.7rem"
                    });
                    break;
                case 6:
                    set_desc_woo({
                        height: hover_800_height,
                        margin: "-45px",
                        top: "4.05rem",
                        left: "0.7rem"
                    });
                    break;
                case 7:
                    set_desc_express({
                        height: hover_800_height,
                        margin: "-45px",
                        top: "4.05rem",
                        left: "0.7rem"
                    });
                    break;
                /*   case 8:
                      set_desc_cv({
                          height: hover_482_height,
                          margin: hover_600_margin,
                          top: hover_600_top_alt,
                          left: hover_reset_therest_left
                      });
                      break; */
            }
        }

        if (window.innerWidth >= 530 && window.innerWidth <= 600 && window.innerHeight > 729) {
            switch (number) {
                case 1:
                    set_desc_mouseia({
                        height: hover_800_height,
                        margin: "-45px",
                        top: "4.05rem",
                        left: hover_reset_therest_left_alt
                    });
                    break;
                case 2:
                    set_desc_eknexa({
                        height: hover_800_height,
                        margin: "-45px",
                        top: "4.05rem",
                        left: hover_reset_therest_left_alt
                    });
                    break;
                case 3:
                    set_desc_eye({
                        height: hover_800_height,
                        margin: "-45px",
                        top: "4.1rem",
                        left: hover_reset_therest_left_alt
                    });
                    break;
                case 4:
                    set_desc_swlyn({
                        height: hover_800_height,
                        margin: "-45px",
                        top: "4.06rem",
                        left: hover_reset_therest_left_alt
                    });
                    break;
                case 5:
                    set_desc_warehouse({
                        height: hover_800_height,
                        margin: "-45px",
                        top: "4.05rem",
                        left: hover_reset_therest_left_alt
                    });
                    break;
                case 6:
                    set_desc_woo({
                        height: hover_800_height,
                        margin: "-45px",
                        top: "4.05rem",
                        left: hover_reset_therest_left_alt
                    });
                    break;
                case 7:
                    set_desc_express({
                        height: hover_800_height,
                        margin: "-45px",
                        top: "4.05rem",
                        left: hover_reset_therest_left_alt
                    });
                    break;
                /*   case 8:
                      set_desc_cv({
                          height: hover_482_height,
                          margin: hover_600_margin,
                          top: hover_600_top_alt,
                          left: hover_reset_therest_left
                      });
                      break; */
            }
        }

        if (window.innerWidth >= 482 && window.innerWidth < 530 && window.innerHeight <= 729) {
            switch (number) {
                case 1:
                    set_desc_mouseia({
                        height: hover_800_height,
                        margin: "-45px",
                        top: "4.05rem",
                        left: hover_reset_therest_left
                    });
                    break;
                case 2:
                    set_desc_eknexa({
                        height: hover_800_height,
                        margin: "-45px",
                        top: "4.05rem",
                        left: hover_reset_therest_left
                    });
                    break;
                case 3:
                    set_desc_eye({
                        height: hover_800_height,
                        margin: "-45px",
                        top: "4.1rem",
                        left: hover_reset_therest_left
                    });
                    break;
                case 4:
                    set_desc_swlyn({
                        height: hover_800_height,
                        margin: "-45px",
                        top: "4.06rem",
                        left: hover_reset_therest_left
                    });
                    break;
                case 5:
                    set_desc_warehouse({
                        height: hover_800_height,
                        margin: "-45px",
                        top: "4.05rem",
                        left: hover_reset_therest_left
                    });
                    break;
                case 6:
                    set_desc_woo({
                        height: hover_800_height,
                        margin: "-45px",
                        top: "4.05rem",
                        left: hover_reset_therest_left
                    });
                    break;
                case 7:
                    set_desc_express({
                        height: hover_800_height,
                        margin: "-45px",
                        top: "4.05rem",
                        left: hover_reset_therest_left
                    });
                    break;
                /*   case 8:
                      set_desc_cv({
                          height: hover_482_height,
                          margin: hover_600_margin,
                          top: hover_600_top_alt,
                          left: hover_reset_therest_left
                      });
                      break; */
            }
        }

        if (window.innerWidth >= 530 && window.innerWidth <= 600 && window.innerHeight < 729) {
            switch (number) {
                case 1:
                    set_desc_mouseia({
                        height: hover_800_height,
                        margin: "-45px",
                        top: "4.05rem",
                        left: hover_reset_therest_left_alt
                    });
                    break;
                case 2:
                    set_desc_eknexa({
                        height: hover_800_height,
                        margin: "-45px",
                        top: "4.05rem",
                        left: hover_reset_therest_left_alt
                    });
                    break;
                case 3:
                    set_desc_eye({
                        height: hover_800_height,
                        margin: "-45px",
                        top: "4.1rem",
                        left: hover_reset_therest_left_alt
                    });
                    break;
                case 4:
                    set_desc_swlyn({
                        height: hover_800_height,
                        margin: "-45px",
                        top: "4.06rem",
                        left: hover_reset_therest_left_alt
                    });
                    break;
                case 5:
                    set_desc_warehouse({
                        height: hover_800_height,
                        margin: "-45px",
                        top: "4.05rem",
                        left: hover_reset_therest_left_alt
                    });
                    break;
                case 6:
                    set_desc_woo({
                        height: hover_800_height,
                        margin: "-45px",
                        top: "4.05rem",
                        left: hover_reset_therest_left_alt
                    });
                    break;
                case 7:
                    set_desc_express({
                        height: hover_800_height,
                        margin: "-45px",
                        top: "4.05rem",
                        left: hover_reset_therest_left_alt
                    });
                    break;
                /*   case 8:
                      set_desc_cv({
                          height: hover_482_height,
                          margin: hover_600_margin,
                          top: hover_600_top_alt,
                          left: hover_reset_therest_left
                      });
                      break; */
            }
        }
        /*   if (window.innerWidth > 529 && window.innerWidth < 600) {
              switch (number) {
                  case 1:
                      set_desc_mouseia({
                          height: hover_800_height,
                          margin: "-45px",
                          top: "4.05rem",
                          left: hover_reset_therest_left
                      });
                      break;
                  case 2:
                      set_desc_eknexa({
                          height: hover_800_height,
                          margin: "-45px",
                          top: "4.05rem",
                          left: hover_reset_therest_left
                      });
                      break;
                  case 3:
                      set_desc_eye({
                          height: hover_800_height,
                          margin: "-45px",
                          top: "4.1rem",
                          left: hover_reset_therest_left
                      });
                      break;
                  case 4:
                      set_desc_swlyn({
                          height: hover_800_height,
                          margin: "-45px",
                          top: "4.06rem",
                          left: hover_reset_therest_left
                      });
                      break;
                  case 5:
                      set_desc_warehouse({
                          height: hover_800_height,
                          margin: "-45px",
                          top: "4.05rem",
                          left: hover_reset_therest_left
                      });
                      break;
                  case 6:
                      set_desc_woo({
                          height: hover_800_height,
                          margin: "-45px",
                          top: "4.05rem",
                          left: hover_reset_therest_left
                      });
                      break;
                  case 7:
                      set_desc_express({
                          height: hover_800_height,
                          margin: "-45px",
                          top: "4.05rem",
                          left: hover_reset_therest_left
                      });
                      break; */
        /*   case 8:
              set_desc_cv({
                  height: hover_482_height,
                  margin: hover_600_margin,
                  top: hover_600_top_alt,
                  left: hover_reset_therest_left
              });
              break; */
        /*    }
       }
    */
        if (window.innerWidth <= 482 && window.innerHeight > 730) {
            switch (number) {
                case 1:
                    set_desc_mouseia({
                        height: hover_800_height,
                        margin: "-44px",
                        top: "4.1rem",
                        left: "0.7rem"
                    });
                    break;
                case 2:
                    set_desc_eknexa({
                        height: hover_800_height,
                        margin: "-44px",
                        top: "4.1rem",
                        left: "0.7rem"
                    });
                    break;
                case 3:
                    set_desc_eye({
                        height: hover_800_height,
                        margin: "-44px",
                        top: "4.1rem",
                        left: "0.7rem"
                    });
                    break;
                case 4:
                    set_desc_swlyn({
                        height: hover_800_height,
                        margin: "-44px",
                        top: "4.1rem",
                        left: "0.7rem"
                    });
                    break;
                case 5:
                    set_desc_warehouse({
                        height: hover_800_height,
                        margin: "-44px",
                        top: "4.1rem",
                        left: "0.7rem"
                    });
                    break;
                case 6:
                    set_desc_woo({
                        height: hover_800_height,
                        margin: "-44px",
                        top: "4.1rem",
                        left: "0.7rem"
                    });
                    break;
                case 7:
                    set_desc_express({
                        height: hover_800_height,
                        margin: "-44px",
                        top: "4.1rem",
                        left: "0.7rem"
                    });
                    break;
                /*   case 8:
                      set_desc_cv({
                          height: hover_482_height,
                          margin: hover_600_margin,
                          top: hover_600_top_alt,
                          left: hover_reset_therest_left
                      });
                      break; */
            }
        }

        else if (window.innerWidth >= 600 && window.innerWidth < 800) {
            switch (number) {
                case 1:
                    set_desc_mouseia({
                        height: hover_800_height,
                        margin: hover_800_margin,
                        top: "4.38rem",
                        left: hover_reset_therest_left
                    });
                    break;
                case 2:
                    set_desc_eknexa({
                        height: hover_800_height,
                        margin: hover_800_margin,
                        top: "4.35rem",
                        left: hover_reset_therest_left
                    });
                    break;
                case 3:
                    set_desc_eye({
                        height: hover_800_height,
                        margin: hover_800_margin,
                        top: "4.38rem",
                        left: hover_reset_therest_left
                    });
                    break;
                case 4:
                    set_desc_swlyn({
                        height: hover_800_height,
                        margin: hover_800_margin,
                        top: "4.38rem",
                        left: hover_reset_therest_left
                    });
                    break;
                case 5:
                    set_desc_warehouse({
                        height: hover_800_height,
                        margin: hover_800_margin,
                        top: "4.38rem",
                        left: hover_reset_therest_left
                    });
                    break;
                case 6:
                    set_desc_woo({
                        height: hover_800_height,
                        margin: hover_800_margin,
                        top: "4.38rem",
                        left: hover_reset_therest_left
                    });
                    break;
                case 7:
                    set_desc_express({
                        height: hover_800_height,
                        margin: hover_800_margin,
                        top: reset_420_top,
                        left: hover_reset_therest_left
                    });
                    break;
                /*  case 8:
                     set_desc_cv({
                         height: hover_800_height,
                         margin: hover_800_margin,
                         top: reset_420_top,
                         left: hover_reset_800_left
                     });
                     break; */
            }
        }

        else if (window.innerWidth >= 800 && window.innerWidth <= 1020) {
            switch (number) {
                case 1:
                    set_desc_mouseia({
                        height: hover_1020_height,
                        margin: hover_1020_margin,
                        top: "4.6rem",
                        left: "1rem"
                    });
                    break;
                case 2:
                    set_desc_eknexa({
                        height: hover_1020_height,
                        margin: hover_1020_margin,
                        top: hover_1020_top,
                        left: "1rem"
                    });
                    break;
                case 3:
                    set_desc_eye({
                        height: hover_1020_height,
                        margin: hover_1020_margin,
                        top: "4.6rem",
                        left: "1rem"
                    });
                    break;
                case 4:
                    set_desc_swlyn({
                        height: hover_1020_height,
                        margin: hover_1020_margin,
                        top: hover_1020_top,
                        left: "1rem"
                    });
                    break;
                case 5:
                    set_desc_warehouse({
                        height: hover_1020_height,
                        margin: hover_1020_margin,
                        top: hover_1020_top,
                        left: "1rem"
                    });
                    break;
                case 6:
                    set_desc_woo({
                        height: hover_1020_height,
                        margin: hover_1020_margin,
                        top: hover_1020_top,
                        left: "1rem"
                    });
                    break;
                case 7:
                    set_desc_express({
                        height: hover_1020_height,
                        margin: hover_1020_margin,
                        top: hover_1020_top,
                        left: "1rem"
                    });
                    break;
                /*   case 8:
                      set_desc_cv({
                          height: hover_1020_height,
                          margin: hover_1020_margin,
                          top: hover_1020_top,
                          left: hover_reset_1020_left
                      });
                      break; */
            }
        }

        else if (window.innerWidth >= 1020 && window.innerWidth <= 1552) {
            switch (number) {
                case 1:
                    set_desc_mouseia({
                        height: hover_therest_height,
                        margin: hover_therest_margin,
                        top: hover_therest_top,
                        left: hover_reset_therest_left_alt
                    });
                    break;
                case 2:
                    set_desc_eknexa({
                        height: hover_therest_height,
                        margin: hover_therest_margin,
                        top: hover_therest_top,
                        left: hover_reset_therest_left
                    });
                    break;
                case 3:
                    set_desc_eye({
                        height: hover_therest_height,
                        margin: hover_therest_margin,
                        top: hover_therest_top,
                        left: hover_reset_therest_left
                    });
                    break;
                case 4:
                    set_desc_swlyn({
                        height: hover_therest_height,
                        margin: hover_therest_margin,
                        top: "5.25rem",
                        left: hover_reset_therest_left_alt
                    });
                    break;
                case 5:
                    set_desc_warehouse({
                        height: hover_therest_height,
                        margin: hover_therest_margin,
                        top: "5.25rem",
                        left: hover_reset_therest_left
                    });
                    break;
                case 6:
                    set_desc_woo({
                        height: hover_therest_height,
                        margin: hover_therest_margin,
                        top: "5.25rem",
                        left: hover_reset_therest_left
                    });
                    break;
                case 7:
                    set_desc_express({
                        height: hover_therest_height,
                        margin: hover_therest_margin,
                        top: hover_therest_top,
                        left: hover_reset_therest_left
                    });
                    break;
                /*      case 8:
                         set_desc_cv({
                             height: hover_therest_height,
                             margin: hover_therest_margin,
                             top: hover_therest_top,
                             left: hover_reset_1020_plus_left
                         });
                         break; */
            }
        }

        else if (window.innerWidth > 1552 && window.innerWidth <= 2299) {
            switch (number) {
                case 1:
                    set_desc_mouseia({
                        height: hover_therest_height,
                        margin: hover_therest_margin,
                        top: hover_therest_top,
                        left: "0.7rem"
                    });
                    break;
                case 2:
                    set_desc_eknexa({
                        height: hover_therest_height,
                        margin: hover_therest_margin,
                        top: hover_therest_top,
                        left: "0.65rem"
                    });
                    break;
                case 3:
                    set_desc_eye({
                        height: hover_therest_height,
                        margin: hover_therest_margin,
                        top: hover_therest_top,
                        left: "0.7rem"
                    });
                    break;
                case 4:
                    set_desc_swlyn({
                        height: hover_therest_height,
                        margin: hover_therest_margin,
                        top: hover_therest_top,
                        left: "0.7rem"
                    });
                    break;
                case 5:
                    set_desc_warehouse({
                        height: hover_therest_height,
                        margin: hover_therest_margin,
                        top: hover_therest_top,
                        left: "0.7rem"
                    });
                    break;
                case 6:
                    set_desc_woo({
                        height: hover_therest_height,
                        margin: hover_therest_margin,
                        top: hover_therest_top_alt,
                        left: "0.65rem"
                    });
                    break;
                case 7:
                    set_desc_express({
                        height: hover_therest_height,
                        margin: hover_therest_margin,
                        top: hover_therest_top,
                        left: "0.7rem"
                    });
                    break;
                /*     case 8:
                        set_desc_cv({
                            height: hover_therest_height,
                            margin: hover_therest_margin,
                            top: hover_therest_top,
                            left: hover_reset_1551_left
                        });
                        break; */
            }
        }

        else if (window.innerWidth >= 2300) {
            switch (number) {
                case 1:
                    set_desc_mouseia({
                        height: hover_therest_height,
                        margin: hover_therest_margin,
                        top: hover_therest_top_alt,
                        left: hover_reset_1020_plus_left
                    });
                    break;
                case 2:
                    set_desc_eknexa({
                        height: hover_therest_height,
                        margin: hover_therest_margin,
                        top: hover_therest_top,
                        left: hover_reset_1020_plus_left
                    });
                    break;
                case 3:
                    set_desc_eye({
                        height: hover_therest_height,
                        margin: hover_therest_margin,
                        top: hover_therest_top,
                        left: hover_reset_1020_plus_left
                    });
                    break;
                case 4:
                    set_desc_swlyn({
                        height: hover_therest_height,
                        margin: hover_therest_margin,
                        top: hover_therest_top,
                        left: hover_reset_1020_plus_left
                    });
                    break;
                case 5:
                    set_desc_warehouse({
                        height: hover_therest_height,
                        margin: hover_therest_margin,
                        top: hover_therest_top,
                        left: hover_reset_1020_plus_left
                    });
                    break;
                case 6:
                    set_desc_woo({
                        height: hover_therest_height,
                        margin: hover_therest_margin,
                        top: hover_therest_top,
                        left: hover_reset_1020_plus_left
                    });
                    break;
                case 7:
                    set_desc_express({
                        height: hover_therest_height,
                        margin: hover_therest_margin,
                        top: hover_therest_top,
                        left: hover_reset_1020_plus_left
                    });
                    break;
                /*     case 8:
                        set_desc_cv({
                            height: hover_therest_height,
                            margin: hover_therest_margin,
                            top: hover_therest_top,
                            left: hover_reset_1020_plus_left
                        });
                        break;
                } */
            }
        }
    }

    //

    function reset_desc() {
        /* 
                explanation_mouseia?.classList.remove("explanation_intro");
                explanation_eknexa?.classList.remove("explanation_intro");
                explanation_eye?.classList.remove("explanation_intro");
                explanation_swlyn?.classList.remove("explanation_intro");
                explanation_warehouse?.classList.remove("explanation_intro");
                explanation_kiosk?.classList.remove("explanation_intro");
                explanation_express?.classList.remove("explanation_intro"); */

        if (window.innerHeight <= 420) {
            set_desc_mouseia({
                height: reset_420_height,
                margin: reset_420_margin,
                top: reset_420_top,
                left: hover_reset_therest_left
            });
            set_desc_eknexa({
                height: reset_420_height,
                margin: reset_420_margin,
                top: reset_420_top,
                left: hover_reset_therest_left
            });
            set_desc_eye({
                height: reset_420_height,
                margin: reset_420_margin,
                top: reset_420_top,
                left: "0.5rem"
            });
            set_desc_swlyn({
                height: reset_420_height,
                margin: reset_420_margin,
                top: reset_420_top,
                left: hover_reset_therest_left
            });
            set_desc_warehouse({
                height: reset_420_height,
                margin: reset_420_margin,
                top: reset_420_top,
                left: hover_reset_therest_left
            });
            set_desc_woo({
                height: reset_420_height,
                margin: reset_420_margin,
                top: reset_420_top,
                left: hover_reset_therest_left
            });
            set_desc_express({
                height: reset_420_height,
                margin: reset_420_margin,
                top: reset_420_top,
                left: hover_reset_therest_left
            });
            /*        set_desc_cv({
                       height: reset_420_height,
                       margin: reset_420_margin,
                       top: reset_420_top,
                       left: reset_420_left
                   }); */
        }

        if (window.innerWidth < 482 && !(window.innerHeight <= 420)) {
            set_desc_mouseia({
                height: reset_420_height,
                margin: reset_420_margin,
                top: reset_420_top,
                left: hover_reset_therest_left_alt
            });
            set_desc_eknexa({
                height: reset_420_height,
                margin: reset_420_margin,
                top: reset_420_top,
                left: hover_reset_therest_left_alt
            });
            set_desc_eye({
                height: reset_420_height,
                margin: reset_420_margin,
                top: reset_420_top,
                left: "0.5rem"
            });
            set_desc_swlyn({
                height: reset_420_height,
                margin: reset_420_margin,
                top: reset_420_top,
                left: hover_reset_therest_left_alt
            });
            set_desc_warehouse({
                height: reset_420_height,
                margin: reset_420_margin,
                top: reset_420_top,
                left: hover_reset_therest_left_alt
            });
            set_desc_woo({
                height: reset_420_height,
                margin: reset_420_margin,
                top: reset_420_top,
                left: hover_reset_therest_left_alt
            });
            set_desc_express({
                height: reset_420_height,
                margin: reset_420_margin,
                top: reset_420_top,
                left: hover_reset_therest_left_alt
            });
            set_desc_cv({
                height: reset_420_height,
                margin: reset_420_margin,
                top: reset_420_top,
                left: hover_reset_therest_left_alt
            });
        }

        if (window.innerWidth >= 482 && window.innerWidth < 530 && window.innerHeight > 729) {
            set_desc_mouseia({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: "0.65rem"
            });
            set_desc_eknexa({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: "0.7rem"
            });
            set_desc_eye({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: "0.7rem"
            });
            set_desc_swlyn({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: "0.7rem"
            });
            set_desc_warehouse({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: "0.7rem"
            });
            set_desc_woo({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: "0.7rem"
            });
            set_desc_express({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: "0.7rem"
            });
            set_desc_cv({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: "0.7rem"
            });
        }

        if (window.innerWidth >= 530 && window.innerWidth <= 600 && window.innerHeight > 729) {
            set_desc_mouseia({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: hover_reset_therest_left_alt
            });
            set_desc_eknexa({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: hover_reset_therest_left_alt
            });
            set_desc_eye({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: hover_reset_therest_left_alt
            });
            set_desc_swlyn({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: hover_reset_therest_left_alt
            });
            set_desc_warehouse({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: hover_reset_therest_left_alt
            });
            set_desc_woo({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: hover_reset_therest_left_alt
            });
            set_desc_express({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: hover_reset_therest_left_alt
            });
            set_desc_cv({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: hover_reset_therest_left_alt
            });
        }

        if (window.innerWidth >= 482 && window.innerWidth < 530 && window.innerHeight <= 729) {
            set_desc_mouseia({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: hover_reset_therest_left
            });
            set_desc_eknexa({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: hover_reset_therest_left
            });
            set_desc_eye({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: hover_reset_therest_left
            });
            set_desc_swlyn({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: hover_reset_therest_left
            });
            set_desc_warehouse({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: hover_reset_therest_left
            });
            set_desc_woo({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: hover_reset_therest_left
            });
            set_desc_express({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: hover_reset_therest_left
            });
            set_desc_cv({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: hover_reset_therest_left
            });
        }

        if (window.innerWidth >= 530 && window.innerWidth <= 600 && window.innerHeight < 729) {
            set_desc_mouseia({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: hover_reset_therest_left_alt
            });
            set_desc_eknexa({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: hover_reset_therest_left_alt
            });
            set_desc_eye({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: hover_reset_therest_left_alt
            });
            set_desc_swlyn({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: hover_reset_therest_left_alt
            });
            set_desc_warehouse({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: hover_reset_therest_left_alt
            });
            set_desc_woo({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: hover_reset_therest_left_alt
            });
            set_desc_express({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: hover_reset_therest_left_alt
            });
            set_desc_cv({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: hover_reset_therest_left_alt
            });
        }


        /* if (window.innerWidth > 529 && window.innerWidth < 600) {
            set_desc_mouseia({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: hover_reset_therest_left
            });
            set_desc_eknexa({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: hover_reset_therest_left
            });
            set_desc_eye({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: hover_reset_therest_left
            });
            set_desc_swlyn({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: hover_reset_therest_left
            });
            set_desc_warehouse({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: hover_reset_therest_left
            });
            set_desc_woo({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: hover_reset_therest_left
            });
            set_desc_express({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: hover_reset_therest_left
            });
            set_desc_cv({
                height: "20px",
                margin: reset_therest_margin,
                top: "6.9rem",
                left: hover_reset_therest_left
            });
        }
    */
        if (window.innerWidth <= 482 && window.innerHeight > 730) {
            set_desc_mouseia({
                height: reset_420_height,
                margin: reset_420_margin,
                top: "7rem",
                left: "0.7rem"
            });
            set_desc_eknexa({
                height: reset_420_height,
                margin: reset_420_margin,
                top: "7rem",
                left: "0.7rem"
            });
            set_desc_eye({
                height: reset_420_height,
                margin: reset_420_margin,
                top: "7rem",
                left: "0.7rem"
            });
            set_desc_swlyn({
                height: reset_420_height,
                margin: reset_420_margin,
                top: "7rem",
                left: "0.7rem"
            });
            set_desc_warehouse({
                height: reset_therest_height,
                margin: reset_therest_margin,
                top: "7rem",
                left: "0.7rem"
            });
            set_desc_woo({
                height: reset_420_height,
                margin: reset_420_margin,
                top: "7rem",
                left: "0.7rem"
            });
            set_desc_express({
                height: reset_420_height,
                margin: reset_420_margin,
                top: "7rem",
                left: "0.7rem"
            });
            set_desc_cv({
                height: reset_420_height,
                margin: reset_420_margin,
                top: "7rem",
                left: "0.7rem"
            });
        }
        else if (window.innerWidth >= 600 && window.innerWidth < 800) {
            set_desc_mouseia({
                height: reset_therest_height,
                margin: reset_therest_margin,
                top: "7rem",
                left: hover_reset_therest_left
            });
            set_desc_eknexa({
                height: reset_therest_height,
                margin: reset_therest_margin,
                top: reset_800_top_alt,
                left: hover_reset_therest_left
            });
            set_desc_eye({
                height: reset_therest_height,
                margin: reset_therest_margin,
                top: "7rem",
                left: hover_reset_therest_left
            });
            set_desc_swlyn({
                height: reset_therest_height,
                margin: reset_therest_margin,
                top: "7rem",
                left: hover_reset_therest_left
            });
            set_desc_warehouse({
                height: reset_therest_height,
                margin: reset_therest_margin,
                top: reset_800_top_alt,
                left: hover_reset_therest_left
            });
            set_desc_woo({
                height: reset_therest_height,
                margin: reset_therest_margin,
                top: reset_800_top_alt,
                left: hover_reset_therest_left
            });
            set_desc_express({
                height: reset_therest_height,
                margin: reset_therest_margin,
                top: reset_800_top_alt,
                left: hover_reset_therest_left
            });
            set_desc_cv({
                height: reset_therest_height,
                margin: reset_therest_margin,
                top: reset_800_top_alt,
                left: hover_reset_therest_left
            });
        }

        else if (window.innerWidth >= 800 && window.innerWidth <= 1020) {
            set_desc_mouseia({
                height: reset_therest_height,
                margin: reset_therest_margin,
                top: reset_800_top,
                left: "1rem"
            });
            set_desc_eknexa({
                height: reset_therest_height,
                margin: reset_therest_margin,
                top: reset_800_top,
                left: "1rem"
            });
            set_desc_eye({
                height: reset_therest_height,
                margin: reset_therest_margin,
                top: reset_800_top,
                left: "1rem"
            });
            set_desc_swlyn({
                height: reset_therest_height,
                margin: reset_therest_margin,
                top: reset_800_top,
                left: "1rem"
            });
            set_desc_warehouse({
                height: reset_therest_height,
                margin: reset_therest_margin,
                top: reset_800_top,
                left: "1rem"
            });
            set_desc_woo({
                height: reset_therest_height,
                margin: reset_therest_margin,
                top: reset_800_top,
                left: "1rem"
            });
            set_desc_express({
                height: reset_therest_height,
                margin: reset_therest_margin,
                top: reset_800_top,
                left: "1rem"
            });
            set_desc_cv({
                height: reset_therest_height,
                margin: reset_therest_margin,
                top: reset_800_top,
                left: "1rem"
            });
        }

        else if (window.innerWidth >= 1020 && window.innerWidth <= 1552) {
            set_desc_mouseia({
                height: reset_therest_height,
                margin: reset_1020_plus_margin,
                top: reset_1020_plus_top,
                left: hover_reset_therest_left_alt
            });
            set_desc_eknexa({
                height: reset_therest_height,
                margin: reset_1020_plus_margin,
                top: reset_1020_plus_top,
                left: hover_reset_therest_left
            });
            set_desc_eye({
                height: reset_therest_height,
                margin: reset_1020_plus_margin,
                top: reset_1020_plus_top,
                left: hover_reset_therest_left
            });
            set_desc_swlyn({
                height: reset_therest_height,
                margin: reset_1020_plus_margin,
                top: reset_1020_plus_top,
                left: hover_reset_therest_left_alt
            });
            set_desc_warehouse({
                height: reset_therest_height,
                margin: reset_1020_plus_margin,
                top: reset_1020_plus_top,
                left: hover_reset_therest_left
            });
            set_desc_woo({
                height: reset_therest_height,
                margin: reset_1020_plus_margin,
                top: reset_1020_plus_top,
                left: hover_reset_therest_left
            });
            set_desc_express({
                height: reset_therest_height,
                margin: reset_1020_plus_margin,
                top: reset_1020_plus_top,
                left: hover_reset_therest_left
            });
            set_desc_cv({
                height: reset_therest_height,
                margin: reset_1020_plus_margin,
                top: reset_1020_plus_top,
                left: hover_reset_therest_left
            });
        }

        else if (window.innerWidth > 1552 && window.innerWidth <= 2299) {
            set_desc_mouseia({
                height: reset_therest_height,
                margin: reset_1020_plus_margin,
                top: reset_1020_plus_top,
                left: "0.7rem"
            });
            set_desc_eknexa({
                height: reset_therest_height,
                margin: reset_1020_plus_margin,
                top: reset_1020_plus_top,
                left: "0.65rem"
            });
            set_desc_eye({
                height: reset_therest_height,
                margin: reset_1020_plus_margin,
                top: reset_1020_plus_top,
                left: "0.7rem"
            });
            set_desc_swlyn({
                height: reset_therest_height,
                margin: reset_1020_plus_margin,
                top: reset_1020_plus_top,
                left: "0.7rem"
            });
            set_desc_warehouse({
                height: reset_therest_height,
                margin: reset_1020_plus_margin,
                top: reset_1020_plus_top,
                left: "0.7rem"
            });
            set_desc_woo({
                height: reset_therest_height,
                margin: reset_1020_plus_margin,
                top: reset_1020_plus_top,
                left: "0.65rem"
            });
            set_desc_express({
                height: reset_therest_height,
                margin: reset_1020_plus_margin,
                top: reset_1020_plus_top,
                left: "0.7rem"
            });
            set_desc_cv({
                height: reset_therest_height,
                margin: reset_1020_plus_margin,
                top: reset_1020_plus_top,
                left: "0.7rem"
            });
        }

        else if (window.innerWidth >= 2300) {
            set_desc_mouseia({
                height: reset_therest_height,
                margin: reset_1020_plus_margin,
                top: reset_1020_plus_top,
                left: hover_reset_1020_plus_left
            });
            set_desc_eknexa({
                height: reset_therest_height,
                margin: reset_1020_plus_margin,
                top: reset_1020_plus_top,
                left: hover_reset_1020_plus_left
            });
            set_desc_eye({
                height: reset_therest_height,
                margin: reset_1020_plus_margin,
                top: reset_1020_plus_top,
                left: hover_reset_1020_plus_left
            });
            set_desc_swlyn({
                height: reset_therest_height,
                margin: reset_1020_plus_margin,
                top: reset_1020_plus_top,
                left: hover_reset_1020_plus_left
            });
            set_desc_warehouse({
                height: reset_therest_height,
                margin: reset_1020_plus_margin,
                top: reset_1020_plus_top,
                left: hover_reset_1020_plus_left
            });
            set_desc_woo({
                height: reset_therest_height,
                margin: reset_1020_plus_margin,
                top: reset_1020_plus_top,
                left: hover_reset_1020_plus_left
            });
            set_desc_express({
                height: reset_therest_height,
                margin: reset_1020_plus_margin,
                top: reset_1020_plus_top,
                left: hover_reset_1020_plus_left
            });
            set_desc_cv({
                height: reset_therest_height,
                margin: reset_1020_plus_margin,
                top: reset_1020_plus_top,
                left: hover_reset_1020_plus_left
            });
        }
    }

    /*  function delay(ms: number) {
         return new Promise(resolve => setTimeout(resolve, ms));
     } */

    //----------//


    useEffect(() => {
        reset_desc();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [width, height]);


    return <div className="content">
        <div className="content_portfolio" style={{}}>
            <div className="mouseia">
                <div className="description_div mouseia_desc" style={mouseia_style}>
                    <p>MUSEUMS OF LESVOS</p>
                </div>
                <a href="https://mouseia.marinoscv.website/" target="_blank">
                    <img className="fake" src="#" onMouseEnter={() => { number = 1; hover_desc(); }} onMouseLeave={() => { reset_desc(); }} />
                </a>
                <img src="mouseia.webp"></img>
                <div className="tech">
                    <p className="year _2013">2013&nbsp;
                        <span className="libraries">&#123;jquery&#125;</span></p>
                </div>
            </div>
            <div className="eknexa">
                <div className="description_div eknexa_desc" style={eknexa_style}>
                    <p>EKNEXA</p>
                </div>
                <a href="https://eknexa.marinoscv.website/" target="_blank">
                    <img className="fake" src="#" onMouseEnter={() => { number = 2; hover_desc(); }} onMouseLeave={() => { reset_desc(); }} />
                </a>
                <img src="eknexa.webp"></img>
                <div className="tech">
                    <p className="year _2014">2014&nbsp;
                        <span className="libraries">&#123;php,responsive&#125;</span></p>
                </div>
            </div>
            <div className="eye">
                <div className="description_div eye_desc" style={eye_style}>
                    <p>EYE</p>
                </div>
                <a href="https://eye.marinoscv.website/" target="_blank">
                    <img className="fake" src="#" onMouseEnter={() => { number = 3; hover_desc(); }} onMouseLeave={() => { reset_desc(); }} />
                </a>
                <img src="eye.webp"></img>
                <div className="tech _2016_tech">
                    <p className="year _eknexa016">2016&nbsp;
                        <span className="libraries">&#123;bstrap,jquery,php mysql,responsive&#125;</span></p>
                </div>
            </div>
            <div className="swlyn">
                <div className="description_div swlyn_desc" style={swlyn_style}>
                    <p>SWLYN</p>
                    <span>testosaijdoiksajdlsajdlkjlaksldj</span>
                </div>
                <a href="https://swlyn.marinoscv.website/" target="_blank">
                    <img className="fake" src="#" onMouseEnter={() => { number = 4; hover_desc(); }} onMouseLeave={() => { reset_desc(); }} />
                </a>
                <img src="swlyn.webp" ></img>
                <div className="tech">
                    <p className="year _2018">2018&nbsp;
                        <span className="libraries">&#123;JS,responsive&#125;</span></p>
                </div>
            </div >
            <div className="warehouse">
                <div className="description_div warehouse_desc" style={warehouse_style}>
                    <p>WAREHOUSE</p>
                    {/*                     <span id='explanation_warehouse'>testosaijdoiksajdlsajdlkjlaksldj</span>
 */}                </div>
                <a href="https://warehouse.marinoscv.website/" target="_blank">
                    <img className="fake" src="#" onMouseEnter={() => { number = 5; hover_desc(); }} onMouseLeave={() => { reset_desc(); }} />
                </a>
                <img src="warehouse.webp"></img>
                <div className="tech _2020_tech">
                    <p className="year _2020">2020&nbsp;
                        <span className="libraries">&#123;JS,sass,php, mysql,responsive&#125;</span></p>
                </div>
            </div >
            <div className="woocommerce">
                <div className="description_div woocomerce_desc" style={woo_style}>
                    <p>E-KIOSK</p>
                    {/*                     <span id='explanation_kiosk'>testosaijdoiksajdlsajdlkjlaksldj</span>
 */}                </div>
                <a href="https://woocomerce.marinoscv.website/" target="_blank">
                    <img className="fake" src="#" onMouseEnter={() => { number = 6; hover_desc(); }} onMouseLeave={() => { reset_desc(); }} />
                </a>
                <img src="woocommerce.webp" ></img>
                <div className="tech _2021_tech">
                    <p className="year _2021">2021&nbsp;
                        <span className="libraries">&#123;elementor,woo- comerce,responsive&#125;</span></p>
                </div>
            </div >
            <div className="express">
                <div className="description_div express_desc" style={express_style}>
                    <p>MONGOXPRESS</p>
                </div>
                <a href="https://xblog.marinoscv.website/" target="_blank">
                    <img className="fake" src="#" onMouseEnter={() => { number = 7; hover_desc(); }} onMouseLeave={() => { reset_desc(); }} />
                </a>
                <img src="express.webp"></img>
                <div className="tech _2022_tech">
                    <p className="year _2022">2022
                        <span className="libraries">&#123;JS,ejs,postcss,mongo, tailwind,express, moongoose,responsive&#125;</span></p>
                </div>
            </div >
            <div className="cv">
                <div className="description_div cv_desc" style={cv_style}>
                    <p>CV</p>
                </div>
                {/* 
                <img className="fake" src="#" onMouseEnter={() => { number = 8; hover_desc(); }} onMouseLeave={() => { reset_desc(); }} />
                */}
                <img src="cv.webp"></img>
                <div className="tech _2023_tech">
                    <p className="year _2023">2020-2023&nbsp;
                        <span className="libraries">&#123;react18,sass, typescript, responsive&#125;</span></p>
                </div>
            </div >
        </div >
    </div >
}

if (navigator.userAgent.includes("Chrome") && navigator.userAgent.includes("Mobi")) {
    onload = () => {
        const content_portfolio = document?.querySelector(".content_portfolio") as HTMLDivElement;

        content_portfolio.style.setProperty("position", "relative", "important");
        content_portfolio.style.setProperty("right", "2rem", "important");
    }
}

export default Portfolio_eng;
