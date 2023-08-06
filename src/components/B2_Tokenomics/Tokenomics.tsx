import * as React from "react";
import style from "./Tokenomics.module.scss";
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {clsx} from "clsx";
import gsap from "gsap";
import {Player} from "../x_common/Player/Player";
import {PaperClip} from "../x_common/PaperClip/PaperClip";
import link_tokenomics from "../../assets/png/home/link_tokenomics.png";
import presale60 from "../../assets/png/tokenomics/presale60.png";
import liquidity from "../../assets/png/tokenomics/liquidity.png";
import cd from "../../assets/png/tokenomics/cd.png";
import girl from "../../assets/png/tokenomics/girl.png";
import staking from "../../assets/png/tokenomics/staking.png";
import totalSupply from "../../assets/png/tokenomics/totalSupply.png";
import virus from "../../assets/gif/virus.gif";
import mathNerd from "../../assets/gif/mathNerd.gif";
import buySellTax from "../../assets/png/tokenomics/buySellTax.png";
import port from "../../assets/png/tokenomics/port.png";
import space from "../../assets/png/tokenomics/space.png";
import mobile_bottom_blur from "../../assets/png/whitepaper/mobile_bottom_blur.png";
import dots_tablet from "../../assets/png/whitepaper/dots_tablet.png";
import dots_desktop from "../../assets/png/home/dots_desktop.png";
import frog from "../../assets/png/tokenomics/frog.png";


export const Tokenomics = () => {
    const appRef = useRef<HTMLDivElement>(null!);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            gsap.timeline({repeat: -1})
                .to(".presale60", {rotate: -10, x: 10, y: -10, scaleX: 1.1, duration: 1})
                .to(".presale60", {rotate: 0, x: 0, y: 0, scaleX: 1.0, duration: 1})
                .to(".presale60", {rotate: 10, x: -10, y: -10, scaleX: 1.1, duration: 1})
                .to(".presale60", {rotate: 0, x: 0, y: 0, scaleX: 1.0, duration: 1})

            gsap.fromTo(".liquidity", {skewX: -10}, {
                skewX: 10, duration: 1, repeat: -1, yoyo: true
            })

            gsap.to(".disc", {
                rotation: 360, duration: 2, repeat: -1, ease: "none"
            })

            gsap.fromTo(".girl1", { scaleX: 0.9, scaleY: 1.1}, {
                scaleX: 1.1, scaleY: 0.9, duration: 2, repeat: -1, yoyo: true
            })

            gsap.fromTo(".girl2", { scaleX: 1.1, scaleY: 0.9}, {
                scaleX: 0.9, scaleY: 1.1, duration: 2, repeat: -1, yoyo: true
            })

            gsap.fromTo(".staking", {rotate: -10}, {
                rotate: 30, duration: 2, repeat: -1, yoyo: true
            })

            gsap.to(".totalSupply", {scale: 0.9, duration: 2, repeat: -1, yoyo: true})

            gsap.timeline({repeat: -1})
                .to(".buySellTax", {rotate: 10, scale: 1.1, duration: 1})
                .to(".buySellTax", {rotate: 0, scale: 1.0, duration: 1})
                .to(".buySellTax", {rotate: -10, scale: 1.1, duration: 1})
                .to(".buySellTax", {rotate: 0, scale: 1.0, duration: 1})

            // gsap.timeline({repeat: -1})
            //     .to(".portal_frog", { x: 30, y: -10, duration: 1})
            //     .to(".portal_frog", { x: 0, y: 0, duration: 1})
            //     // .to(".portal_frog", { x: 0, y: -20, duration: 1})
            //     // .to(".portal_frog", { x: -30, y: -10, duration: 1})
            //     // .to(".portal_frog", { x: 0, y: 0, duration: 1})

        }, appRef);

        return () => ctx.revert();
    }, [])

    const ref = useRef<HTMLImageElement>(null!);
    const [coord, setCoord] = useState({x: 0, y: 0});
    const random = gsap.utils.random(-10, 10, 0, true)
    useEffect(() => {
        const tm = setInterval(() => {
            setCoord({
                x: random(),
                y: random(),
            })
        }, 1100)
        return () => clearInterval(tm);
    }, [])

    useLayoutEffect(() => {
        gsap.to(ref.current, {
            xPercent: coord.x,
            yPercent: coord.y,
            duration: 1.1,
        })
    }, [coord])

    return (
        <div className={style.tokenomics}
             ref={appRef}
        >
            <img src={link_tokenomics} alt="" className={style.title}/>
            <img src={space} alt="" className={style.space}/>
            <img src={port} alt="" className={style.port}/>

            <div className={style.gradient_port_bottom}/>

            <div className={style.gradient_space_top}/>
            <div className={style.gradient_space_bottom}/>
            <img src={mobile_bottom_blur} alt="" className={style.mobile_bottom_blur}/>

            <img src={dots_tablet} alt="" className={style.dots_tablet}/>
            <img src={dots_desktop} alt="" className={style.dots_desktop}/>

            <div className={style.portal_frog}

            >
                <img src={frog} alt="" className="portal_frog"
                     ref={ref}
                />
            </div>



            <div className={style.mobileContent}>
                <Player className={style.player}/>
                <Presale60/>
                <Liquidity/>
                <CD/>
                <Staking/>
                <TotalSupply/>
                <Virus/>
                <BuySellTax/>
                <MathNerd/>
                <PaperClip className={style.paperClip}/>
            </div>

            <div className={style.tabletContent}>
                <div className={style.leftColumn}>
                    <PaperClip className={style.paperClip}/>
                    <Presale60/>
                    <Liquidity/>
                    <Staking/>
                    <BuySellTax/>
                    <Virus/>
                </div>
                <div className={style.rightColumn}>
                    <TotalSupply/>
                    <MathNerd/>
                    <Player className={style.player}/>
                    <CD/>
                </div>
            </div>

            <div className={style.desktopContent}>

                <div className={style.desktopContent_leftColumns}>
                    <div className={style.leftColumns_first}>
                        <Presale60/>
                        <Player className={style.player}/>
                    </div>
                    <div className={style.leftColumns_second}>
                        <PaperClip className={style.paperClip}/>
                        <Liquidity/>
                        <Staking/>
                        <Virus/>
                    </div>
                </div>

                <div className={style.desktopContent_rightColumns}>
                    <TotalSupply/>
                    <MathNerd/>
                    <CD/>
                    <BuySellTax/>
                </div>


            </div>


        </div>
    )
}

//========= PRESALE 60 =========//
const Presale60 = () => {
    return (
        <img src={presale60} alt="" className={clsx(style.presale60, "presale60")}/>
    )
}

//========= LIQUIDITY =========//
const Liquidity = () => {
    return (
        <img src={liquidity} alt="" className={clsx(style.liquidity, "liquidity")}/>
    )
}

//========= CD =========//
const CD = () => {
    return (
        <div className={style.cd}>
            <img src={cd} alt="" className={clsx(style.disc, "disc")}/>
            <div className={style.girlWrapper1}>
                <img src={girl} alt="" className={clsx(style.girl1, "girl1")}/>
            </div>
            <div className={style.girlWrapper2}>
                <img src={girl} alt="" className={clsx(style.girl2, "girl2")}/>
            </div>
        </div>
    )
}

//========= STAKING =========//
const Staking = () => {
    return (
        <img src={staking} alt="" className={clsx(style.staking, "staking")}/>
    )
}

//========= TOTAL SUPPLY =========//
const TotalSupply = () => {
    return (
        <img src={totalSupply} alt="" className={clsx(style.totalSupply, "totalSupply")}/>
    )
}

//========= VIRUS =========//
const Virus = () => {
    return (
        <img src={virus} alt="" className={clsx(style.virus, "virus")}/>
    )
}

//========= BUY SELL TAX =========//
const BuySellTax = () => {
    return (
        <img src={buySellTax} alt="" className={clsx(style.buySellTax, "buySellTax")}/>
    )
}

//========= MATH NERD =========//
const MathNerd = () => {
    return (
        <img src={mathNerd} alt="" className={style.mathNerd}/>
    )
}
