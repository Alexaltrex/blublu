import * as React from "react";
import style from "./PaperClip.module.scss";
import {svgIcons} from "../../../assets/svgIcons";
import {FC, useLayoutEffect, useRef} from "react";
import {clsx} from "clsx";
import clippy from "../../../assets/png/whitepaper/clippy.png";
import gsap from "gsap";

export const PaperClip: FC<{ className?: string }> = ({className}) => {
    const ref = useRef<HTMLDivElement>(null!);

    useLayoutEffect(() => {
        gsap.fromTo(ref.current, {
            rotate: -10
        }, {
            rotate: 10,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "power1.out",
            yoyoEase: "power1.out",
        })

        gsap.fromTo(ref.current, { skewY: -3 },{
            skewY: 3,
            duration: 0.1,
            repeat: -1,
            yoyo: true,
            ease: "power1.out",
            yoyoEase: "power1.out",
        })


    }, [])

    return (
        <div className={clsx(style.paperClip, Boolean(className) && className)}
             ref={ref}
        >
            <div className={style.top}>
                <div className={style.paperClip_body}>{svgIcons.paperClip}</div>
                <p className={style.paperClip_text}>HOW THE FUCK HAVE YOU STILL NOT BROUGHT $BLUBLU !?</p>
                <div className={style.buttons}>
                    <a href="https://www.pinksale.finance/launchpad/0x"
                       target="_blank"
                       rel="nofollow noopener noreferrer"
                    >
                        yes
                    </a>
                    <a href="https://www.pinksale.finance/launchpad/0x"
                       rel="nofollow noopener noreferrer"
                       target="_blank"
                    >
                        no
                    </a>
                </div>
            </div>
            <img src={clippy} alt=""/>
        </div>
    )
}
