
import React, { useState, useEffect } from "react";

import data from "../../public/PeriodicTableJSON.json";
import { useNavigate, useParams } from "react-router-dom";



import BackToTop from "./BackToTop";
import SearchPlace from "./SearchPlace";

import Loader from "./Loader";





const Fizika = () => {

    // const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);


    const [error, setError] = useState(null);


    const navigate = useNavigate();








   

    const handleClick = (atomNum) => {
        console.log("klik na atomi", atomNum);
        const LinkTo = `/${atomNum}`;
        navigate(LinkTo);
    }


    // if (isLoading) {
    //     return <Loader />
    // }


    return (


        <>
      <div><SearchPlace /></div>

            <table className="fizika">
                <thead >

                    <tr>
                        <th colSpan={2}>
                       
                        </th>

                    </tr>

                </thead>
                {data.elements.map((dataObj) => (



                    <tbody key={dataObj.name} >


                        <tr>
                            <td
                                onClick={() => handleClick(dataObj.number)}
                                className="symbol">{dataObj.symbol}
                            </td>
                            <td className="nameAtom">
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