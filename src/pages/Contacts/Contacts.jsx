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
          content="contacto FedeCode, contacto desarrollador web, redes sociales FedeCode, proyectos, colaboraciones, desarrollador frontend, desarrollador Android"
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
              ? 'Si quieres ponerte en contacto conmigo, aquí encontrarás mis redes sociales y formas de comunicación. ¡Escríbeme si te interesa hablar sobre proyectos o colaborar!'
              : 'If you’d like to reach out, here you’ll find my social media and ways to contact me. Let’s talk about projects or collaborations!'
          }
        />
        <meta
          property="og:image"
          content={
            lang === 'es'
              ? '/public/card_images/cardImgContactosEs.png'
              : '/public/card_images/cardImgContactsEn.png'
          }
        />
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
