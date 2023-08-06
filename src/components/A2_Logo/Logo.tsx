import * as React from "react";
import style from "./Logo.module.scss";
import gsap from "gsap";
import {useLayoutEffect, useRef} from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/png/logo.png";
import {clsx} from "clsx";

export const Logo = () => {
    const appRef = useRef<HTMLDivElement>(null!);
    const duration = 0.25;

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            gsap.timeline({repeat: -1, defaults: {ease: "none"}})
                .set(".inner", {x: 0, y: -10, duration})
                .to(".inner", {x: -7, y: -7, duration})
                .to(".inner", {x: -10, y: 0, duration})
                .to(".inner", {x: -7, y: 7, duration})
                .to(".inner", {x: 0, y: 10, duration})
                .to(".inner", {x: 7, y: 7, duration})
                .to(".inner", {x: 10, y: 0, duration})
                .to(".inner", {x: 7, y: -7, duration})
                .to(".inner", {x: 0, y: -10, duration})

            // gsap.to(".inner", {
            //     rotation: -360,
            //     transformOrigin: "10px 0",
            //     //transformOrigin: "center",
            //     duration,
            //     repeat: -1,
            //     ease: "none",
            // })
            //
            // gsap.to(".link", {
            //     rotation: 360,
            //     duration,
            //     repeat: -1,
            //     ease: "none",
            // })


        }, appRef);
        return () => ctx.revert();
    }, [])

    return (
        <div className={style.logo} ref={appRef}>
            <div className={clsx(style.inner, "inner")}>
                <Link to="/" className={clsx(style.link, "link")}>
                    <img src={logo} alt="" className="logo-image"/>
                </Link>
            </div>
        </div>
    )
}
