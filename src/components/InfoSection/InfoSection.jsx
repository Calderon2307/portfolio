import { personalInfoEs, personalInfoEn } from '@data/personalInfo.js';
import { useContext } from 'react';
import { LanguageContext } from '@context/LanguageContext.js';
import TechSection from '@components/TechSection/TechSection';
import style from '@components/InfoSection/InfoSection.module.css';
import profilePic from '@assets/Social_Icons/foto_personal.png';

const InfoSection = () => {
  const lang = useContext(LanguageContext);

  const personalInfo = lang === 'es' ? personalInfoEs : personalInfoEn;

  return (
    <article className={`${style.personalInfoContainer}`}>
      <img
        src={profilePic}
        alt="FedeCode - Profile Picture"
        className={`${style.personalImg}`}
      />
      <section className={`${style.personalInfo}`}>
        {personalInfo.map((info, index) => {
          return (
            <p key={index} className={`${style.info}`}>
              <span className={`${style.infoTitle}`}>{info.field}: </span>
              {info.value}
            </p>
          );
        })}
      </section>
      <TechSection />
    </article>
  );
};

export default InfoSection;
