import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { LanguageContext } from '@context/LanguageContext.js';
import Header from '@components/Header/Header';
import style from '@pages/Contacts/Contacts.module.css';
import contacts from '@data/contacts.js';

const Contacts = () => {
  const lang = useContext(LanguageContext);
  return (
    <>
      <Helmet>
        <title>{lang === 'es' ? 'Contactos' : 'Contacts'} - FedeCode</title>
        <meta
          name="description"
          content="Si quieres ponerte en contacto conmigo, aquí encontrarás todas mis redes sociales y formas de comunicación. No dudes en escribirme para hablar sobre proyectos o colaboraciones."
        />
        <meta
          name="keywords"
          content="contacto FedeCode, contacto desarrollador web, redes sociales FedeCode, proyectos, colaboraciones, desarrollador frontend, desarrollador Android, fedecode, fede"
        />
        <meta
          property="og:title"
          content={
            lang === 'es' ? 'Contactos - FedeCode' : 'Contacts - FedeCode'
          }
        />
        <meta
          property="og:description"
          content={
            lang === 'es'
              ? 'Soy Fede, desarrollador web. Encuentra aquí mis redes y formas de contacto. ¡Hablemos de proyectos o colaboraciones!'
              : "I'm Fede, a web developer. Here you’ll find my social media and contact options. Let’s talk about projects or collaborations!"
          }
        />
        <meta
          property="og:image"
          content={
            lang === 'es'
              ? 'https://fedecode.com/card_images/cardImgContactosEs.png'
              : 'https://fedecode.com/card_images/cardImgContactsEn.png'
          }
        />
        <meta property="og:url" content="https://www.fedecode.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Fede Code" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Header />
      <section className={`${style.contentWrapper}`}>
        <section className={`${style.contactsContainer}`}>
          <h2 className={`${style.title}`}>
            {lang === 'es' ? 'CONTACTOS' : 'CONTACTS'}
          </h2>
          <article className={`${style.contacts}`}>
            {contacts.map((contact, index) => {
              return (
                <div key={index} className={`${style.contact}`}>
                  <a
                    href={contact.link}
                    title={contact.nombre}
                    target="_blank"
                    className={`${style.contactLink}`}
                  >
                    <img
                      src={contact.logo}
                      alt={contact.nombre}
                      className={`${style.contactImg}`}
                    />
                  </a>
                  <p className={`${style.contactValue}`}>{contact.info}</p>
                </div>
              );
            })}
          </article>
        </section>
      </section>
    </>
  );
};

export default Contacts;
