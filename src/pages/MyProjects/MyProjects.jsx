import { Helmet } from 'react-helmet-async';
import { useState, useContext, useEffect } from 'react';
import { LanguageContext } from '@context/LanguageContext.js';
import Header from '@components/Header/Header';
import Card from '@components/Card/Card';
import style from '@pages/MyProjects/MyProjects.module.css';
import { projectsEs, projectsEn } from '@data/projects.js';
import filterIcon from '@assets/Web_Icons/filter.png';
import closeIcon from '@assets/Web_Icons/close.png';

const MyProjects = () => {
  const lang = useContext(LanguageContext);

  const [filter, setFilter] = useState('all');
  const [isFlip, setIsFlip] = useState('');

  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const projects = lang === 'es' ? projectsEs : projectsEn;
  let filteredProjects = [];
  let featuredProjects = projects.filter(
    (project) => project.highlight === 'featured'
  );

  if (filter === 'all') {
    filteredProjects = projects;
  } else {
    filteredProjects = projects.filter((project) => project.tipo === filter);
  }

  const handleFilters = () => {
    setIsOpen(!isOpen);
  };

  const handleFilterAll = () => {
    setFilter('all');
    if (isOpen) setIsOpen(false);
  };

  const handleFilterWeb = () => {
    setFilter('web');
    if (isOpen) setIsOpen(false);
  };

  const handleFilterMovil = () => {
    setFilter('mobile');
    if (isOpen) setIsOpen(false);
  };

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

  return (
    <>
      <Helmet>
        <title>{lang === 'es' ? 'Proyectos' : 'Projects'} | FedeCode</title>
        <link rel="canonical" href="https://fedecode.com/projects" />
        <meta
          name="description"
          content="Soy Fede (FedeCode), un desarrollador web especializado en frontend y desarrollo Android. Aquí puedes ver mis proyectos más destacados en desarrollo web y aplicaciones móviles. Uso tecnologías como React, JavaScript, Kotlin y más para crear soluciones innovadoras que impactan positivamente."
        />
        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://fedecode.com/projects" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={
            lang === 'es'
              ? 'FedeCode | Desarrollador Web y Android'
              : 'FedeCode | Web & Android Dev'
          }
        />
        <meta
          property="og:description"
          content={
            lang === 'es'
              ? 'Soy Fede, desarrollador web en frontend y Android. Explora mis proyectos en soluciones web y móviles con React y JavaScript. ¡Explora mi trabajo!'
              : "I'm Fede, a frontend and Android developer. Explore my web and mobile projects using React and JavaScript. Check out my work!"
          }
        />
        <meta
          property="og:image"
          content={
            lang === 'es'
              ? 'https://fedecode.com/card_images/cardImgProyectosEs.jpg'
              : 'https://fedecode.com/card_images/cardImgProjectsEn.jpg'
          }
        />
        <meta property="og:site_name" content="Fede Code" />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="fedecode.com" />
        <meta property="twitter:url" content="https://fedecode.com/projects" />
        <meta
          name="twitter:title"
          content={
            lang === 'es'
              ? 'FedeCode | Desarrollador Web y Android'
              : 'FedeCode | Web & Android Dev'
          }
        />
        <meta
          name="twitter:description"
          content={
            lang === 'es'
              ? 'Soy Fede, desarrollador web en frontend y Android. Explora mis proyectos en soluciones web y móviles con React y JavaScript. ¡Explora mi trabajo!'
              : "I'm Fede, a frontend and Android developer. Explore my web and mobile projects using React and JavaScript. Check out my work!"
          }
        />
        <meta
          name="twitter:image"
          content={
            lang === 'es'
              ? 'https://fedecode.com/card_images/cardImgProyectosEs.jpg'
              : 'https://fedecode.com/card_images/cardImgProjectsEn.jpg'
          }
        />
      </Helmet>
      <Header />
      <section className={`${style.contentWrapper}`}>
        <h2 className={`${style.subtitle}`}>
          {lang === 'es' ? 'Proyectos Destacados' : 'Featured Projects'}
        </h2>
        <section className={`${style.container} ${style.featuredContainer}`}>
          <section className={`${style.projectsContainer}`}>
            {featuredProjects.map((project) => {
              return (
                <Card
                  key={project.nombre}
                  info={project}
                  cardFlip={isFlip}
                  handleCardFlip={setIsFlip}
                />
              );
            })}
          </section>
        </section>
        <section className={`${style.container} ${style.normalContainer}`}>
          <div className={`${style.wrapper}`}>
            {windowWidth > 870 ? (
              <>
                <div className={`${style.blacnkSpace}`}></div>
                <nav className={`${style.filtersNav}`}>
                  <ul className={`${style.filterList}`}>
                    <li className={`${style.filterItem}`}>
                      <button
                        onClick={handleFilterAll}
                        className={`${style.filterButton} ${filter === 'all' ? style.filterSelected : ''}`}
                      >
                        {lang === 'es' ? 'Todos' : 'All'}
                      </button>
                    </li>
                    <li className={`${style.filterItem}`}>
                      <button
                        onClick={handleFilterWeb}
                        className={`${style.filterButton} ${filter === 'web' ? style.filterSelected : ''}`}
                      >
                        Web
                      </button>
                    </li>
                    <li className={`${style.filterItem}`}>
                      <button
                        onClick={handleFilterMovil}
                        className={`${style.filterButton} ${filter === 'mobile' ? style.filterSelected : ''}`}
                      >
                        {lang === 'es' ? 'Movil' : 'Mobile'}
                      </button>
                    </li>
                  </ul>
                </nav>
                <section className={`${style.projectsCount}`}>
                  {lang === 'es' ? 'Proyectos' : 'Projects'}:{' '}
                  {filteredProjects.length}
                </section>
                <button
                  onClick={handleFilters}
                  className={`${style.filterIconButton}`}
                >
                  <img
                    src={isOpen ? closeIcon : filterIcon}
                    alt="Filters Icon"
                    className={`${style.filterIconImg}`}
                  />
                </button>
              </>
            ) : (
              <>
                <h2 className={`${style.subtitle}`}>
                  {lang === 'es' ? 'Todos los Proyectos' : 'All Projects'}
                </h2>
                <button
                  onClick={handleFilters}
                  className={`${style.filterIconButton}`}
                >
                  <img
                    src={isOpen ? closeIcon : filterIcon}
                    alt="Filters Icon"
                    className={`${style.filterIconImg}`}
                  />
                </button>
                <nav
                  className={`${style.filtersNav} ${isOpen ? style.filtersActive : ''}`}
                >
                  <ul className={`${style.filterList}`}>
                    <li className={`${style.filterItem}`}>
                      <button
                        onClick={handleFilterAll}
                        className={`${style.filterButton} ${filter === 'all' ? style.filterSelected : ''}`}
                      >
                        {lang === 'es' ? 'Todos' : 'All'}: {projects.length}
                      </button>
                    </li>
                    <li className={`${style.filterItem}`}>
                      <button
                        onClick={handleFilterWeb}
                        className={`${style.filterButton} ${filter === 'web' ? style.filterSelected : ''}`}
                      >
                        Web:{' '}
                        {
                          projects.filter((project) => project.tipo === 'web')
                            .length
                        }
                      </button>
                    </li>
                    <li className={`${style.filterItem}`}>
                      <button
                        onClick={handleFilterMovil}
                        className={`${style.filterButton} ${filter === 'mobile' ? style.filterSelected : ''}`}
                      >
                        {lang === 'es' ? 'Movil' : 'Mobile'}:{' '}
                        {
                          projects.filter(
                            (project) => project.tipo === 'mobile'
                          ).length
                        }
                      </button>
                    </li>
                  </ul>
                </nav>
              </>
            )}
          </div>
          <section className={`${style.projectsContainer}`}>
            {filteredProjects.map((project) => {
              return (
                <Card
                  key={project.nombre}
                  info={project}
                  cardFlip={isFlip}
                  handleCardFlip={setIsFlip}
                />
              );
            })}
          </section>
        </section>
      </section>
    </>
  );
};

export default MyProjects;
