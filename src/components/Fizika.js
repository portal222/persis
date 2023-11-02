
import React, { useState, useEffect } from "react";

import data from "../../public/PeriodicTableJSON.json";
import { useNavigate, useParams } from "react-router-dom";



import BackToTop from "./BackToTop";







const Fizika = () => {

 
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);


    const [error, setError] = useState(null);


    const navigate = useNavigate();








  



    const handleClick = (atomNum) => {
        
        const LinkTo = `/${atomNum}`;
        navigate(LinkTo);
    }





    return (


        <>
            <table className="fizika">
                <thead>
                    <tr>
                        <td 
                        
                        rowSpan={3}>
                           <h1 className="head">ELEMENTS</h1> 
                        </td>
                    </tr>
                </thead>
            
                {data.elements.map((dataObj) => (



                    <tbody
                    className="atomDet"
                    key={dataObj.name} >


                        <tr>
                            <td
                                onClick={() => handleClick(dataObj.number)}
                                className="symbolClick">
                                <span>
                                    {dataObj.symbol}
                                </span>
                                <small className="number">{dataObj.number}</small>
                                <small className="name">{dataObj.atomic_mass}</small>
                            </td>
                            <td
                                onClick={() => handleClick(dataObj.number)}
                                className="nameAtom">
                                {dataObj.name}
                            </td>
                      

                            <td >
                                <img src={dataObj.bohr_model_image} alt=" nema slike " className="spImg" />
                            </td>

                        </tr>



                    </tbody>

                ))}
            </table>
            <div>{<BackToTop />}</div>
        </>

    )

}
export default Fizika;