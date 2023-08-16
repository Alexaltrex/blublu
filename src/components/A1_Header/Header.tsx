import * as React from "react";
import style from "./Header.module.scss";
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {clsx} from "clsx";
import gsap from "gsap";
import {getColor} from "../../helpers/helpers";

export const Header = () => {

    const appRef = useRef<HTMLDivElement>(null!);
    const duration = 10;

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.timeline({repeat: -1})
                .to(".row_1", {xPercent: 100, duration, ease: "none"})
                .set(".row_1", {xPercent: -100})
                .to(".row_1", {xPercent: 0, duration, ease: "none"});
            gsap.timeline({repeat: -1})
                .to(".row_2", {xPercent: 200, duration: 2 * duration, ease: "none"})
                .set(".row_2", {xPercent: 0});
        }, appRef);
        return () => ctx.revert();
    }, [])

    return (
        <header className={style.header}
                ref={appRef}
        >
            <div className={style.wrapper}>
                <div className={clsx(style.row, style.row_1, "row_1")}>
                    {
                        Array.from({length: 11}, (_, i) => i).map(key => (
                            <p key={key}
                               style={{color: getColor(key)}}
                            >
                                buy $blublu
                            </p>
                        ))
                    }
                </div>
                <div className={clsx(style.row, style.row_2, "row_2")}>
                    {
                        Array.from({length: 11}, (_, i) => i).map(key => (
                            <p key={key}
                               style={{color: getColor(key)}}
                            >
                                buy $blublu
                            </p>
                        ))
                    }
                </div>
            </div>

        </header>
    )
}
