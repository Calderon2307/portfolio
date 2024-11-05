import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '@context/LanguageContext.js';
import style from '@components/NavBar/NavBar.module.css';

const NavBar = () => {
  const lang = useContext(LanguageContext);

  const location = useLocation();
  const currentPath = location.pathname;

  const pathEnd = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  return (
    <nav className={`${style.nav}`}>
      <ul className={`${style.nav__list}`}>
        <li className={`${style.nav__listItem}`}>
          <Link
            to="/about-me"
            className={`${style.nav__listItemLink} ${pathEnd === 'about-me' ? style.selectedLink : ''}`}
          >
            {lang === 'es' ? 'Sobre Mi' : 'About Me'}
          </Link>
        </li>
        <li className={`${style.nav__listItem}`}>
          <Link
            to="/projects"
            className={`${style.nav__listItemLink} ${pathEnd === 'projects' ? style.selectedLink : ''}`}
          >
            {lang === 'es' ? 'Proyectos' : 'Projects'}
          </Link>
        </li>
        <li className={`${style.nav__listItem}`}>
          <Link
            to="/contacts"
            className={`${style.nav__listItemLink} ${pathEnd === 'contacts' ? style.selectedLink : ''}`}
          >
            {lang === 'es' ? 'Contactos' : 'Contacts'}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
