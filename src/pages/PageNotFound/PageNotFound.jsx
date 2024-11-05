import { Helmet } from 'react-helmet-async';
import Header from '@components/header/header';
import style from '@pages/PageNotFound/PageNotFound.module.css';
import errorImg from '@assets/Social_Icons/pageNotFound.gif';

const PageNotFound = () => {
  return (
    <div className={`${style.container}`}>
      <Helmet>
        <title>ERROR 404 - FedeCode</title>
        <meta
          name="description"
          content="Soy Fede, un desarrollador web especializado en frontend y desarrollo Android. Con experiencia en UI/UX y backend, me esfuerzo en crear soluciones tecnológicas innovadoras. Conoce más sobre mi formación y experiencia."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Header callAtention={true} />
      <section className={`${style.imgContainer}`}>
        <img
          src={errorImg}
          alt="Error 404 Image"
          className={`${style.errorImg}`}
        />
      </section>
    </div>
  );
};

export default PageNotFound;
