import React from "react";
import SearchBoxColor from "./SearchBoxColor";




const BojePretraga = () => {


    return (
        <div className="gradovi">
        <h2>BOJE</h2>
        <div className="gradZem">
            <div className="search">

        <SearchBoxColor placeholder={' Pretraži boje'} linkTo={'/searchColor'}  />
            </div>
      
       
        </div>
        <div className="razmak"></div>
        </div>
    )
} 
export default BojePretraga;