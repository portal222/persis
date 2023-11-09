import React from "react";
import { Link, Routes, Route, HashRouter } from 'react-router-dom';
import Fizika from "./Fizika";

import Element from "./Element";
import AtomDet from "./AtomDet";
import SearchResultsColor from "./SearchResultsColor";
import SearchBoxColor from "./SearchBoxColor";


export default function Navigation() {
  return (
    <HashRouter basename="/">
      <div className="navContainer">


        <p>
          <Link to='/' className="linker">
          ELEMENTS
          </Link>
        </p>
        <p>
        <SearchBoxColor placeholder={' Pretraži boje'} linkTo={'/searchColor'}  />
        </p>
        <p>
          <Link to='/table' className="linker">
           PERIODIC TABLE
          </Link>
        </p>








      </div>
      <Routes>

  
        <Route path="/" element={<Fizika />} />
        <Route path="/table" element={<Element />} />
    
      
    
        <Route path="/:atomNum" element={<AtomDet />} />
        <Route path="/searchColor" element={<SearchResultsColor />} />
     

      </Routes>
      <div className="home">
        <div className="img"></div>
    
      </div>

    </HashRouter>
  )
}
