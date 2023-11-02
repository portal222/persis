
import React, { useState, useEffect } from "react";

import data from "../../public/PeriodicTableJSON.json";
import { useNavigate, useParams } from "react-router-dom";



import BackToTop from "./BackToTop";

import axios from "axios";
import Loader from "./Loader";





const Fizika = () => {

    // const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);


    const [error, setError] = useState(null);


    const navigate = useNavigate();








    // useEffect(() => {

    //     getAtoms();
    // }, [])


    // const getAtoms = async () => {

    //     const url = "./PeriodicTableJSON.json";

    //     try {
    //         const response = await axios.get(url);
    //         const data = response.data.elements;
    //         console.log("podaci periodno sistema", data);

    //         console.log("pojedinacni atom", data[3])
    //         setIsLoading(false);

    //         setData(data);

    //     } catch (err) {
    //         setError(err);
    //     }
    // };

    const handleClick = (atomNum) => {
        console.log("klik na atomi", atomNum);
        console.log("boja cpk", data.elements.cpk_hex)
        const LinkTo = `/${atomNum}`;
        navigate(LinkTo);
    }


    // if (isLoading) {
    //     return <Loader />
    // }
console.log("ime posle boje", data.elements.name)

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