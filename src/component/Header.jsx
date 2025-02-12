import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc';
import { RxHamburgerMenu } from 'react-icons/rx';
import '../styles/styles.css';
export default function Header({ home }) {
  const [scrollY, setScrollY] = React.useState(0);
  const [styles, setStyle] = React.useState({});
  const [picStyle, setPicStyle] = React.useState({});
  const [dd_activate, setdd] = React.useState(0);
  const [dd_activate2, setdd2] = React.useState(0);
  const [isClicked, setIsClicked] = React.useState(false);
  // const [scrollOrNot, setScrollOrNot] = React.useState(true);
  const [hamburgerPosition, setHamburgerPosition] = React.useState({});
  const [isNarrowScreen, setNarrowScreen] = React.useState(
    window.innerWidth < 600
  );
  // const handleScrollOrNot = (e) => {
  //   if (scrollOrNot) {
  //     e.preventDefault();
  //   }
  // };
  const handleResize = () => {
    setNarrowScreen(window.innerWidth < 800);
  };
  const handleHamburger = () => {
    setIsClicked(!isClicked);
    if (!isClicked) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    // setScrollOrNot(!scrollOrNot);
  };
  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (isClicked) {
        console.log(1);
        window.scrollTo({
          top: window.scrollY,
        });
        document.body.style.overflowY = 'hidden';
      }
    };
    // window.addEventListener('scroll', handleScrollOrNot);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      // window.removeEventListener('scroll', handleScrollOrNot);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isClicked]);
  React.useEffect(() => {
    if (home) {
      if (scrollY > 10) {
        setStyle((prevStyle) => ({
          ...prevStyle,
          background: '#30363d',
          // 'box-shadow': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
          color: 'black',
          height: '10rem',
          // Add other attributes here if needed
        }));
        setPicStyle((prevStyle) => ({
          ...prevStyle,
          height: '90%',
        }));
        setHamburgerPosition((prevStyle) => ({
          ...prevStyle,
          top: '2rem',
        }));
      } else {
        setStyle((prevStyle) => ({
          ...prevStyle,
          background: 'transparent',
          height: '13rem',
          // Add other attributes here if needed
        }));
        setPicStyle((prevStyle) => ({
          ...prevStyle,
          height: '100%',
        }));
        setHamburgerPosition((prevStyle) => ({
          ...prevStyle,
          top: '3rem',
        }));
      }
    } else {
      setStyle((prevStyle) => ({
        ...prevStyle,
        background: '#30363d',
        // 'box-shadow': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        color: 'black',
        height: '10rem',
        // Add other attributes here if needed
      }));
      setPicStyle((prevStyle) => ({
        ...prevStyle,
        height: '90%',
      }));
      setHamburgerPosition((prevStyle) => ({
        ...prevStyle,
        top: '2rem',
      }));
    }
  }, [scrollY]);
  const dropdown = () => {
    if (dd_activate2) {
      setdd2(false);
    }

    setdd(!dd_activate);
  };
  const dropdown2 = () => {
    if (dd_activate) {
      setdd(false);
    }
    setdd2(!dd_activate2);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <header className="header" style={styles}>
      <section className="header__image-wrapper">
        <Link to="/home" onClick={scrollToTop} className="logo-wrapper">
          <img
            src="/logo (2).png"
            alt="logo"
            className="logo"
            style={picStyle}
          />
        </Link>
      </section>
      <section
        onClick={handleHamburger}
        className={`hamburger ${isClicked ? 'is-active' : ''} ${
          isNarrowScreen ? 'show' : 'hide'
        }`}
        style={hamburgerPosition}
      >
        <section className="lines"></section>
        <section className="lines"></section>
        <section className="lines"></section>
      </section>
      {/* <section className="hamburger-container" id="hamburger-1"></section> */}
      {/* <RxHamburgerMenu className="hamburger" /> */}
      <ul
        className={`header__anchor-list ${isNarrowScreen ? 'hide' : 'show'} ${
          isClicked ? 'hamburger-moment' : ''
        }`}
      >
        <li>
          <Link to="/home" className="anchor-el home" onClick={scrollToTop}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="anchor-el" onClick={scrollToTop}>
            About
          </Link>
        </li>
        <li>
          <section className={`anchor-el`} onClick={dropdown}>
            Product
            {dd_activate ? (
              <>
                <VscTriangleUp className="triangle-icon up" />
                <section
                  className={`dropdown ${
                    dd_activate ? 'dropdown-subtitle-space' : ''
                  }`}
                >
                  <Link
                    to="/csnri"
                    className="dropdown-el"
                    onClick={scrollToTop}
                  >
                    CSNRI
                  </Link>
                  <Link
                    to="/premierecoating"
                    className="dropdown-el"
                    onClick={scrollToTop}
                  >
                    Premiere Coating
                  </Link>
                  <Link
                    to="/magnaseal"
                    className="dropdown-el"
                    onClick={scrollToTop}
                  >
                    Magnaseal Leak Patch
                  </Link>
                  <Link
                    to="/allmet"
                    className="dropdown-el"
                    onClick={scrollToTop}
                  >
                    Allmet Safety Tools
                  </Link>
                  <Link
                    to="/forgebonding"
                    className="dropdown-el"
                    onClick={scrollToTop}
                  >
                    Forge Bonding
                  </Link>
                  <Link
                    to="/resimac"
                    className="dropdown-el"
                    onClick={scrollToTop}
                  >
                    Resimac
                  </Link>
                </section>
              </>
            ) : (
              <VscTriangleDown className="triangle-icon" />
            )}
          </section>
        </li>
        <li>
          <section className={`anchor-el`} onClick={dropdown2}>
            Service
            {dd_activate2 ? (
              <>
                <VscTriangleUp className="triangle-icon up" />
                <section
                  className={`dropdown ${
                    dd_activate2 ? 'dropdown-subtitle-space' : ''
                  }`}
                >
                  <Link
                    to="/corrosion_prevention"
                    className="dropdown-el"
                    onClick={scrollToTop}
                  >
                    Corrosion Prevention
                  </Link>
                  <Link
                    to="/pressure_pipe_reinforcement"
                    className="dropdown-el"
                    onClick={scrollToTop}
                  >
                    Pressure Pipe Reinforcement
                  </Link>
                  <Link
                    to="/vessel_and_tank_reinforcement"
                    className="dropdown-el"
                    onClick={scrollToTop}
                  >
                    Vessel and Tank Reinforcement
                  </Link>
                  <Link
                    to="/cold_work_method"
                    className="dropdown-el"
                    onClick={scrollToTop}
                  >
                    Cold Work Method
                  </Link>
                  <Link
                    to="/downtime_free_solutions"
                    className="dropdown-el"
                    onClick={scrollToTop}
                  >
                    Downtime-Free Solutions
                  </Link>
                </section>
              </>
            ) : (
              <VscTriangleDown className="triangle-icon" />
            )}
          </section>
        </li>

        {/* <li>
          <a className="anchor-el">Services</a>
        </li> */}

        <li className="button-contact">
          <Link to="/contact" className="contact-button" onClick={scrollToTop}>
            Contact Us
          </Link>
        </li>
      </ul>
    </header>
  );
}

Header.propTypes = {
  home: PropTypes.bool.isRequired,
};
