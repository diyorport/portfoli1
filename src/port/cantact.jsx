import React, { useRef, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import "../css/portfolio.css"
import '../css/cantact.css'
import logo from "../img/logot.png";
import cantact from '../img/cantact.svg'
import tele from '../img/tele.png'
import email from '../img/email.png'
import insta from '../img/insta.webp'
import face from '../img/face.png'
import "../App.css"

const Cantact = () => {

    let marker = useRef()

    function Indicator(e) {
        console.log(e.offsetWidth)
        marker.current.style.left = e.offsetLeft + 'px';
        marker.current.style.width = e.offsetWidth + 'px';
    }
    const handleClick = (e) => {
        Indicator(e.target)
    }

    const [menu, setMenu] = useState(false)
    const handleMenu = () => {
        setMenu(!menu)
    }
    const [load, setLoad] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoad(false)
        }, 700)
    })
    return (
        <React.Fragment>
            {load ? (
                <div className="loading-box">
                    <span className="loader"></span>

                </div>
            ) : (
                <div className="container">
                    {/* header__section */}
                    <header className='header__section section__header'>
                        <div className="header__logo">

                            <img className='logo__logo' src={logo} alt="loga" />
                        </div>


                        <ul className='nav__ul'>
                            <li className='nav__li'>
                                <NavLink to={"/"} onClick={handleClick}>Home</NavLink>
                            </li>
                            <li className='nav__li'>
                                <NavLink to={"/aboud"} onClick={handleClick}>About</NavLink>
                            </li>
                            <li className='nav__li'>
                                <NavLink to={"#"} onClick={handleClick}>Cantact</NavLink>
                            </li>
                            <div id="marker" ref={marker} style={{ left: "calc(50% - 20px)" }}>

                            </div>
                        </ul>

                        <div className={menu ? "navigation active" : "navigation"}>
                            <div className={menu ? "toggle active" : "toggle"} onClick={handleMenu}>
                                <span></span>
                            </div>

                            <ul className='UL__UL'>
                                <li className="li" style={{ "--i": 0 }}><a href="/">Home</a></li>
                                <li className="li" style={{ "--i": 1 }}><a href="/aboud">About</a></li>
                                <li className="li" style={{ "--i": 4 }}><a href="#">Cantact</a></li>
                            </ul>
                        </div>
                    </header>
                    <div className="cantact__section">
                        <div className="cantact__section__top">
                            <div className="cantact__section__top__name">
                                <h2 className='cantact__section__bottom__man'>
                                    my cantact...
                                </h2>
                            </div>
                            <div className="cantact__section__top__img">
                                <img className='cantact__section__top__img' src={cantact} alt="" />
                            </div>
                        </div>
                        <div className="cantact__section__bottom">
                            <div className="cantact__section__bottom__icons">
                                <a className='cantact__section__bottom__icon_a' href="#">
                                    <img src={tele} alt="telegram" />
                                </a>
                                <a className='cantact__section__bottom__icon_a' href="#">
                                    <img src={insta} alt="telegram" />
                                </a>
                                <a className='cantact__section__bottom__icon_a' href="#">
                                    <img src={face} alt="telegram" />
                                </a>
                                <a className='cantact__section__bottom__icon_a' href="#">
                                    <img src={email} alt="telegram" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </React.Fragment>
    );
}

export default Cantact
