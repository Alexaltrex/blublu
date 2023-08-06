import * as React from "react";
import style from "./Home.module.scss";
import logo from "../../assets/png/logo.png";
import link_roadmap from "../../assets/png/home/link_roadmap.png";
import link_whitepaper from "../../assets/png/home/link_whitepaper.png";
import link_tokenomics from "../../assets/png/home/link_tokenomics.png";
import {Link} from "react-router-dom";
import {clsx} from "clsx";

export const links = [
    {src: logo, to: "/"},
    {src: link_roadmap, to: "/roadmap"},
    {src: link_whitepaper, to: "/whitepaper"},
    {src: link_tokenomics, to: "/tokenomics"},
]
const [_, ...pagesLinks] = links;

//========= LINKS =========//
export const Links = () => {
    return (
        <div className={style.links}>
            {
                pagesLinks.map(({src, to}, key) => (
                    <Link to={to} key={key} className={clsx(style.link, `link${key}`)}>
                        <img src={src} alt=""/>
                    </Link>
                ))
            }
        </div>
    )
}
