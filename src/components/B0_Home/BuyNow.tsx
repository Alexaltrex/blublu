import {clsx} from "clsx";
import * as React from "react";
import buyNow from "../../assets/png/home/buy_now.png";
import style from "./Home.module.scss";

//========= BUY NOW =========//
export const BuyNow = () => {
    return (
        <a className={clsx(style.buyNow, "buyNow")}
           href="https://www.pinksale.finance/launchpad/0x"
           target="_blank"
           rel="noopener noreferrer nofollow"
        >
            <img src={buyNow} alt=""/>
        </a>
    )
}
