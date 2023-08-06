import React, {useEffect, useRef} from 'react';
import style from "./App.module.scss";
import {Header} from "../A1_Header/Header";
import {Logo} from "../A2_Logo/Logo";
import {Route, Routes } from 'react-router-dom';
import {Home} from "../B0_Home/Home";
import { Whitepaper } from '../B1_Whitepaper/Whitepaper';
import {Tokenomics} from "../B2_Tokenomics/Tokenomics";
import {Footer} from "../A3_Footer/Footer";
import {Roadmap} from "../B3_Roadmap/Roadmap";
// @ts-ignore
import song from "../../assets/mp3/song.mp3";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";

export const App = observer(() => {
    const audioRef = useRef<HTMLAudioElement>(null!);

    const {audio} = useStore();

    useEffect(() => {
        if (audio) {
            //audioRef.current.play();
            console.log("play")
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [audio])

    return (
        <div className={style.app}>


            <audio src={song}
                   ref={audioRef}
                   controls={true}
                   className={style.audio}
            />

            <Header/>
            <Logo/>
            <main>
                <Routes>
                    {
                        [
                            { path: "/", element: <Home/> },
                            { path: "/roadmap", element: <Roadmap/> },
                            { path: "/whitepaper", element: <Whitepaper/> },
                            { path: "/tokenomics", element: <Tokenomics/> },
                        ].map(({path, element}, key) => (
                            <Route key={key} path={path} element={element} />
                        ))
                    }
                </Routes>
            </main>
            <Footer/>
        </div>
    );
})

