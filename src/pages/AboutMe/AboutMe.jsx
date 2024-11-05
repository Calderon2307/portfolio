import { Helmet } from 'react-helmet-async';
import { useState, useContext, useEffect } from 'react';
import { LanguageContext } from '@context/LanguageContext.js';
import Header from '@components/Header/Header';
import InfoSection from '@components/InfoSection/InfoSection';
import style from '@pages/AboutMe/AboutMe.module.css';

const AboutMe = () => {
  const lang = useContext(LanguageContext);
  const [currentView, setCurrentView] = useState('skills');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;

      if (currentWidth !== windowWidth) {
        setWindowWidth(window.innerWidth);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  const handleMoveToSkills = () => {
    setCurrentView('skills');
  };

  const handleMoveToStory = () => {
    setCurrentView('story');
  };

  const openCV = () => {
    if (lang === 'es') window.open('/public/docs/CV-Español.pdf', '_blank');
    else window.open('/public/docs/CV-English.pdf', '_blank');
  };

  return (
    <>
      <Helmet>
        <title>{lang === 'es' ? 'Sobre Mi' : 'About Me'} - FedeCode</title>
        <meta
          name="description"
          content="Soy Fede, un desarrollador web especializado en frontend y desarrollo Android. Con experiencia en UI/UX y backend, me esfuerzo en crear soluciones tecnológicas innovadoras. Conoce más sobre mi formación y experiencia."
        />
        <meta
          name="keywords"
          content="desarrollador web, frontend, UI/UX, desarrollo Android, backend, soluciones tecnológicas, FedeCode, portafolio, tecnologías web, JavaScript, React, Node.js, CSS, HTML, Kotlin"
        />
        <meta
          property="og:title"
          content={
            lang === 'es' ? 'Sobre Mí - FedeCode' : 'About Me - FedeCode'
          }
        />
        <meta
          property="og:description"
          content={
            lang === 'es'
              ? 'Soy Fede, desarrollador web especializado en frontend, UI/UX y desarrollo Android. Descubre mi experiencia profesional y cómo puedo ayudarte a llevar tus proyectos al siguiente nivel.'
              : "I'm Fede, a web developer specializing in frontend, UI/UX, and Android development. Discover my professional experience and how I can help elevate your projects."
          }
        />
        <meta
          property="og:image"
          content={
            lang === 'es'
              ? '/public/card_images/cardImgSobreEs.png'
              : '/public/card_images/cardImgAboutEn.png'
          }
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Header />
      <section className={`${style.contentWrapper}`}>
        <section className={`${style.infoWrap}`}>
          {windowWidth > 650 ? (
            <>
              <InfoSection />
              <article className={`${style.storyContainer}`}>
                <div className={`${style.wrapper}`}>
                  <h2 className={style.title}>
                    {lang === 'es' ? 'Sobre Mi' : 'About Me'}
                  </h2>
                  <p className={style.text}>
                    {lang === 'es'
                      ? 'A lo largo de mi formación y experiencia, he desarrollado un amplio conocimiento en el uso de tecnologías esenciales para el desarrollo web. Mi dominio de HTML, CSS y JavaScript me permite construir interfaces de usuario sólidas y funcionales, priorizando siempre una experiencia fluida y atractiva para el usuario. Complemento mi trabajo en el Frontend con herramientas como React y Tailwind, que me facilitan la creación de interfaces modulares, eficientes y adaptables.'
                      : 'Throughout my education and experience, I have cultivated an extensive knowledge of essential technologies for web development. My proficiency in HTML, CSS, and JavaScript empowers me to build robust and functional user interfaces, always prioritizing a seamless and engaging user experience. I complement my frontend work with tools like React and Tailwind, which allow me to create modular, efficient, and adaptable interfaces with ease.'}
                  </p>

                  <p className={style.text}>
                    {lang === 'es'
                      ? 'He perfeccionado mi habilidad para integrar librerías y frameworks como Bootstrap y Sass, lo que me permite optimizar el tiempo de desarrollo y mejorar la mantenibilidad del código. Además, mis conocimientos en Node.js y Express.js me permiten comprender y manejar aspectos básicos del Backend, contribuyendo así a proyectos completos y bien estructurados.'
                      : 'I have honed my ability to seamlessly integrate libraries and frameworks such as Bootstrap and Sass, enabling me to optimize development time and enhance code maintainability. Additionally, my knowledge of Node.js and Express.js equips me to understand and manage fundamental backend aspects, thereby contributing to well-structured, comprehensive projects.'}
                  </p>

                  <p className={style.text}>
                    {lang === 'es'
                      ? 'En cuanto a las herramientas de diseño y control de versiones, me he familiarizado con Git y GitHub para gestionar el flujo de trabajo y la colaboración en proyectos de desarrollo. Asimismo, el uso de Figma y Canva me ha permitido participar en la creación de interfaces centradas en la experiencia del usuario, aplicando los principios del diseño UI/UX en cada proyecto.'
                      : 'Regarding design tools and version control, I have become proficient with Git and GitHub to manage workflows and foster collaboration in development projects. Moreover, my experience with Figma and Canva has enabled me to contribute to the creation of user-centered interfaces, consistently applying UI/UX design principles in every project.'}
                  </p>

                  <p className={style.text}>
                    {lang === 'es'
                      ? 'Mi formación no solo se limita al desarrollo web, ya que también tengo experiencia en el desarrollo de aplicaciones móviles con Kotlin y Jetpack Compose, lo que me ha permitido participar en la creación de soluciones móviles completas y funcionales. Estoy comprometido a seguir aprendiendo y evolucionando como desarrollador, buscando siempre la excelencia en cada proyecto en el que participo.'
                      : 'My expertise is not confined to web development alone; I also have experience in mobile application development using Kotlin and Jetpack Compose, which has enabled me to contribute to the creation of comprehensive and functional mobile solutions. I am dedicated to continuous learning and growth as a developer, always striving for excellence in every project I am involved in.'}
                  </p>
                </div>

                <button onClick={openCV} className={`${style.button}`}>
                  {lang === 'es' ? 'Ver CV' : 'View CV'}
                </button>
              </article>
            </>
          ) : (
            <>
              <section className={`${style.buttonsContainer}`}>
                <button
                  onClick={handleMoveToSkills}
                  className={`${style.buttonInfo}`}
                >
                  {lang === 'es' ? 'Habilidades' : 'Skills'}
                </button>
                <button
                  onClick={handleMoveToStory}
                  className={`${style.buttonInfo}`}
                >
                  {lang === 'es' ? 'Sobre Mi' : 'About Me'}
                </button>
                <div
                  className={`${style.buttonInfoSelected} ${currentView === 'skills' ? style.moveToSkills : style.moveToStory}`}
                ></div>
              </section>
              <section
                className={`${style.mobileWrapper} ${currentView === 'skills' ? '' : style.moveBackground}`}
              >
                <InfoSection />
                <article className={`${style.storyContainer}`}>
                  <div className={`${style.wrapper}`}>
                    <h2 className={style.title}>
                      {lang === 'es' ? 'Sobre Mi' : 'About Me'}
                    </h2>
                    <p className={style.text}>
                      {lang === 'es'
                        ? 'A lo largo de mi formación y experiencia, he desarrollado un amplio conocimiento en el uso de tecnologías esenciales para el desarrollo web. Mi dominio de HTML, CSS y JavaScript me permite construir interfaces de usuario sólidas y funcionales, priorizando siempre una experiencia fluida y atractiva para el usuario. Complemento mi trabajo en el Frontend con herramientas como React y Tailwind, que me facilitan la creación de interfaces modulares, eficientes y adaptables.'
                        : 'Throughout my education and experience, I have cultivated an extensive knowledge of essential technologies for web development. My proficiency in HTML, CSS, and JavaScript empowers me to build robust and functional user interfaces, always prioritizing a seamless and engaging user experience. I complement my frontend work with tools like React and Tailwind, which allow me to create modular, efficient, and adaptable interfaces with ease.'}
                    </p>

                    <p className={style.text}>
                      {lang === 'es'
                        ? 'He perfeccionado mi habilidad para integrar librerías y frameworks como Bootstrap y Sass, lo que me permite optimizar el tiempo de desarrollo y mejorar la mantenibilidad del código. Además, mis conocimientos en Node.js y Express.js me permiten comprender y manejar aspectos básicos del Backend, contribuyendo así a proyectos completos y bien estructurados.'
                        : 'I have honed my ability to seamlessly integrate libraries and frameworks such as Bootstrap and Sass, enabling me to optimize development time and enhance code maintainability. Additionally, my knowledge of Node.js and Express.js equips me to understand and manage fundamental backend aspects, thereby contributing to well-structured, comprehensive projects.'}
                    </p>

                    <p className={style.text}>
                      {lang === 'es'
                        ? 'En cuanto a las herramientas de diseño y control de versiones, me he familiarizado con Git y GitHub para gestionar el flujo de trabajo y la colaboración en proyectos de desarrollo. Asimismo, el uso de Figma y Canva me ha permitido participar en la creación de interfaces centradas en la experiencia del usuario, aplicando los principios del diseño UI/UX en cada proyecto.'
                        : 'Regarding design tools and version control, I have become proficient with Git and GitHub to manage workflows and foster collaboration in development projects. Moreover, my experience with Figma and Canva has enabled me to contribute to the creation of user-centered interfaces, consistently applying UI/UX design principles in every project.'}
                    </p>

                    <p className={style.text}>
                      {lang === 'es'
                        ? 'Mi formación no solo se limita al desarrollo web, ya que también tengo experiencia en el desarrollo de aplicaciones móviles con Kotlin y Jetpack Compose, lo que me ha permitido participar en la creación de soluciones móviles completas y funcionales. Estoy comprometido a seguir aprendiendo y evolucionando como desarrollador, buscando siempre la excelencia en cada proyecto en el que participo.'
                        : 'My expertise is not confined to web development alone; I also have experience in mobile application development using Kotlin and Jetpack Compose, which has enabled me to contribute to the creation of comprehensive and functional mobile solutions. I am dedicated to continuous learning and growth as a developer, always striving for excellence in every project I am involved in.'}
                    </p>
                  </div>

                  <button onClick={openCV} className={`${style.button}`}>
                    {lang === 'es' ? 'Ver CV' : 'View CV'}
                  </button>
                </article>
              </section>
            </>
          )}
        </section>
      </section>
    </>
  );
};

export default AboutMe;
