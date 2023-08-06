import * as React from "react";
import style from "./Home.module.scss";
import {FC, useEffect, useLayoutEffect, useRef, useState} from "react";
import {clsx} from "clsx";
import {svgIcons} from "../../assets/svgIcons";
import alert from "../../assets/png/home/alert.png";
import gsap from "gsap";
import watchVideo_header_tablet from "../../assets/png/home/watchVideo_header_tablet.png";
import close from "../../assets/png/home/close_spam_popup1_tablet.png";

export const WatchVideo: FC<{onClick: () => void}> = ({ onClick }) => {
    return (
       <div className={style.watchVideo}>
           {
               [0, 1, 2, 3].map(key => (
                   <WatchVideoItem key={key}
                                   className={style[`watchVideoItem_${key}`]}
                                   onClick={onClick}
                   />
               ))
           }
       </div>
    )
}

//========= WATCH VIDEO ITEM =========//
interface IWatchVideoItem {
    className: string
    onClick: () => void
}
export const WatchVideoItem: FC<IWatchVideoItem> = ({className, onClick}) => {
    const ref = useRef<HTMLDivElement>(null!);
    const [coord, setCoord] = useState({x: 0, y: 0});

    const random = gsap.utils.random(-10, 10, 0, true)

    useEffect(() => {
        const tm = setInterval(() => {
            setCoord({
                x: random(),
                y: random(),
            })
        }, 1000)
        return () => clearInterval(tm);
    }, [])

    useLayoutEffect(() => {
        gsap.to(ref.current, {
            x: coord.x,
            y: coord.y,
            duration: 1,
        })
    }, [coord])

    return (
        <div className={clsx(style.watchVideoItem, className)}
             ref={ref}
        >
            <div className={style.header}>
                <div className={style.watchVideo_header_mobile}>
                    {svgIcons.watchVideo_header_mobile}
                </div>
                <img src={watchVideo_header_tablet} alt="" className={style.watchVideo_header_tablet}/>
                <p className={style.title_mobile}>Blu_goes_crazy_10...</p>
                <p className={style.title_tablet}>Blu_goes_crazy_1000x_Project_video.mov</p>
                <img src={close} alt=""  className={style.close}/>
                {/*<div className={style.close}>*/}
                {/*    {svgIcons.close_form}*/}
                {/*</div>*/}

            </div>

            <div className={style.content}>
                <div className={style.top}>
                    <img src={alert} alt="" className={style.alert}/>
                    <p className={style.text}>
                        Wold you like to watch BluBlu’s X-rated video?
                    </p>
                </div>
                <div className={style.buttons}>
                    {
                        [
                            {label: "no i suck pepes pepe"},
                            {label: "lotion + tissue is ready"}
                            ].map(({label}, key) => (
                                <button className={style.buttons_btn}
                                        key={key}
                                        onClick={onClick}
                                >
                                    <p>{label}</p>
                                </button>
                        ))
                    }
                </div>
            </div>




        </div>
    )
}



