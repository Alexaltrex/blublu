import * as React from "react";
import style from "./Home.module.scss";
import {svgIcons} from "../../assets/svgIcons";
import smile from "../../assets/png/home/smile.png";
import mail from "../../assets/png/home/popup_mail.png";
import popup1_header_tablet from "../../assets/png/home/popup1_header_tablet.png";
import popup2_header_tablet from "../../assets/png/home/popup2_header_tablet.png";
import close_spam_popup1_tablet from "../../assets/png/home/close_spam_popup1_tablet.png";
import close_spam_popup2_tablet from "../../assets/png/home/close_spam_popup2_tablet.png";

import {FC} from "react";
import {clsx} from "clsx";

interface IPopup {
    targetClass: string
    className: string
}
//========= POPUP_1 + POPUP_3 =========//
const Popup: FC<IPopup> = ({ targetClass, className }) => {
    return (
        <div className={clsx(style.popup, targetClass, className)}>
            <div className={style.header}>
                <div className={style.popup1_header_mobile}>
                    {svgIcons.popup1_header_mobile}
                </div>

                <img src={popup1_header_tablet} alt="" className={style.popup1_header_tablet}/>

                <p className={style.title}>Message important</p>

                <div className={style.close_spam_popup1_mobile}>
                    {svgIcons.close_spam_popup1_mobile}
                </div>

                <img src={close_spam_popup1_tablet} alt="" className={style.close_spam_popup1_tablet}/>

            </div>

            <div className={style.content}>
                <p className={style.congradulatuions}>
                    congradulatuions!
                </p>

                <img src={smile} alt="" className={clsx(style.smile, "smile")}/>

                <div className={style.text}>
                    <p>this is not a joke!</p>
                    <p>you are</p>
                    <p>the 100.000<span>th</span> visitor!</p>
                </div>

                <button className={clsx(style.btn, "btn")}>
                    <p>Click here</p>
                </button>

            </div>
        </div>
    )
}

//========= POPUP_2 =========//
const Popup2 = () => {
    return (
        <div className={clsx(style.popup2, "popup_2")}>
            <div className={style.header}>
                <div className={style.popup2_header_mobile}>
                    {svgIcons.popup2_header_mobile}
                </div>
                <img src={popup2_header_tablet} alt="" className={style.popup2_header_tablet}/>
                <p className={style.title}>Error</p>
                <div className={style.close_spam_popup2_mobile}>
                    {svgIcons.close_spam_popup2_mobile}
                </div>
                <img src={close_spam_popup2_tablet} alt="" className={style.close_spam_popup2_tablet}/>
            </div>

            <div className={style.content}>
                  <div className={style.top}>
                      <img src={mail} alt="" className={style.mail}/>
                      <div className={style.text}>
                          <p>No more space on disk.</p>
                          <br/>
                          <p>Delete mail folder?</p>
                      </div>
                  </div>
                <div className={style.buttons}>

                </div>
            </div>
        </div>
    )
}

//========= SPAM =========//
export const Spam = () => {
    return (
        <div className={style.spam}>
            <Popup className={style.popup_1} targetClass="popup_1"/>
            <Popup2/>
            <Popup className={style.popup_3} targetClass="popup_3"/>

        </div>
    )
}
