import * as React from "react";
import style from "./Roadmap.module.scss";
import link_roadmap from "../../assets/png/home/link_roadmap.png";
import {Player} from "../x_common/Player/Player";
import vision from "../../assets/png/roadmap/vision.png";
import presale from "../../assets/png/roadmap/presale.png";
import community from "../../assets/png/roadmap/community.png";
import check_out from "../../assets/png/roadmap/check_out.png";
import marketing from "../../assets/png/roadmap/marketing.png";
import dots_tablet from "../../assets/png/whitepaper/dots_tablet.png";
import dots_desktop from "../../assets/png/home/dots_desktop.png";
import mobile_bottom_blur from "../../assets/png/whitepaper/mobile_bottom_blur.png";
import {useLayoutEffect, useRef} from "react";
import gsap from "gsap";
import {PaperClip} from "../x_common/PaperClip/PaperClip";
import {clsx} from "clsx";
import {Socials} from "../x_common/Socials/Socials";
// @ts-ignore
import video from "../../assets/webm/roadmap.webm";
import {Link} from "react-router-dom";

export const Roadmap = () => {
    const appRef = useRef<HTMLDivElement>(null!);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

        gsap.timeline({repeat: -1, yoyo: true})
            .to(".vision", { skewX: 3, skewY: 3, duration: 0.2 })
            .to(".vision", { skewX: 0, skewY: 0, duration: 0.2 })
            .to(".vision", { skewX: 6, skewY: 6, duration: 0.2 })
            .to(".vision", { skewX: 0, skewY: 0, duration: 0.2 })

            gsap.timeline({repeat: -1})
                .set(".presale", { skewX: -10 })
                .to(".presale", { skewX: 10, duration: 1 })
                .to(".presale", { skewX: -10, duration: 1 })

            gsap.timeline({repeat: -1})
                .to(".community", { x: 10, y: -10, duration: 1})
                .to(".community", { x: 0, y: -20, duration: 1})
                .to(".community", { x: -10, y: -10, duration: 1})
                .to(".community", { x: 0, y: 0, duration: 1})

            gsap.timeline({repeat: -1})
                .set(".check_out", { skewX: -10 })
                .to(".check_out", { skewX: 10, duration: 1 })
                .to(".check_out", { skewX: -10, duration: 1 })

            gsap.to(".marketing", {
                scaleX: 1.1,
                scaleY: 0.9,
                duration: 1,
                yoyo: true,
                repeat: -1
            })

            gsap.to(".socials", {
                scale: 0.9,
                duration: 2,
                repeat: -1,
                yoyo: true,
            })

        }, appRef);

        return () => ctx.revert();
    }, [])

    return (
        <div className={style.roadmap}
             ref={appRef}
        >
            <img src={link_roadmap} alt="" className={style.title}/>
            <img src={dots_tablet} alt="" className={style.dots_tablet}/>
            <img src={dots_desktop} alt="" className={style.dots_desktop}/>

            <div className={style.gradient_top}/>

            <video src={video}
                   autoPlay={true}
                   loop={true}
                   muted={true}
                   playsInline={true}
                   className={style.video}
            />
            <div className={style.gradient_bottom}/>
            <img src={mobile_bottom_blur} alt="" className={style.mobile_bottom_blur}/>

            <div className={style.mobileContent}>
                <Player className={style.player}/>
                <Vision/>
                <Presale/>
                <Community/>
                <CheckOut/>
                <Marketing/>
                <Socials className={style.socials}/>
                <PaperClip className={style.paperClip}/>
            </div>

            <div className={style.tabletContent}>
                <PaperClip className={style.paperClip}/>
                <Community/>
                <Vision/>
                <CheckOut/>
                <div className={style.row_top}>
                    <Marketing/>
                    <Player className={style.player}/>
                </div>
                <div className={style.row_bottom}>
                    <Socials className={style.socials}/>
                    <Presale/>
                </div>
            </div>

            <div className={style.desktopContent}>
                <div className={style.leftColumn}>
                    <PaperClip className={style.paperClip}/>
                    <Vision/>
                    <Presale/>
                </div>
                <div className={style.rightColumn}>
                    <Socials className={style.socials}/>
                    <CheckOut/>
                    <Marketing/>
                    <Player className={style.player}/>
                </div>
                <Community/>
            </div>
        </div>
    )
}

//========= VISION =========//
const Vision = () => {
    return (
        <img src={vision} alt="" className={clsx(style.vision, "vision")}/>
    )
}

//========= PRESALE =========//
const Presale = () => {
    return (
        <img src={presale} alt="" className={clsx(style.presale, "presale")}/>
    )
}

//========= COMMUNITY =========//
const Community = () => {
    return (
        <div className={clsx(style.community)}>
            <img src={community} alt="" className="community"/>
        </div>

    )
}

//========= CHECK OUT =========//
const CheckOut = () => {
    return (
        <Link to="/whitepaper" className={clsx(style.check_out, "check_out")}>
            <img src={check_out} alt=""/>
        </Link>
    )
}

//========= MARKETING =========//
const Marketing = () => {
    return (
        <img src={marketing} alt="" className={clsx(style.marketing, "marketing")}/>
    )
}
