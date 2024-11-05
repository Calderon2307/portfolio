import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '@components/NavBar/NavBar';
import style from '@components/Header/Header.module.css';
import langImg from '@assets/Web_Icons/language.png';
import hamburgerMenu from '@assets/Web_Icons/menu.png';
import closeIcon from '@assets/Web_Icons/close.png';
import {
  LanguageContext,
  UpdateLanguageContext,
} from '@context/LanguageContext.js';

const Header = ({ callAtention = false }) => {
  const lang = useContext(LanguageContext);
  const updateLang = useContext(UpdateLanguageContext);

  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      if (currentWidth !== windowWidth) {
        setWindowWidth(currentWidth);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`${style.header}`}>
      <h1
        className={`${style.title} ${callAtention ? style.beat : ''}`}
        title={lang === 'es' ? 'Inicio' : 'Home'}
      >
        <Link to="/" className={`${style.titleLink}`}>
          FedeCode
        </Link>
      </h1>
      {windowWidth > 870 ? (
        <>
          <NavBar />
          <button
            onClick={updateLang}
            className={`${style.langButton}`}
            title={lang === 'es' ? 'Change Language' : 'Cambiar Idioma'}
          >
            <img src={langImg} alt="Lang Icon" className={`${style.langImg}`} />
            {lang === 'es' ? 'ES' : 'EN'}
          </button>
        </>
      ) : (
        <section
          className={`${style.hamburgerMenuWrapper} ${isOpen ? style.menuActive : ''}`}
        >
          <NavBar />
          <button
            onClick={updateLang}
            className={`${style.langButton}`}
            title={lang === 'es' ? 'Change Language' : 'Cambiar Idioma'}
          >
            {lang === 'es' ? 'Idioma: ES' : 'Language: EN'}
          </button>
        </section>
      )}
      <button onClick={handleMenu} className={`${style.hamburgerButton}`}>
        <img
          src={isOpen ? closeIcon : hamburgerMenu}
          alt="Hamburger Menu"
          className={`${style.hamburgerImg}`}
        />
      </button>
    </header>
  );
};
export default Header;
