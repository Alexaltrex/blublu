import {clsx} from "clsx";
import {svgIcons} from "../../../assets/svgIcons";
import * as React from "react";
import folder from "../../../assets/png/home/folder.png";
import src0 from "../../../assets/png/home/socials_0.png";
import src1 from "../../../assets/png/home/socials_1.png";
import src2 from "../../../assets/png/home/socials_2.png";
import {FC} from "react";
import style from "./Socials.module.scss";

export const Socials: FC<{ className: string }> = ({className}) => {
    return (
        <div className={clsx(style.socials, "socials", className)}>
            <div className={style.header}>
                <div className={style.left}>
                    <img src={folder} alt=""/>
                    <p className={style.left_title}>BLUBLU SOCIALS</p>
                </div>
                {svgIcons.close_socials}
            </div>
            <div className={style.menu}>
                {
                    ["File","Edit","View","Help"].map((text, key) => (
                        <p key={key}>
                            {text}
                        </p>
                    ))
                }
            </div>
            <div className={style.socials_links}>
                {
                    [
                        {href: "https://t.me/theblubluportal", src: src0, label: "Telegram"},
                        {href: "https://twitter.com/BluBlu_ETH", src: src1, label: "Twitter"},
                        {href: "https://www.youtube.com/channel/UCsobdzSPsU3Y1kxuPxoSFPg", src: src2, label: "YouTube"},
                    ].map(({href, src, label}, key) => (
                        <a className={style.link}
                           href={href}
                           rel="nofollow noopener noreferrer"
                           target="_blank"
                           key={key}
                        >
                            <img src={src} alt=""/>
                            <p>{label}</p>
                        </a>
                    ))
                }
            </div>
            <div className={style.footer}>
                {svgIcons.resize_corner}
            </div>
        </div>
    )
}
