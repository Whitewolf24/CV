import { useEffect, useState } from 'react';


const Portfolio_gr = () => {

    let number = 0;

    const hover_420_height = "70px";
    const hover_420_margin = "-24px";
    const hover_420_top = "2.85rem";

    const hover_482_height = "80px";
    const hover_482_top = "2.85rem";

    const hover_600_top = "3.4rem";
    const hover_600_top_alt = "3.45rem";
    const hover_600_margin = "-25px";
    const hover_600_left = "0.8rem";

    const hover_800_height = "110px";
    const hover_800_margin = "-40px";

    const hover_reset_800_left = "1.3rem";
    const hover_reset_800_left_alt = "1.33rem";

    const hover_1020_height = "116px";
    const hover_1020_margin = "-43px";
    const hover_1020_top = "4.5rem";

    const hover_therest_height = "136px";
    const hover_therest_margin = "-52.5px";
    const hover_therest_top = "5.2rem";

    const reset_420_height = "20px";
    const reset_420_margin = "1px";
    const reset_420_top = "4.45rem";
    const reset_420_left = "1.12rem";

    const reset_600_top = "5rem";

    const reset_800_top = "7.25rem";
    const reset_800_top_alt = "6.9rem";

    const reset_1020_plus_margin = "0.5px";
    const reset_1020_top = "8.5rem";
    const reset_1020_left = "0.5rem";

    const reset_1551_top = "8.55rem";
    const reset_1551_left = "1.5rem";

    const reset_2300_top = "8.5rem";
    const reset_2300_left = "0.5rem";

    const reset_therest_height = "30px";
    const hover_reset_therest_left = "0.8rem";
    const hover_reset_therest_left_alt = "0.82rem";
    const reset_therest_margin = "0px";


    ///////////

    const [width, set_width] = useState<number>(window.innerWidth);
    const [height, set_height] = useState<number>(window.innerHeight);

    const [desc_mouseia, set_desc_mouseia] = useState({
        height: reset_therest_height,
        margin: reset_therest_margin,
        top: "7.4rem",
        left: "1.2rem"
    })

    const [desc_eknexa, set_desc_eknexa] = useState({
        height: reset_therest_height,
        margin: reset_therest_margin,
        top: "7.2rem",
        left: "1.1rem"
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
        left: "1.12rem"
    })

    const [desc_warehouse, set_desc_warehouse] = useState({
        height: reset_therest_height,
        margin: reset_therest_margin,
        top: reset_600_top,
        left: "1.15rem"
    })

    /*    const [desc_woo, set_desc_woo] = useState({
           height: reset_therest_height,
           margin: reset_therest_margin,
           top: reset_600_top,
           left: "1.15rem"
       }) */

    const [desc_express, set_desc_express] = useState({
        height: reset_therest_height,
        margin: reset_therest_margin,
        top: "7.2rem",
        left: "1.1rem"
    })

    /*     const [desc_cv, set_desc_cv] = useState({
            height: reset_therest_height,
            margin: reset_therest_margin,
            top: "7.2rem",
            left: "1.1rem"
        }) */

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
        height: desc_warehouse.height,
        marginBlock: desc_warehouse.margin,
        top: desc_warehouse.top,
        left: desc_warehouse.left
    }

    const express_style = {
        height: desc_express.height,
        marginBlock: desc_express.margin,
        top: desc_express.top,
        left: desc_express.left
    }

    const cv_style = {
        height: desc_warehouse.height,
        marginBlock: desc_warehouse.margin,
        top: desc_warehouse.top,
        left: desc_warehouse.left
    }

    onresize = () => {
        set_width(window.innerWidth);
        set_height(window.innerHeight);
    };

    useEffect(() => {
        reset_desc();
        /*   reset_eknexa_desc();
          reset_eye_desc();
          reset_swlyn_desc();
          reset_warehouse_desc();
          reset_woo_desc();
          reset_express_desc();
          reset_cv_desc(); */
    }, [width, height]);


    //

    function hover_desc() {
        if (window.innerHeight <= 420) {
            switch (number) {
                case 1:
                    set_desc_mouseia({
                        height: hover_420_height,
                        margin: hover_420_margin,
                        top: hover_420_top,
                        left: "1.12rem"
                    });
                    break;
                case 2:
                    set_desc_eknexa({
                        height: hover_420_height,
                        margin: hover_420_margin,
                        top: hover_420_top,
                        left: "1.12rem"
                    });
                    break;
            }
        }/* 
        if (window.innerWidth <= 482 && !(window.innerHeight <= 420)) {
            set_desc_height_mouseia(hover_420_height);
            set_desc_margin_b_mouseia(hover_420_margin);
            set_desc_top_mouseia(hover_482_top);
        }
        if (window.innerWidth >= 482 && window.innerWidth <= 600 || window.innerWidth <= 482 && window.innerHeight >= 730) {
            set_desc_height_mouseia(hover_482_height);
            set_desc_margin_b_mouseia(hover_600_margin);
            set_desc_top_mouseia("3.45rem");
            set_desc_left_mouseia(hover_600_left);
        }
        else if (window.innerWidth >= 600 && window.innerWidth <= 800) {
            set_desc_height_mouseia(hover_800_height);
            set_desc_margin_b_mouseia(hover_800_margin);
            set_desc_top_mouseia("4.35rem");
            set_desc_left_mouseia(hover_reset_800_left);
        }
        else if (window.innerWidth >= 800 && window.innerWidth <= 1020) {
            set_desc_height_mouseia(hover_1020_height);
            set_desc_margin_b_mouseia(hover_1020_margin);
            set_desc_top_mouseia(hover_1020_top);
        }
        else if (window.innerWidth >= 1020) {
            set_desc_height_mouseia(hover_therest_height);
            set_desc_margin_b_mouseia(hover_therest_margin);
            set_desc_top_mouseia(hover_therest_top);
        } */
    }

    function reset_desc() {
        if (window.innerHeight <= 420) {
            set_desc_mouseia({
                height: reset_420_height,
                margin: reset_420_margin,
                top: reset_420_top,
                left: reset_420_left
            });
            set_desc_eknexa({
                height: reset_420_height,
                margin: reset_420_margin,
                top: reset_420_top,
                left: reset_420_left
            });
        }
        /*   if (window.innerWidth <= 482 && !(window.innerHeight <= 420)) {
              set_desc_height_mouseia(reset_420_height);
              set_desc_margin_b_mouseia(reset_420_margin);
              set_desc_top_mouseia(reset_420_top);
              set_desc_left_mouseia(reset_420_left);
          }
          if (window.innerWidth >= 482 && window.innerWidth <= 600 || window.innerWidth <= 482 && window.innerHeight >= 730) {
              set_desc_height_mouseia(reset_therest_height);
              set_desc_margin_b_mouseia(reset_therest_margin);
              set_desc_top_mouseia(reset_600_top);
              set_desc_left_mouseia(hover_reset_therest_left);
          }
          else if (window.innerWidth >= 600 && window.innerWidth <= 800) {
              set_desc_height_mouseia(reset_therest_height);
              set_desc_margin_b_mouseia(reset_therest_margin);
              set_desc_top_mouseia("6.9rem");
              set_desc_left_mouseia(hover_reset_800_left);
          }
          else if (window.innerWidth >= 800 && window.innerWidth <= 1020) {
              set_desc_height_mouseia(reset_therest_height);
              set_desc_margin_b_mouseia(reset_therest_margin);
              set_desc_top_mouseia(reset_800_top);
              set_desc_left_mouseia(reset_420_left);
          }
          else if (window.innerWidth >= 1020 && window.innerWidth <= 1550) {
              set_desc_height_mouseia(reset_therest_height);
              set_desc_margin_b_mouseia(reset_1020_plus_margin);
              set_desc_top_mouseia(reset_1020_top);
              set_desc_left_mouseia(reset_1020_left);
          }
          else if (window.innerWidth >= 1551 && window.innerWidth <= 2299) {
              set_desc_height_mouseia(reset_therest_height);
              set_desc_margin_b_mouseia(reset_1020_plus_margin);
              set_desc_top_mouseia(reset_1551_top);
              set_desc_left_mouseia(reset_1551_left);
          }
          else if (window.innerWidth >= 2300) {
              set_desc_height_mouseia(reset_therest_height);
              set_desc_margin_b_mouseia(reset_1020_plus_margin);
              set_desc_top_mouseia(reset_1551_top);
              set_desc_left_mouseia(reset_2300_left);
          } */
    }

    /*   //
     
      function hover_eknexa_desc() {
          if (window.innerHeight <= 420) {
              set_desc_height_eknexa(hover_420_height);
              set_desc_margin_b_eknexa(hover_420_margin);
              set_desc_top_eknexa(hover_420_top);
          }
          if (window.innerWidth <= 482 && !(window.innerHeight <= 420)) {
              set_desc_height_eknexa(hover_420_height);
              set_desc_margin_b_eknexa(hover_420_margin);
              set_desc_top_eknexa(hover_482_top);
          }
          if (window.innerWidth >= 482 && window.innerWidth <= 600 || window.innerWidth <= 482 && window.innerHeight >= 730) {
              set_desc_height_eknexa(hover_482_height);
              set_desc_margin_b_eknexa(hover_600_margin);
              set_desc_top_eknexa(hover_600_top);
              set_desc_left_eknexa(hover_reset_therest_left_alt);
          }
          else if (window.innerWidth >= 600 && window.innerWidth <= 800) {
              set_desc_height_eknexa(hover_800_height);
              set_desc_margin_b_eknexa(hover_800_margin);
              set_desc_top_eknexa("4.35rem");
              set_desc_left_eknexa(hover_reset_800_left_alt);
          }
          else if (window.innerWidth >= 800 && window.innerWidth <= 1020) {
              set_desc_height_eknexa(hover_1020_height);
              set_desc_margin_b_eknexa(hover_1020_margin);
              set_desc_top_eknexa(hover_1020_top);
          }
          else if (window.innerWidth >= 1020) {
              set_desc_height_eknexa(hover_therest_height);
              set_desc_margin_b_eknexa(hover_therest_margin);
              set_desc_top_eknexa(hover_therest_top);
          }
      }
     
      function reset_eknexa_desc() {
          if (window.innerWidth <= 482 && window.innerHeight <= 420) {
              set_desc_height_eknexa(reset_420_height);
              set_desc_margin_b_eknexa(reset_420_margin);
              set_desc_top_eknexa(reset_420_top);
              set_desc_left_eknexa(reset_420_left);
          }
          if (window.innerWidth <= 482 && !(window.innerHeight <= 420)) {
              set_desc_height_eknexa(reset_420_height);
              set_desc_margin_b_eknexa(reset_420_margin);
              set_desc_top_eknexa(reset_420_top);
              set_desc_left_eknexa(reset_420_left);
          }
          if (window.innerWidth >= 482 && window.innerWidth <= 600 || window.innerWidth <= 482 && window.innerHeight >= 730) {
              set_desc_height_eknexa(reset_therest_height);
              set_desc_margin_b_eknexa(reset_therest_margin);
              set_desc_top_eknexa(reset_600_top);
              set_desc_left_eknexa(hover_reset_therest_left_alt);
          }
          else if (window.innerWidth >= 600 && window.innerWidth <= 800) {
              set_desc_height_eknexa(reset_therest_height);
              set_desc_margin_b_eknexa(reset_therest_margin);
              set_desc_top_eknexa(reset_800_top);
              set_desc_left_eknexa(hover_reset_800_left_alt);
          }
          else if (window.innerWidth >= 800 && window.innerWidth <= 1020) {
              set_desc_height_eknexa(reset_therest_height);
              set_desc_margin_b_eknexa(reset_therest_margin);
              set_desc_top_eknexa(reset_800_top);
              set_desc_left_eknexa(reset_420_left);
          }
          else if (window.innerWidth >= 1020 && window.innerWidth <= 1550) {
              set_desc_height_eknexa(reset_therest_height);
              set_desc_margin_b_eknexa(reset_1020_plus_margin);
              set_desc_top_eknexa(reset_1020_top);
              set_desc_left_eknexa(reset_1020_left);
          }
          else if (window.innerWidth >= 1551 && window.innerWidth <= 2299) {
              set_desc_height_eknexa(reset_therest_height);
              set_desc_margin_b_eknexa(reset_1020_plus_margin);
              set_desc_top_eknexa(reset_1551_top);
              set_desc_left_eknexa(reset_1551_left);
          }
          else if (window.innerWidth >= 2300) {
              set_desc_height_eknexa(reset_therest_height);
              set_desc_margin_b_eknexa(reset_1020_plus_margin);
              set_desc_top_eknexa(reset_1551_top);
              set_desc_left_eknexa(reset_2300_left);
          }
      }
     
      //
     
      function hover_eye_desc() {
          if (window.innerHeight <= 420) {
              set_desc_height_eye(hover_420_height);
              set_desc_margin_b_eye(hover_420_margin);
              set_desc_top_eye(hover_420_top);
          }
          if (window.innerWidth <= 482 && !(window.innerHeight <= 420)) {
              set_desc_height_eye(hover_420_height);
              set_desc_margin_b_eye(hover_420_margin);
              set_desc_top_eye(hover_482_top);
          }
          if (window.innerWidth >= 482 && window.innerWidth <= 600 || window.innerWidth <= 482 && window.innerHeight >= 730) {
              set_desc_height_eye(hover_482_height);
              set_desc_margin_b_eye(hover_600_margin);
              set_desc_top_eye(hover_600_top_alt);
              set_desc_left_eye(hover_600_left);
          }
          else if (window.innerWidth >= 600 && window.innerWidth <= 800) {
              set_desc_height_eye(hover_800_height);
              set_desc_margin_b_eye(hover_800_margin);
              set_desc_top_eye("4.38rem");
              set_desc_left_eye(hover_reset_800_left);
          }
          else if (window.innerWidth >= 800 && window.innerWidth <= 1020) {
              set_desc_height_eye(hover_1020_height);
              set_desc_margin_b_eye(hover_1020_margin);
              set_desc_top_eye(hover_1020_top);
          }
          else if (window.innerWidth >= 1020) {
              set_desc_height_eye(hover_therest_height);
              set_desc_margin_b_eye(hover_therest_margin);
              set_desc_top_eye(hover_therest_top);
          }
      }
     
      function reset_eye_desc() {
          if (window.innerHeight <= 420) {
              set_desc_height_eye(reset_420_height);
              set_desc_margin_b_eye(reset_420_margin);
              set_desc_top_eye(reset_420_top);
              set_desc_left_eye(reset_420_left);
          }
          if (window.innerWidth <= 482 && !(window.innerHeight <= 420)) {
              set_desc_height_eye(reset_420_height);
              set_desc_margin_b_eye(reset_420_margin);
              set_desc_top_eye(reset_420_top);
              set_desc_left_eye(reset_420_left);
          }
          if (window.innerWidth >= 482 && window.innerWidth <= 600 || window.innerWidth <= 482 && window.innerHeight >= 730) {
              set_desc_height_eye(reset_therest_height);
              set_desc_margin_b_eye(reset_therest_margin);
              set_desc_top_eye(reset_600_top);
              set_desc_left_eye(hover_600_left);
          }
          else if (window.innerWidth >= 600 && window.innerWidth <= 800) {
              set_desc_height_eye(reset_therest_height);
              set_desc_margin_b_eye(reset_therest_margin);
              set_desc_top_eye("6.9rem");
              set_desc_left_eye(hover_reset_800_left);
          }
          else if (window.innerWidth >= 800 && window.innerWidth <= 1020) {
              set_desc_height_eye(reset_therest_height);
              set_desc_margin_b_eye(reset_therest_margin);
              set_desc_top_eye(reset_800_top);
              set_desc_left_eye(reset_420_left);
          }
          else if (window.innerWidth >= 1020 && window.innerWidth <= 1550) {
              set_desc_height_eye(reset_therest_height);
              set_desc_margin_b_eye(reset_1020_plus_margin);
              set_desc_top_eye(reset_1020_top);
              set_desc_left_eye(reset_1020_left);
          }
          else if (window.innerWidth >= 1551 && window.innerWidth <= 2299) {
              set_desc_height_eye(reset_therest_height);
              set_desc_margin_b_eye(reset_1020_plus_margin);
              set_desc_top_eye(reset_1551_top);
              set_desc_left_eye(reset_1551_left);
          }
          else if (window.innerWidth >= 2300) {
              set_desc_height_eye(reset_therest_height);
              set_desc_margin_b_eye(reset_1020_plus_margin);
              set_desc_top_eye(reset_1551_top);
              set_desc_left_eye(reset_2300_left);
          }
      }
     
      //
     
      function hover_swlyn_desc() {
          if (window.innerHeight <= 420) {
              set_desc_height_swlyn(hover_420_height);
              set_desc_margin_b_swlyn(hover_420_margin);
              set_desc_top_swlyn(hover_420_top);
          }
          if (window.innerWidth <= 482 && !(window.innerHeight <= 420)) {
              set_desc_height_swlyn(hover_420_height);
              set_desc_margin_b_swlyn(hover_420_margin);
              set_desc_top_swlyn(hover_482_top);
          }
          if (window.innerWidth >= 482 && window.innerWidth <= 600 || window.innerWidth <= 482 && window.innerHeight >= 730) {
              set_desc_height_swlyn(hover_482_height);
              set_desc_margin_b_swlyn(hover_600_margin);
              set_desc_top_swlyn(hover_600_top_alt);
              set_desc_left_swlyn(hover_reset_therest_left_alt);
          }
          else if (window.innerWidth >= 600 && window.innerWidth <= 800) {
              set_desc_height_swlyn(hover_800_height);
              set_desc_margin_b_swlyn(hover_800_margin);
              set_desc_top_swlyn("4.38rem");
              set_desc_left_swlyn(hover_reset_800_left_alt);
          }
          else if (window.innerWidth >= 800 && window.innerWidth <= 1020) {
              set_desc_height_swlyn(hover_1020_height);
              set_desc_margin_b_swlyn(hover_1020_margin);
              set_desc_top_swlyn(hover_1020_top);
          }
          else if (window.innerWidth >= 1020) {
              set_desc_height_swlyn(hover_therest_height);
              set_desc_margin_b_swlyn(hover_therest_margin);
              set_desc_top_swlyn(hover_therest_top);
          }
      }
     
      function reset_swlyn_desc() {
          if (window.innerHeight <= 420) {
              set_desc_height_swlyn(reset_420_height);
              set_desc_margin_b_swlyn(reset_420_margin);
              set_desc_top_swlyn(reset_420_top);
              set_desc_left_swlyn(reset_420_left);
          }
          if (window.innerWidth <= 482 && !(window.innerHeight <= 420)) {
              set_desc_height_swlyn(reset_420_height);
              set_desc_margin_b_swlyn(reset_420_margin);
              set_desc_top_swlyn(reset_420_top);
              set_desc_left_swlyn(reset_420_left);
          }
          if (window.innerWidth >= 482 && window.innerWidth <= 600 || window.innerWidth <= 482 && window.innerHeight >= 730) {
              set_desc_height_swlyn(reset_therest_height);
              set_desc_margin_b_swlyn(reset_therest_margin);
              set_desc_top_swlyn(reset_600_top);
              set_desc_left_swlyn(hover_reset_therest_left_alt);
          }
          else if (window.innerWidth >= 600 && window.innerWidth <= 800) {
              set_desc_height_swlyn(reset_therest_height);
              set_desc_margin_b_swlyn(reset_therest_margin);
              set_desc_top_swlyn("6.9rem");
              set_desc_left_swlyn(hover_reset_800_left_alt);
          }
          else if (window.innerWidth >= 800 && window.innerWidth <= 1020) {
              set_desc_height_swlyn(reset_therest_height);
              set_desc_margin_b_swlyn(reset_therest_margin);
              set_desc_top_swlyn(reset_800_top);
              set_desc_left_swlyn(reset_420_left);
          }
          else if (window.innerWidth >= 1020 && window.innerWidth <= 1550) {
              set_desc_height_swlyn(reset_therest_height);
              set_desc_margin_b_swlyn(reset_1020_plus_margin);
              set_desc_top_swlyn(reset_1020_top);
              set_desc_left_swlyn(reset_1020_left);
          }
          else if (window.innerWidth >= 1551 && window.innerWidth <= 2299) {
              set_desc_height_swlyn(reset_therest_height);
              set_desc_margin_b_swlyn(reset_1020_plus_margin);
              set_desc_top_swlyn(reset_1551_top);
              set_desc_left_swlyn(reset_1551_left);
          }
          else if (window.innerWidth >= 2300) {
              set_desc_height_swlyn(reset_therest_height);
              set_desc_margin_b_swlyn(reset_1020_plus_margin);
              set_desc_top_swlyn(reset_1551_top);
              set_desc_left_swlyn(reset_2300_left);
          }
      }
     
      //
     
      function hover_warehouse_desc() {
          if (window.innerHeight <= 420) {
              set_desc_height_warehouse(hover_420_height);
              set_desc_margin_b_warehouse(hover_420_margin);
              set_desc_top_warehouse(hover_420_top);
          }
          if (window.innerWidth <= 482 && !(window.innerHeight <= 420)) {
              set_desc_height_warehouse(hover_420_height);
              set_desc_margin_b_warehouse(hover_420_margin);
              set_desc_top_warehouse(hover_482_top);
          }
          if (window.innerWidth >= 482 && window.innerWidth <= 600 || window.innerWidth <= 482 && window.innerHeight >= 730) {
              set_desc_height_warehouse(hover_482_height);
              set_desc_margin_b_warehouse(hover_600_margin);
              set_desc_top_warehouse(hover_600_top_alt);
              set_desc_left_warehouse(hover_600_left);
          }
          else if (window.innerWidth >= 600 && window.innerWidth <= 800) {
              set_desc_height_warehouse(hover_800_height);
              set_desc_margin_b_warehouse(hover_800_margin);
              set_desc_top_warehouse(reset_420_top);
              set_desc_left_warehouse(hover_reset_800_left);
          }
          else if (window.innerWidth >= 800 && window.innerWidth <= 1020) {
              set_desc_height_warehouse(hover_1020_height);
              set_desc_margin_b_warehouse(hover_1020_margin);
              set_desc_top_warehouse(hover_1020_top);
          }
          else if (window.innerWidth >= 1020) {
              set_desc_height_warehouse(hover_therest_height);
              set_desc_margin_b_warehouse(hover_therest_margin);
              set_desc_top_warehouse(hover_therest_top);
          }
      }
     
      function reset_warehouse_desc() {
          if (window.innerHeight <= 420) {
              set_desc_height_warehouse(reset_420_height);
              set_desc_margin_b_warehouse(reset_420_margin)
              set_desc_top_warehouse(reset_420_top);
              set_desc_left_warehouse(reset_420_left);
          }
          if (window.innerWidth <= 482 && !(window.innerHeight <= 420)) {
              set_desc_height_warehouse(reset_420_height);
              set_desc_margin_b_warehouse(reset_420_margin);
              set_desc_top_warehouse(reset_420_top);
              set_desc_left_warehouse(reset_420_left);
          }
          if (window.innerWidth >= 482 && window.innerWidth <= 600 || window.innerWidth <= 482 && window.innerHeight >= 730) {
              set_desc_height_warehouse(reset_therest_height);
              set_desc_margin_b_warehouse(reset_therest_margin);
              set_desc_top_warehouse(reset_600_top);
              set_desc_left_warehouse(hover_600_left);
          }
          else if (window.innerWidth >= 600 && window.innerWidth <= 800) {
              set_desc_height_warehouse(reset_therest_height);
              set_desc_margin_b_warehouse(reset_therest_margin);
              set_desc_top_warehouse(reset_800_top_alt);
              set_desc_left_warehouse(hover_reset_800_left);
          }
          else if (window.innerWidth >= 800 && window.innerWidth <= 1020) {
              set_desc_height_warehouse(reset_therest_height);
              set_desc_margin_b_warehouse(reset_therest_margin);
              set_desc_top_warehouse(reset_800_top);
              set_desc_left_warehouse(reset_420_left);
          }
          else if (window.innerWidth >= 1020 && window.innerWidth <= 1550) {
              set_desc_height_warehouse(reset_therest_height);
              set_desc_margin_b_warehouse(reset_1020_plus_margin);
              set_desc_top_warehouse(reset_1020_top);
              set_desc_left_warehouse(reset_1020_left);
          }
          else if (window.innerWidth >= 1551 && window.innerWidth <= 2299) {
              set_desc_height_warehouse(reset_therest_height);
              set_desc_margin_b_warehouse(reset_1020_plus_margin);
              set_desc_top_warehouse(reset_1020_top);
              set_desc_left_warehouse(reset_1551_left);
          }
          else if (window.innerWidth >= 2300) {
              set_desc_height_warehouse(reset_therest_height);
              set_desc_margin_b_warehouse(reset_1020_plus_margin);
              set_desc_top_warehouse(reset_1551_top);
              set_desc_left_warehouse(reset_2300_left);
          }
      }
     
      //
     
      function hover_woo_desc() {
          if (window.innerHeight <= 420) {
              set_desc_height_woo(hover_420_height);
              set_desc_margin_b_woo(hover_420_margin);
              set_desc_top_woo(hover_420_top);
          }
          if (window.innerWidth <= 482 && !(window.innerHeight <= 420)) {
              set_desc_height_woo(hover_420_height);
              set_desc_margin_b_woo(hover_420_margin);
              set_desc_top_woo(hover_482_top);
          }
          if (window.innerWidth >= 482 && window.innerWidth <= 600 || window.innerWidth <= 482 && window.innerHeight >= 730) {
              set_desc_height_woo(hover_482_height);
              set_desc_margin_b_woo(hover_600_margin);
              set_desc_top_woo(hover_600_top_alt);
              set_desc_left_woo(hover_reset_therest_left_alt);
          }
          else if (window.innerWidth >= 600 && window.innerWidth <= 800) {
              set_desc_height_woo(hover_800_height);
              set_desc_margin_b_woo(hover_800_margin);
              set_desc_top_woo(reset_420_top);
              set_desc_left_woo(hover_reset_800_left_alt);
          }
          else if (window.innerWidth >= 800 && window.innerWidth <= 1020) {
              set_desc_height_woo(hover_1020_height);
              set_desc_margin_b_woo(hover_1020_margin);
              set_desc_top_woo(hover_1020_top);
          }
          else if (window.innerWidth >= 1020) {
              set_desc_height_woo(hover_therest_height);
              set_desc_margin_b_woo(hover_therest_margin);
              set_desc_top_woo(hover_therest_top);
          }
      }
     
      function reset_woo_desc() {
          if (window.innerHeight <= 420) {
              set_desc_height_woo(reset_420_height);
              set_desc_margin_b_woo(reset_420_margin);
              set_desc_top_woo(reset_420_top);
              set_desc_left_woo(reset_420_left);
          }
          if (window.innerWidth <= 482 && !(window.innerHeight <= 420)) {
              set_desc_height_woo(reset_420_height);
              set_desc_margin_b_woo(reset_420_margin);
              set_desc_top_woo(reset_420_top);
              set_desc_left_woo(reset_420_left);
          }
          if (window.innerWidth >= 482 && window.innerWidth <= 600 || window.innerWidth <= 482 && window.innerHeight >= 730) {
              set_desc_height_woo(reset_therest_height);
              set_desc_margin_b_woo(reset_therest_margin);
              set_desc_top_woo(reset_600_top);
              set_desc_left_woo(hover_reset_therest_left_alt);
          }
          else if (window.innerWidth >= 600 && window.innerWidth <= 800) {
              set_desc_height_woo(reset_therest_height);
              set_desc_margin_b_woo(reset_therest_margin);
              set_desc_top_woo(reset_800_top_alt);
              set_desc_left_woo(hover_reset_800_left_alt);
          }
          else if (window.innerWidth >= 800 && window.innerWidth <= 1020) {
              set_desc_height_woo(reset_therest_height);
              set_desc_margin_b_woo(reset_therest_margin);
              set_desc_top_woo(reset_800_top);
              set_desc_left_woo(reset_420_left);
          }
          else if (window.innerWidth >= 1020 && window.innerWidth <= 1550) {
              set_desc_height_woo(reset_therest_height);
              set_desc_margin_b_woo(reset_1020_plus_margin);
              set_desc_top_woo(reset_1020_top);
              set_desc_left_woo(reset_1020_left);
          }
          else if (window.innerWidth >= 1551 && window.innerWidth <= 2299) {
              set_desc_height_woo(reset_therest_height);
              set_desc_margin_b_woo(reset_1020_plus_margin);
              set_desc_top_woo(reset_1020_top);
              set_desc_left_woo(reset_1551_left);
          }
          else if (window.innerWidth >= 2300) {
              set_desc_height_woo(reset_therest_height);
              set_desc_margin_b_woo(reset_1020_plus_margin);
              set_desc_top_woo(reset_2300_top);
              set_desc_left_woo(reset_2300_left);
          }
      }
     
      //
     
      function hover_express_desc() {
          if (window.innerHeight <= 420) {
              set_desc_height_express(hover_420_height);
              set_desc_margin_b_express(hover_420_margin);
              set_desc_top_express(hover_420_top);
          }
          if (window.innerWidth <= 482 && !(window.innerHeight <= 420)) {
              set_desc_height_express(hover_420_height);
              set_desc_margin_b_express(hover_420_margin);
              set_desc_top_express(hover_420_top);
          }
          if (window.innerWidth >= 482 && window.innerWidth <= 600 || window.innerWidth <= 482 && window.innerHeight >= 730) {
              set_desc_height_express(hover_482_height);
              set_desc_margin_b_express(hover_600_margin);
              set_desc_top_express("3.45rem");
              set_desc_left_express(hover_reset_therest_left);
          }
          else if (window.innerWidth >= 600 && window.innerWidth <= 800) {
              set_desc_height_express(hover_800_height);
              set_desc_margin_b_express(hover_800_margin);
              set_desc_top_express(reset_420_top);
              set_desc_left_express(hover_reset_800_left);
          }
          else if (window.innerWidth >= 800 && window.innerWidth <= 1020) {
              set_desc_height_express(hover_1020_height);
              set_desc_margin_b_express(hover_1020_margin);
              set_desc_top_express(hover_1020_top);
          }
          else if (window.innerWidth >= 1020) {
              set_desc_height_express(hover_therest_height);
              set_desc_margin_b_express(hover_therest_margin);
              set_desc_top_express(hover_therest_top);
          }
      }
     
      function reset_express_desc() {
          if (window.innerHeight <= 420) {
              set_desc_height_express(reset_420_height);
              set_desc_margin_b_express(reset_420_margin)
              set_desc_top_express(reset_420_top);
              set_desc_left_express(reset_420_left);
          }
          if (window.innerWidth <= 482 && !(window.innerHeight <= 420)) {
              set_desc_height_express(reset_420_height);
              set_desc_margin_b_express(reset_420_margin);
              set_desc_top_express(reset_420_top);
              set_desc_left_express(reset_420_left);
          }
          if (window.innerWidth >= 482 && window.innerWidth <= 600 || window.innerWidth <= 482 && window.innerHeight >= 730) {
              set_desc_height_express(reset_therest_height);
              set_desc_margin_b_express(reset_therest_margin);
              set_desc_top_express(reset_600_top);
              set_desc_left_express(hover_reset_therest_left);
          }
          else if (window.innerWidth >= 600 && window.innerWidth <= 800) {
              set_desc_height_express(reset_therest_height);
              set_desc_margin_b_express(reset_therest_margin);
              set_desc_top_express(reset_800_top_alt);
              set_desc_left_express(hover_reset_800_left);
          }
          else if (window.innerWidth >= 800 && window.innerWidth <= 1020) {
              set_desc_height_express(reset_therest_height);
              set_desc_margin_b_express(reset_therest_margin);
              set_desc_top_express(reset_800_top);
              set_desc_left_express(reset_420_left);
          }
          else if (window.innerWidth >= 1020 && window.innerWidth <= 1550) {
              set_desc_height_express(reset_therest_height);
              set_desc_margin_b_express(reset_1020_plus_margin);
              set_desc_top_express(reset_1020_top);
              set_desc_left_express(reset_1020_left);
          }
          else if (window.innerWidth >= 1551 && window.innerWidth <= 2299) {
              set_desc_height_express(reset_therest_height);
              set_desc_margin_b_express(reset_1020_plus_margin);
              set_desc_top_express(reset_1020_top);
              set_desc_left_express(reset_1551_left);
          }
          else if (window.innerWidth >= 2300) {
              set_desc_height_express(reset_therest_height);
              set_desc_margin_b_express(reset_1020_plus_margin);
              set_desc_top_express(reset_2300_top);
              set_desc_left_express(reset_2300_left);
          }
      }
     
      //
     
      function hover_cv_desc() {
          if (window.innerHeight <= 420) {
              set_desc_height_cv(hover_420_height);
              set_desc_margin_b_cv(hover_420_margin);
              set_desc_top_cv(hover_420_top);
          }
          if (window.innerWidth <= 482 && !(window.innerHeight <= 420)) {
              set_desc_height_cv(hover_420_height);
              set_desc_margin_b_cv(hover_420_margin);
              set_desc_top_cv(hover_420_top);
          }
          if (window.innerWidth >= 482 && window.innerWidth <= 600 || window.innerWidth <= 482 && window.innerHeight >= 730) {
              set_desc_height_cv(hover_482_height);
              set_desc_margin_b_cv(hover_600_margin);
              set_desc_top_cv(hover_600_top_alt);
              set_desc_left_cv(hover_reset_therest_left);
          }
          else if (window.innerWidth >= 600 && window.innerWidth <= 800) {
              set_desc_height_cv(hover_800_height);
              set_desc_margin_b_cv(hover_800_margin);
              set_desc_top_cv(reset_420_top);
              set_desc_left_cv(hover_reset_800_left_alt);
          }
          else if (window.innerWidth >= 800 && window.innerWidth <= 1020) {
              set_desc_height_cv(hover_1020_height);
              set_desc_margin_b_cv(hover_1020_margin);
              set_desc_top_cv(hover_1020_top);
          }
          else if (window.innerWidth >= 1020) {
              set_desc_height_cv(hover_therest_height);
              set_desc_margin_b_cv(hover_therest_margin);
              set_desc_top_cv(hover_therest_top);
          }
      }
     
      function reset_cv_desc() {
          if (window.innerHeight <= 420) {
              set_desc_height_cv(reset_420_height);
              set_desc_margin_b_cv(reset_420_margin)
              set_desc_top_cv(reset_420_top);
              set_desc_left_cv(reset_420_left);
          }
          if (window.innerWidth <= 482 && !(window.innerHeight <= 420)) {
              set_desc_height_cv(reset_420_height);
              set_desc_margin_b_cv(reset_420_margin);
              set_desc_top_cv(reset_420_top);
              set_desc_left_cv(reset_420_left);
          }
          if (window.innerWidth >= 482 && window.innerWidth <= 600 || window.innerWidth <= 482 && window.innerHeight >= 730) {
              set_desc_height_cv(reset_therest_height);
              set_desc_margin_b_cv(reset_therest_margin);
              set_desc_top_cv(reset_600_top);
              set_desc_left_cv(hover_reset_therest_left);
          }
          else if (window.innerWidth >= 600 && window.innerWidth <= 800) {
              set_desc_height_cv(reset_therest_height);
              set_desc_margin_b_cv(reset_therest_margin);
              set_desc_top_cv(reset_800_top_alt);
              set_desc_left_cv(hover_reset_800_left_alt);
          }
          else if (window.innerWidth >= 800 && window.innerWidth <= 1020) {
              set_desc_height_cv(reset_therest_height);
              set_desc_margin_b_cv(reset_therest_margin);
              set_desc_top_cv(reset_800_top);
              set_desc_left_cv(reset_420_left);
          }
          else if (window.innerWidth >= 1020 && window.innerWidth <= 1550) {
              set_desc_height_cv(reset_therest_height);
              set_desc_margin_b_cv(reset_1020_plus_margin);
              set_desc_top_cv(reset_1020_top);
              set_desc_left_cv(reset_1020_left);
          }
          else if (window.innerWidth >= 1551 && window.innerWidth <= 2299) {
              set_desc_height_cv(reset_therest_height);
              set_desc_margin_b_cv(reset_1020_plus_margin);
              set_desc_top_cv(reset_1020_top);
              set_desc_left_cv(reset_1551_left);
          }
          else if (window.innerWidth >= 2300) {
              set_desc_height_cv(reset_therest_height);
              set_desc_margin_b_cv(reset_1020_plus_margin);
              set_desc_top_cv(reset_2300_top);
              set_desc_left_cv(reset_2300_left);
          }
      }
    */
    //----------//

    return <div className="content">
        <div className="content_portfolio">
            <div className="mouseia">
                <div className="description_div mouseia_desc" style={mouseia_style}>
                    <p>ΜΟΥΣΕΙΑ ΛΕΣΒΟΥ</p>
                </div>
                <img className="fake" src="#" onMouseEnter={() => { number = 1; hover_desc(); }} onMouseLeave={() => { reset_desc(); }} />
                <img src="mouseia.webp"></img>
                <div className="tech">
                    <p className="year _2013">2013&nbsp;
                        <span className="libraries">&#123;jquery&#125;</span></p>
                </div>
            </div>
            <div className="eknexa">
                <div className="description_div eknexa_desc" style={eknexa_style}>
                    <p>ΣΤΗΝ ΠΛΑΤΕΙΑ</p>
                </div>
                <img className="fake" src="#" onMouseEnter={() => { number = 2; hover_desc(); }} onMouseLeave={() => { reset_desc(); }} />
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
                <img className="fake" src="#" onMouseEnter={() => { hover_desc(); }} onMouseLeave={() => { reset_desc(); }} />

                <img src="eye.webp"></img>
                <div className="tech _2016_tech">
                    <p className="year _eknexa016">2016&nbsp;
                        <span className="libraries">&#123;bootstrap,jquery, responsive&#125;</span></p>
                </div>
            </div>
            <div className="swlyn">
                <div className="description_div swlyn_desc" style={swlyn_style}>
                    <p>ΣΩΛΥΝ</p>
                </div>
                <img className="fake" src="#" onMouseEnter={() => { hover_desc(); }} onMouseLeave={() => { reset_desc(); }} />

                <img src="swlyn.webp" ></img>
                <div className="tech">
                    <p className="year _2018">2018&nbsp;
                        <span className="libraries">&#123;JS,responsive&#125;</span></p>
                </div>
            </div >
            <div className="warehouse">
                <div className="description_div warehouse_desc" style={warehouse_style}>
                    <p>ΑΠΟΘΗΚΗ</p>
                </div>
                <img className="fake" src="#" onMouseEnter={() => { hover_desc(); }} onMouseLeave={() => { reset_desc(); }} />

                <img src="warehouse.webp"></img>
                <div className="tech _2020_tech">
                    <p className="year _2020">2020&nbsp;
                        <span className="libraries">&#123;JS,sass,laravel, mysql,responsive&#125;</span></p>
                </div>
            </div >
            <div className="woocommerce">
                <div className="description_div woocomerce_desc" style={woo_style}>
                    <p>E-KIOSK</p>
                </div>
                <img className="fake" src="#" onMouseEnter={() => { hover_desc(); }} onMouseLeave={() => { reset_desc(); }} />

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
                <img className="fake" src="#" onMouseEnter={() => { hover_desc(); }} onMouseLeave={() => { reset_desc(); }} />
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
                <img className="fake" src="#" onMouseEnter={() => { hover_desc(); }} onMouseLeave={() => { reset_desc(); }} />
                <img src="#"></img>
                <div className="tech _2023_tech">
                    <p className="year _2023">2020-2023&nbsp;
                        <span className="libraries">&#123;react18,sass, typescript, responsive&#125;</span></p>
                </div>
            </div >
        </div >
    </div >
}

export default Portfolio_gr;
