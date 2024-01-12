'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import gsap from 'gsap';
import {Link} from 'react-scroll'
import { useRouter } from 'next/navigation';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';
import { AiOutlineClose, AiOutlineMenu, AiOutlineQrcode } from "react-icons/ai";

export default function Index() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);
    const router = useRouter();

    const [nav, setNav] = useState(false);
  // const [color, setColor] = useState('#ffffff');
  // const [textColor, setTextColor] = useState('#000000');

  const handleNav = () => {
    setNav(!nav);
  };

    useEffect( () => {
      if(isActive) setIsActive(false)
    }, [pathname])

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight / 3,
                onLeave: () => {gsap.to(button.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
                onEnterBack: () => {gsap.to(button.current, {scale: 0, duration: 0.25, ease: "power1.out"},setIsActive(false))}
            }
        })
    }, [])

    return (
        <>
        <div ref={header} className={styles.header}>
            <div className={styles.logo}>
                <p className={styles.copyright}><AiOutlineQrcode /></p>
                {/* <div className={styles.name}>
                    <p className={styles.codeBy}>HI</p>
                    <p className={styles.dennis}>QR    Market</p>
                    <p className={styles.snellenberg}>STORE</p>
                </div> */}
            </div>
            <div className={styles.nav}>
                <div className='hidden sm:flex'>
                <Magnetic>
                    <div className={styles.el} >
                    <Link activeClass="active" to="title" spy={true} smooth={true} offset={50} duration={500} >About Event</Link>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                
                <Magnetic>
                    <div className={styles.el}>
                        <a href={`https://acmmanoa.org/`}>Registeration</a>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>

                <Magnetic>
                    <div className={styles.el}>
                    <Link activeClass="active" to="partner" spy={true} smooth={true} offset={50} duration={500} >Partner</Link>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el}>
                        <a>Contact</a>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                </div>

                <div onClick={handleNav} className='block sm:hidden z-10 ml-3'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `#ffffff` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `#fffff` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
                <li onClick={handleNav} className='p-4 text-2xl'>
                <Magnetic>
                    <div className={styles.el} >
                        <a href='https://acmmanoa.org/'>About Event</a>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                
                <Magnetic>
                    <div className={styles.el}>
                        <a href={`https://acmmanoa.org/`}>Registeration</a>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>

                <Magnetic>
                    <div className={styles.el}>
                        <a href={`https://acmmanoa.org/`}>Partner</a>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el}>
                        <a>Contact</a>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                </li>
          </ul>
        </div>
            </div>
        </div>
        <div ref={button} className={styles.headerButtonContainer}>
            <Rounded onClick={() => {setIsActive(!isActive)}} className={`${styles.button}`}>
                <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
            </Rounded>
        </div>
        <AnimatePresence mode="wait">
            {isActive && <Nav />}
        </AnimatePresence>
        </>
    )
}
