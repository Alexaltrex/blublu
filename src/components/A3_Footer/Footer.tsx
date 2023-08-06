import * as React from "react";
import style from "./Footer.module.scss";
import {Link} from "react-router-dom";
import {links} from "../B0_Home/Links";

export const Footer = () => {
    return (
        <footer className={style.footer}>
            {
                links.map(({src, to}, key) => (
                    <Link to={to} key={key} className={style.link}>
                        <img src={src} alt=""/>
                    </Link>
                ))
            }
        </footer>
    )
}
