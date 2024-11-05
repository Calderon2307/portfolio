import { useContext } from 'react';
import { LanguageContext } from '@context/LanguageContext.js';
import style from '@components/Card/Card.module.css';
import flipIcon from '@assets/Web_Icons/flip.png';

const Card = ({ info, cardFlip, handleCardFlip }) => {
  const lang = useContext(LanguageContext);

  const handleFlip = () => {
    handleCardFlip(info.nombre);
  };

  const cleenFlip = () => {
    handleCardFlip('');
  };

  return (
    <article className={`${style.cardContainer}`}>
      <article
        className={`${style.card} ${cardFlip === info.nombre ? style.flipped : ''}`}
      >
        <section className={`${style.cardFront}`}>
          <figure className={`${style.cardImgContainer}`}>
            <img
              src={info.imagen}
              alt={`Portada ${info.nombre}`}
              className={`${style.cardImg}`}
            />
          </figure>

          <section className={`${style.paddingAdd}`}>
            <h3 className={`${style.cardTitle}`}>{info.nombre}</h3>

            <p className={`${style.subtitle}`}>
              {lang === 'es' ? 'Tecnologias Utilizadas' : 'Technologies Used'}:{' '}
            </p>

            <section className={`${style.cardTechContainer}`}>
              {info.tecnologias.map((tech, index) => {
                return (
                  <figure key={index} className={`${style.techImgContainer}`}>
                    <img
                      src={tech.imagen}
                      alt={`Portada ${tech.nombre}`}
                      title={tech.nombre}
                      className={`${style.techImg}`}
                    />
                  </figure>
                );
              })}
            </section>

            <section className={`${style.cardInfo}`}>
              <div className={`${style.filter}`}>{info.tipo}</div>
              <button onClick={handleFlip} className={`${style.iconFront}`}>
                <img
                  src={flipIcon}
                  alt="Card Flip icon"
                  title={
                    lang === 'es'
                      ? 'Ver descripcion del proyecto'
                      : 'See project description'
                  }
                  className={`${style.iconImg}`}
                />
              </button>
            </section>
          </section>
        </section>

        <section className={`${style.cardBack}`}>
          <p className={`${style.cardDescription}`}>{info.descripcion}</p>
          <a
            href={info.link}
            onClick={(e) => info.link === '#' && e.preventDefault()}
            className={`${style.projectLink}`}
            style={
              info.link === '#' ? { pointerEvents: 'none', color: 'gray' } : {}
            }
            target="_blank"
            title="Ir al Repositorio"
          >
            {lang === 'es' ? 'Ver Proyecto' : 'See Project'}
          </a>
          <button onClick={cleenFlip} className={`${style.iconBack}`}>
            <img
              src={flipIcon}
              alt="Card Flip icon"
              title={
                lang === 'es'
                  ? 'Ver informacion principal'
                  : 'See main information'
              }
              className={`${style.iconImg}`}
            />
          </button>
        </section>
      </article>
    </article>
  );
};

export default Card;
