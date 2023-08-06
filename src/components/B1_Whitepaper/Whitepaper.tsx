import * as React from "react";
import style from "./Whitepaper.module.scss";
import link_whitepaper from "../../assets/png/home/link_whitepaper.png";
import {useLayoutEffect, useRef} from "react";
import gsap from "gsap";

import {clsx} from "clsx";
import {Player} from "../x_common/Player/Player";
import {PaperClip} from "../x_common/PaperClip/PaperClip";
import {svgIcons} from "../../assets/svgIcons";
import paint from "../../assets/png/whitepaper/paint.png";
import pinball_mobile from "../../assets/png/whitepaper/pinball_mobile.png";
import pinball_tablet from "../../assets/png/whitepaper/pinball_tablet.png";
import notepad_icon from "../../assets/png/whitepaper/notepad_icon.png";
import notepad_close from "../../assets/png/whitepaper/notepad_close.png";
import notepad_left from "../../assets/png/whitepaper/notepad_left.png";
import notepad_right from "../../assets/png/whitepaper/notepad_right.png";
import windows from "../../assets/png/whitepaper/windows.png";
import mobile_bottom_blur from "../../assets/png/whitepaper/mobile_bottom_blur.png";
import dots_tablet from "../../assets/png/whitepaper/dots_tablet.png";
import dots_desktop from "../../assets/png/home/dots_desktop.png";
// @ts-ignore
import whitepaper_frog from "../../assets/webm/whitepaper_frog.webm";

export const Whitepaper = () => {
    const appRef = useRef<HTMLDivElement>(null!);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            gsap.timeline({repeat: -1})
                .to(".paint", {
                    scaleY: 1.1,
                    duration: 1,
                    transformOrigin: "bottom",
                })
                .to(".paint", {
                    scaleY: 1,
                    duration: 1,
                    transformOrigin: "bottom",
                    ease: "power1.in"
                })
                .to(".paint", {
                    scaleY: 1.05,
                    duration: 1,
                    transformOrigin: "bottom",
                })
                .to(".paint", {
                    scaleY: 1,
                    duration: 1,
                    transformOrigin: "bottom",
                    ease: "power1.in"
                });

            gsap//.timeline({repeat: -1})
                .to(".pinball", {
                    x: -2,
                    y: 2,
                    duration: 0.1,
                    repeat: -1,
                    yoyo: true

                })

            gsap.timeline({repeat: -1})
                .to(".pinball_text", {duration: 0.1})
                .set(".pinball_text", {opacity: 0})
                .to(".pinball_text", {opacity: 0, duration: 0.1})
                .set(".pinball_text", {opacity: 1})

        }, appRef);
        return () => ctx.revert();
    }, [])

    return (
        <div className={style.whitepaper}
             ref={appRef}
        >
            <img src={link_whitepaper} alt="" className={style.title}/>


            <img src={windows} alt="" className={style.windows}/>
            <div className={style.gradient_windows_bottom}/>


            <img src={mobile_bottom_blur} alt="" className={style.mobile_bottom_blur}/>
            <img src={dots_tablet} alt="" className={style.dots_tablet}/>
            <img src={dots_desktop} alt="" className={style.dots_desktop}/>

            <div className={style.videoWrapper}>
                <video src={whitepaper_frog}
                       autoPlay={true}
                       loop={true}
                       muted={true}
                       playsInline={true}
                       className={style.whitepaper_frog}
                />
            </div>



            <div className={style.mobileContent}>
                <Paint/>
                <Player className={style.player}/>
                <Pinball/>
                <Notepad/>

                <PaperClip className={style.paperClip}/>

            </div>

            <div className={style.tabletContent}>
                <PaperClip className={style.paperClip}/>
                <div className={style.row}>
                    <Pinball/>
                    <Paint/>
                </div>
                <Notepad/>
                <Player className={style.player}/>
            </div>

            <div className={style.desktopContent}>
                <div className={style.row_top}>
                    <Pinball/>
                    <Paint/>
                </div>
                <div className={style.row_bottom}>
                    <Notepad/>
                    <div className={style.row_bottom_right}>
                        <PaperClip className={style.paperClip}/>
                        <Player className={style.player}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

//========= PAINT =========//
export const Paint = () => {
    return (
        <img src={paint}
             alt=""
             className={clsx(style.paint, "paint")}
        />
    )
}


//========= PINBALL =========//
export const Pinball = () => {
    return (
        <div className={clsx(style.pinball, "pinball")}>
            <img src={pinball_mobile} alt=""/>
            <img src={pinball_tablet} alt=""/>
            <p className={clsx(style.pinball_text_0, "pinball_text")}>Player 1</p>
            <p className={clsx(style.pinball_text_1, "pinball_text")}>Waiting</p>
            <p className={clsx(style.pinball_text_2, "pinball_text")}>Payment</p>
        </div>

    )
}

//========= NOTEPAD =========//
export const Notepad = () => {
    return (
        <div className={style.notepad}>
            <div className={style.header}>
                <div className={style.left}>
                    <img src={notepad_icon} alt=""/>
                    <p>Untitled - Notepad</p>
                </div>
                <img src={notepad_close} alt=""/>
            </div>
            <div className={style.menu}>
                {
                    ["File", "Edit", "View", "Help"].map((t, key) => (
                        <p key={key}>{t}</p>
                    ))
                }
            </div>
            <div className={style.field}>
                <div className={style.textArea}>
                    <h3>
                        Blupaper: The Resurgence of the Original Viral Frog
                    </h3>
                    <br/>
                    <br/>
                    <p>1. Introduction:</p>
                    <br/>
                    <p>
                        Alright, it's me, Crazy Frog – or as the fancy peeps call me, 'BLU'. Before the
                        world was flooded with frog memes (I’m side-eyeing you, PEPE), I was the
                        OG. While I’ve been off exploring the stars, my legacy on Earth got a bit...
                        overshadowed. But hey, I ain’t no quitter. Let’s dive into this digital pond and
                        reclaim my crown as the numero uno froggy meme!
                    </p>
                    <br/>
                    <br/>
                    <p>2. Back in the Day:</p>
                    <br/>
                    <p>
                        Look, kiddos, there was a time when I ruled the digital roost. This was way
                        back when YouTube was a baby and people used MySpace without irony.
                        Then along came PEPE, and suddenly I felt like yesterday's meme. But fear
                    </p>
                    <br/>
                    <br/>
                    <p>1. Introduction:</p>
                    <br/>
                    <p>
                        Alright, it's me, Crazy Frog – or as the fancy peeps call me, 'BLU'. Before the
                        world was flooded with frog memes (I’m side-eyeing you, PEPE), I was the
                        OG. While I’ve been off exploring the stars, my legacy on Earth got a bit...
                        overshadowed. But hey, I ain’t no quitter. Let’s dive into this digital pond and
                        reclaim my crown as the numero uno froggy meme!
                    </p>
                    <br/>
                    <br/>
                    <p>2. Back in the Day:</p>
                    <br/>
                    <p>
                        Look, kiddos, there was a time when I ruled the digital roost. This was way
                        back when YouTube was a baby and people used MySpace without irony.
                        Then along came PEPE, and suddenly I felt like yesterday's meme. But fear
                    </p>
                </div>
                <div className={style.bottomSlider}>
                    <img src={notepad_left} alt=""/>
                    <div className={style.middle}/>
                    <img src={notepad_right} alt=""/>
                    <div className={style.corner}/>
                </div>
            </div>

            <div className={style.footer}>
                {svgIcons.resize_corner}
            </div>

        </div>
    )

}
