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
        <title>{lang === 'es' ? 'Contactos' : 'Contacts'} | FedeCode</title>
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
