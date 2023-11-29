import React, { useRef, useState, useEffect } from 'react';
import logo from "../img/logot.png";
import { NavLink } from 'react-router-dom';
import '../App.css'
// import "../css/Home.css"
import "../css/Aboud.css"
import css from "../img/css.png"
import html from "../img/html.png"
import js from "../img/js.png"
import react from "../img/react.png"
import about_img from "../img/counts-img.svg"

const Aboud = () => {
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
                    <header className='header__section'>
                        <div className="header__logo">

                            <img className='logo__logo log' src={logo} alt="loga" />
                        
                        </div>


                        <ul className='nav__ul'>
                            <li className='nav__li'>
                                <NavLink to={"/"} onClick={handleClick}>Home</NavLink>
                            </li>
                            <li className='nav__li'>
                                <NavLink to={"/aboud"} onClick={handleClick}>About</NavLink>
                            </li>
                            <li className='nav__li'>
                                <NavLink to={"/cantact"} onClick={handleClick}>Cantact</NavLink>
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
                                <li className="li" style={{ "--i": 4 }}><a href="/cantact">Cantact</a></li>
                            </ul>
                        </div>
                    </header>
                    <div className="aboud__main">
                        <div className="aboud__main__img__text">
                            <img className='aboud__main__image' src={about_img} alt="" />

                            <p className='aboud__man__iformation'>
                                Hello, my name is Diyorbek, I am a front-end programmer, I want to continue my education in the back-end, my main goal is to become a student of Chetel University, until I graduate, I want to work in Chetel Kata campaigns, among them, Amazon, Google, Apple, etc. My main goal is to become a strong programmer.
                            </p>
                        </div>
                    </div>

                    <div className="aboud__main__statistk">
                        <h2 className='aboud__main__ifo'>programming information</h2>
                        <div className="boxs">
                            <div className="box1">
                            <div className="box">
                                <img src={html} alt="Html" />
                                <div className="box__info">
                                    <p>

                                        The HTML language was developed around 1991-1992 by Tim Berners-Lee, a British specialist working at the European Center for Nuclear Research...
                                    </p>

                                </div>
                                <a className='aboud__main__link' href="/html">
                                    complete information
                                </a>
                            </div>
                            <div className="box">
                                <img src={css} alt="Html" />
                                <div className="box__info">
                                    <p>

                                        The full form of CSS was created in 1997 and is supported and made available by the WWW Consortium. Initially, CSS codes were understood by Netscape...
                                    </p>

                                </div>
                                <a className='aboud__main__link' href="/css">
                                    complete information
                                </a>
                            </div>
                            </div>

                
                            <div className="box2">
                            <div className="box">
                                <img src={js} alt="Html" />
                                <div className="box__info">
                                    <p>

                                        JavaScript (pronounced: /ˈdʒɑːvəskrɪpt/; abbreviated: JS /ˈdʒeɪ.ɛs./) is a high-level programming language. It was created in 1995 by American ...
                                    </p>

                                </div>
                                <a className='aboud__main__link' href="/js">
                                    complete information
                                </a>
                            </div>
                            <div className="box">
                                <img src={react} alt="Html" />
                                <div className="box__info">
                                    <p>

                                        React.js is a popular JavaScript library for creating user interfaces. Developed by Facebook in 2011, React.js allows developers to create reusable UI...
                                    </p>

                                </div>
                                <a className='aboud__main__link' href="/treact">
                                    complete information
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </React.Fragment>
    );
}

export default Aboud
