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
          FedeCode |{' '}
          {lang === 'es' ? 'Desarrollador Web y Android' : 'Web & Android Dev'}
        </title>
      </Helmet>
      <Header />
      <section className={`${style.presentation}`}>
        <div className={`${style.shadowImgContainer}`}>
          <img
            src={profilePic}
            alt="FedeCode - Profile Picture"
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
              , un{' '}
              <span className={`${style.strong}`}>
                Desarrollador Web Fullstack
              </span>{' '}
              con un fuerte enfoque y pasión por el{' '}
              <span className={`${style.strong}`}>Desarrollo Frontend</span>, y
              con habilidades y conocimientos en el{' '}
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
              Hi! I&apos;m{' '}
              <span className={`${style.strong} ${style.name}`}>
                Fede Calderon
              </span>
              , a{' '}
              <span className={`${style.strong}`}>Fullstack Web Developer</span>{' '}
              with a strong focus and passion for{' '}
              <span className={`${style.strong}`}>Frontend Development</span>,
              and with skills and knowledge in{' '}
              <span className={`${style.strong}`}>Android App Development</span>
              . My goal is to keep improving my abilities to build{' '}
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
