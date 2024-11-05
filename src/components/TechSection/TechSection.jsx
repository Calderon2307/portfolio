import { useState, useContext } from 'react';
import { LanguageContext } from '@context/LanguageContext.js';
import style from '@components/TechSection/TechSection.module.css';
import { technologiesEs, technologiesEn } from '@data/technologies.js';

const TechSection = () => {
  const lang = useContext(LanguageContext);

  const [filter, setFilter] = useState('frontend');

  const technologies = lang === 'es' ? technologiesEs : technologiesEn;

  const techElements = technologies
    .filter((tech) => tech.tipo === filter)
    .map((tech) => {
      return (
        <img
          key={tech.nombre}
          src={tech.imagen}
          title={`${tech.nombre} / ${tech.nivel.toUpperCase()}`}
          className={`${style.technologyImg}`}
        />
      );
    });

  const handleChangeToFrontEnd = () => {
    setFilter('frontend');
  };

  const handleChangeToBackEnd = () => {
    setFilter('backend');
  };

  const handleChangeToMovil = () => {
    setFilter('mobile');
  };

  const handleChangeToUI = () => {
    setFilter('ui/ux');
  };

  const handleChangeToOther = () => {
    setFilter('other');
  };

  return (
    <section className={`${style.techContainer}`}>
      <section className={`${style.buttonsContainer}`}>
        <button
          onClick={handleChangeToFrontEnd}
          className={`${style.button} ${filter === 'frontend' ? style.buttonSelected : ' '}`}
        >
          Frontend
        </button>
        <button
          onClick={handleChangeToBackEnd}
          className={`${style.button} ${filter === 'backend' ? style.buttonSelected : ' '}`}
        >
          Backend
        </button>
        <button
          onClick={handleChangeToMovil}
          className={`${style.button} ${filter === 'mobile' ? style.buttonSelected : ' '}`}
        >
          Android
        </button>
        <button
          onClick={handleChangeToUI}
          className={`${style.button} ${filter === 'ui/ux' ? style.buttonSelected : ' '}`}
        >
          UI/UX
        </button>
        <button
          onClick={handleChangeToOther}
          className={`${style.button} ${filter === 'other' ? style.buttonSelected : ' '}`}
        >
          {lang === 'es' ? 'Otros' : 'Other'}
        </button>
      </section>
      <section className={`${style.technologiesImgContainer}`}>
        {techElements}
      </section>
    </section>
  );
};

export default TechSection;
