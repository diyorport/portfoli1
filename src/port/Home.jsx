import React, {useRef, useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../img/logot.png";
import left from "../img/hero-img.png"
import man from "../img/images.jpg"
import "../App.css"

const Home = () => {
  let marker = useRef()

  function Indicator(e) {
    console.log(e.offsetWidth)
    marker.current.style.left = e.offsetLeft + 'px';
    marker.current.style.width = e.offsetWidth + 'px';    
  }
  const handleClick = (e) =>{
    Indicator(e.target)
  }

  const [menu, setMenu] = useState(false)
  const handleMenu = () =>{
    setMenu(!menu)
  }
  const [load, setLoad] = useState(true)
  useEffect (() => {
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
              <NavLink to={"/cantact"} onClick={handleClick}>Cantact</NavLink>
            </li>
            <div id="marker" ref={marker} style={{left: "calc(50% - 20px)"}}>

            </div>
          </ul>

          <div className={menu ?"navigation active":"navigation"}>
          <div className={menu ?"toggle active" : "toggle"} onClick={handleMenu}>
              <span></span>
          </div>

    <ul className='UL__UL'>
        <li className="li" style={{"--i":0}}><a href="/">Home</a></li>
        <li className="li" style={{"--i":1}}><a href="/aboud">About</a></li>
        <li className="li" style={{"--i":4}}><a href="/cantact">Cantact</a></li>
    </ul>
   </div>
          </header>


        {/* main__section */}
        <img className='image' src={left} alt="" />
        <section className="main__section">
         
          <div className="manin__section__left">
            <span className='main__secrion__left__greeting'>
              Hello everybody
            </span>
            <h1 className='main__section__infoname'>
              I am <br /> Solijonov Diyorbek
            </h1>
            <img src="" alt="" />
            <a className='button' href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              second
            </a>
          </div>

          <div className="main__section__right">
              <img className='main__section__right__images animated' src={left} alt="" />
          </div>
        </section>
      </div>
      )}


    </React.Fragment>
  );
}

export default Home
