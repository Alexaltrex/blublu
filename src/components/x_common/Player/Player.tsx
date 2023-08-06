import * as React from "react";
import style from "./Player.module.scss";
import {FC} from "react";
import {clsx} from "clsx";
import audio_back from "../../../assets/png/audio_back.png";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/useStore";
import btn_play from "../../../assets/png/audio_btn_play.png";
import btn_pause from "../../../assets/png/audio_btn_pause.png";

interface IPlayer {
    className?: string
    transparent?: boolean
}

export const Player: FC<IPlayer> = observer(({
                                        className,
                                        transparent = false,
}) => {
    const { audio, setAudio } = useStore();

    const onClick = () => {
        setAudio(!audio);
    }

    return (
        <div className={clsx(style.player, Boolean(className) && className)}
             onClick={onClick}
        >
            <img src={audio_back} alt="" className={style.audio_back}/>

            <button className={style.control}>
                {
                    !audio
                    ? <img src={btn_play} alt="" className={style.btn_play}/>
                    : <img src={btn_pause} alt="" className={style.btn_pause}/>
                }
            </button>

        </div>
    )
})
