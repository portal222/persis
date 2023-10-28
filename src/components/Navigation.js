import React from "react";
import { Link, Routes, Route, NavLink, HashRouter } from 'react-router-dom';
import Fizika from "./Fizika";

import Element from "./Element";

import SearchResultsAtoms from "./SearchResultsAtoms";


import AtomDet from "./AtomDet";

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
          <Link to='/table' className="linker">
           PERIODIC TABLE
          </Link>
        </p>








      </div>
      <Routes>

        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Fizika />} />
        <Route path="/table" element={<Element />} />
    
        <Route path="/searchAtoms" element={<SearchResultsAtoms />} />
    
        <Route path="/:atomNum" element={<AtomDet />} />

      </Routes>
    

    </HashRouter>
  )
}
