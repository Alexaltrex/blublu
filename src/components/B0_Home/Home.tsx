import * as React from 'react';
import style from './Home.module.scss';
import { FC, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { BuyNow } from './BuyNow';
import { Links } from './Links';
import { FormCustom } from './FormCustom';
import { Spam } from './Spam';
import { WatchVideo } from './WatchVideo';
import { Player } from '../x_common/Player/Player';
import dots_mobile from '../../assets/png/home/dots_mobile.png';
import dots_tablet from '../../assets/png/home/dots_tablet.png';
import dots_desktop from '../../assets/png/home/dots_desktop.png';
import pepe from '../../assets/gif/home.gif';
import { Socials } from '../x_common/Socials/Socials';
import Modal from '@mui/material/Modal';
import player from '../../assets/png/player/player.png';
import close from '../../assets/png/player/close.png';
import play from '../../assets/png/player/play.png';
// @ts-ignore
import example from '../../assets/webm/example.webm';
import { svgIcons } from '../../assets/svgIcons';
import { clsx } from 'clsx';
import pepe_mobile from '../../assets/png/home/pepe_mobile.png';
import pepe_tablet from '../../assets/png/home/pepe_tablet.png';
import pepe_desktop from '../../assets/png/home/pepe_desktop.png';
import { useMediaQuery } from '@mui/material';

export const Home = () => {
  const appRef = useRef<HTMLDivElement>(null!);
  const isMobile = useMediaQuery('(max-width:1919px)');

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ repeat: -1 })
        .set('.buyNow', { scaleX: 0.75, scaleY: 1 })
        .to('.buyNow', { scaleX: 1, scaleY: 0.75, duration: 2 })
        .to('.buyNow', { scaleX: 0.75, scaleY: 1, duration: 2 });

      gsap.fromTo(
        '.link0',
        {
          rotate: -15,
        },
        {
          rotate: 15,
          repeat: -1,
          duration: 2,
          yoyo: true,
        }
      );

      gsap.fromTo(
        '.link1',
        {
          rotate: 15,
        },
        {
          rotate: -15,
          repeat: -1,
          duration: 2,
          yoyo: true,
        }
      );

      gsap.fromTo(
        '.link2',
        {
          rotate: 15,
        },
        {
          rotate: -15,
          repeat: -1,
          duration: 2,
          yoyo: true,
          delay: 0.5,
        }
      );

      gsap.to('.form', {
        scale: isMobile ? 1.3 : 1.05,
        repeat: -1,
        duration: 2,
        yoyo: true,
      });

      gsap
        .timeline({ repeat: -1 })
        .set('.popup_1', { x: -2, y: -2, duration: 0.2 })
        .to('.popup_1', { x: 2, y: -2, duration: 0.2 })
        .to('.popup_1', { x: 2, y: 2, duration: 0.2 })
        .to('.popup_1', { x: -2, y: 2, duration: 0.2 })
        .to('.popup_1', { x: -2, y: -2, duration: 0.2 });

      gsap
        .timeline({ repeat: -1, delay: 0.4 })
        .set('.popup_3', { x: -2, y: -2, duration: 0.2 })
        .to('.popup_3', { x: 2, y: -2, duration: 0.2 })
        .to('.popup_3', { x: 2, y: 2, duration: 0.2 })
        .to('.popup_3', { x: -2, y: 2, duration: 0.2 })
        .to('.popup_3', { x: -2, y: -2, duration: 0.2 });

      gsap
        .timeline({ repeat: -1 })
        .set('.popup_2', { scaleX: 0.9, scaleY: 1 })
        .to('.popup_2', { scaleX: 1, scaleY: 0.9, duration: 0.1 })
        .to('.popup_2', { scaleX: 0.9, scaleY: 1, duration: 0.1 });

      gsap
        .timeline({ repeat: -1 })
        .to('.smile', { duration: 0.1 })
        .set('.smile', { opacity: 0 })
        .to('.smile', { duration: 0.1 })
        .set('.smile', { opacity: 1 });

      gsap
        .timeline({ repeat: -1 })
        .to('.btn', { duration: 0.1 })
        .set('.btn', { opacity: 0 })
        .to('.btn', { duration: 0.1 })
        .set('.btn', { opacity: 1 });

      gsap.to('.socials', {
        scale: isMobile ? 0.9 : 1.1,
        duration: 2,
        repeat: -1,
        yoyo: true,
      });
    }, appRef);
    return () => ctx.revert();
  }, []);

  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
    setPlaying(false);
  };
  const onOpen = () => {
    setOpen(true);
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  const videoRef = useRef<HTMLVideoElement>(null!);
  const [playing, setPlaying] = useState(false);
  const onPlay = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className={style.home} ref={appRef}>
      <Modal open={open} onClose={onClose} className={style.modal} keepMounted>
        <div className={style.modalContent}>
          <img src={player} alt='' className={style.player_window} />
          <button className={style.close} onClick={onClose}>
            <img src={close} alt='' />
          </button>

          <div className={style.videoWrapper}>
            <video
              src={example}
              ref={videoRef}
              playsInline={true}
              loop={true}
              onClick={onPlay}
            />
          </div>

          <button
            className={clsx({
              [style.play]: true,
              [style.play_pause]: playing,
              [style.play_play]: !playing,
            })}
            onClick={onPlay}
          >
            <img src={play} alt='' />
            {playing ? svgIcons.video_pause : svgIcons.video_play}
          </button>
        </div>
      </Modal>

      <img src={dots_mobile} alt='' className={style.dots_mobile} />
      <img src={dots_tablet} alt='' className={style.dots_tablet} />
      <img src={dots_desktop} alt='' className={style.dots_desktop} />
      <div className={style.gradient_mobile} />
      {/*<img src={pepe} alt="" className={style.pepe}/>*/}
      <img src={pepe_mobile} alt='' className={style.pepe_mobile} />
      <img src={pepe_tablet} alt='' className={style.pepe_tablet} />
      <img src={pepe_desktop} alt='' className={style.pepe_desktop} />

      <div className={style.mobileContent}>
        <BuyNow />
        <Links />
        <FormCustom />
        <Spam />
        <WatchVideo onClick={onOpen} />
        <Socials className={style.socials} />
        <Player className={style.player} />
      </div>

      <div className={style.tabletContent}>
        <Links />
        <WatchVideo onClick={onOpen} />
        <div className={style.tabletContent_row1}>
          <FormCustom />
          <BuyNow />
        </div>
        <Player className={style.player} />
        <div className={style.tabletContent_row2}>
          <Spam />
          <Socials className={style.socials} />
        </div>
      </div>

      <div className={style.desktopContent}>
        <Links />
        <div className={style.rightPart}>
          <div className={style.topRow}>
            <BuyNow />
            <div className={style.topRow_right}>
              <Socials className={style.socials} />
              <FormCustom />
            </div>
          </div>

          <div className={style.bottomWrapper}>
            <WatchVideo onClick={onOpen} />

            <div className={style.bottomRow}>
              <Player className={style.player} />
              <Spam />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
