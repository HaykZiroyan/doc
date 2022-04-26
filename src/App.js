import './App.css';
import React from 'react';
import Top from './header/header';
import Footer from './footer/footer';

import Generals from './main/general';
import About from './aboutus/aboutus';
import Team from "./ourTeam/ourTeam";
import Doctors from "./docs/docs";
import Services from "./services/services";
import News from "./news/news";
import Gallery from "./Gallery/Gallery"
import Contacts from "./contacts/contacts"
import { Routes, Route, Link } from 'react-router-dom';
// import Docnum from './docs/docnumber/docnumber';
import Docnums from './docs/docnumber/docnumbers';
import Docroutes from "./docs/docroutes"
import docinfo from "./docs/docsInfo.json";

function App() {
  
  return (
    <>
      {/* <div className="App"> */}
        <Top />
        {/* <p>{docinfo[0].name}</p> */}

        <Routes>
          <Route path="/" element={ <Generals />} />
          <Route path="/about" element={ <About />} />
          <Route path="/our-team" element={ <Team />} />
          <Route path="/doctors" element={ <Doctors />} />
          {/* <Docroutes /> */}
          <Route path="doctors/:id" element={ <Docnums />} /> 
          {/* <Route path="doctors/98" element={ <Docnums />} /> */} 
          {/* {docinfo.map((elem) => {
            return <Route path={elem.link} element={ <Docnums data={elem} />} /> 
          })} */}

          <Route path="/services" element={ <Services />} />
          <Route path="/news" element={ <News />} />
          <Route path="/gallery" element={ <Gallery />} />
          <Route path="/payment" element={ <Generals />} />
          <Route path="/contacts" element={ <Contacts />} />


          {/* <Route path="/medical-tourism" element={ <Medtour />} /> */}

        </Routes>
          {/* <Route path="/slider" component={Slider} /> */}

        {/*  */}
        {/*  */}
          
        <Footer />
      {/* </div> */}
    </>

  );
}

export default App;
