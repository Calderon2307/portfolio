import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from '@pages/Main/Main';
import AboutMe from '@pages/AboutMe/AboutMe';
import MyProjects from '@pages/MyProjects/MyProjects';
import Contacts from '@pages/Contacts/Contacts';
import PageNotFound from '@pages/PageNotFound/PageNotFound';
import {
  LanguageContext,
  UpdateLanguageContext,
} from '@context/LanguageContext.js';

function App() {
  const [lang, setLang] = useState('es');

  const handleLang = () => {
    if (lang === 'es') {
      setLang('en');
    } else {
      setLang('es');
    }
  };

  return (
    <LanguageContext.Provider value={lang}>
      <UpdateLanguageContext.Provider value={handleLang}>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/projects" element={<MyProjects />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </UpdateLanguageContext.Provider>
    </LanguageContext.Provider>
  );
}

export default App;
