import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { LanguageContext } from '@context/LanguageContext.js';
import style from '@pages/Main/Main.module.css';
import Header from '@components/Header/Header';
import profilePic from '@assets/Social_Icons/foto_personal.png';

const Main = () => {
  const lang = useContext(LanguageContext);
  return (
    <div className={`${style.mainPage}`}>
      <Helmet>
        <title>
          FedeCode -{' '}
          {lang === 'es' ? 'Desarrollador Web y Android' : 'Web & Android Dev'}
        </title>
        <meta
          name="description"
          content="Soy Fede, un desarrollador web especializado en frontend y desarrollo móvil, con pasión por crear experiencias digitales únicas. Tengo experiencia en diseño UI/UX y desarrollo de aplicaciones Android, y disfruto trabajar en proyectos innovadores que generan un impacto positivo."
        />
        <meta
          name="keywords"
          content="desarrollador web, frontend, desarrollo móvil, UI/UX, aplicaciones Android, proyectos innovadores, soluciones digitales, JavaScript, React, HTML, CSS, programador web, fedecode, fede, FedeCode"
        />
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
              ? 'Soy Fede, desarrollador Web frontend y Android con experiencia en diseño UI/UX. Abierto a colaborar en proyectos innovadores. ¡Contáctame!'
              : "I'm Fede, a web developer in frontend and Android with UI/UX design experience. Open to innovative projects. Feel free to reach out!"
          }
        />
        <meta
          property="og:image"
          content={
            lang === 'es'
              ? 'https://fedecode.com/card_images/cardImgEs.png'
              : 'https://fedecode.com/card_images/cardImgEn.png'
          }
        />
        <meta property="og:url" content="https://www.fedecode.com" />
        <meta property="og:site_name" content="Fede Code" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Header />
      <section className={`${style.presentation}`}>
        <div className={`${style.shadowImgContainer}`}>
          <img
            src={profilePic}
            alt="Profile Picture"
            className={`${style.presentationImg}`}
          />
          <div className={`${style.imgShadow}`}></div>
        </div>
        {lang === 'es' ? (
          <article className={`${style.presentationPContainer}`}>
            <p className={`${style.presentationParagraph}`}>
              ¡Hola! soy{' '}
              <span className={`${style.strong} ${style.name}`}>
                Fede Calderon
              </span>
              , un Desarrollador Web enfocado y apasionado en el{' '}
              <span className={`${style.strong}`}>Desarrollo Frontend</span> en
              camino a ser un{' '}
              <span className={`${style.strong}`}>Desarrollador Fullstack</span>
              , con habilidades y conocimientos en el{' '}
              <span className={`${style.strong}`}>
                Desarrollo de Aplicaciones Android
              </span>
              . Mi objetivo es seguir perfeccionando mis habilidades para
              construir{' '}
              <span className={`${style.strong}`}>soluciones innovadoras</span>{' '}
              que impacten{' '}
              <span className={`${style.strong}`}>positivamente</span> a las
              personas.
            </p>

            <p className={`${style.presentationParagraph}`}>
              <span className={`${style.strong}`}>Explora</span> mi trabajo y no
              dudes en <span className={`${style.strong}`}>contactarme</span>{' '}
              para colaborar en futuros{' '}
              <span className={`${style.strong}`}>proyectos</span>.
            </p>
          </article>
        ) : (
          <article className={`${style.presentationPContainer}`}>
            <p className={`${style.presentationParagraph}`}>
              Hello! I am{' '}
              <span className={`${style.strong} ${style.name}`}>
                Fede Calderon
              </span>
              , a Web Developer focused and passionate about{' '}
              <span className={`${style.strong}`}>Frontend Development</span> on
              the path to becoming a{' '}
              <span className={`${style.strong}`}>Fullstack Developer</span>,
              with skills and knowledge in{' '}
              <span className={`${style.strong}`}>Android App Development</span>
              . My goal is to keep refining my skills to build{' '}
              <span className={`${style.strong}`}>innovative solutions</span>{' '}
              that have a{' '}
              <span className={`${style.strong}`}>positive impact</span> on
              people.
            </p>

            <p className={`${style.presentationParagraph}`}>
              <span className={`${style.strong}`}>Explore</span> my work and
              feel free to <span className={`${style.strong}`}>contact me</span>{' '}
              to collaborate on future{' '}
              <span className={`${style.strong}`}>projects</span>.
            </p>
          </article>
        )}
      </section>
    </div>
  );
};

export default Main;
