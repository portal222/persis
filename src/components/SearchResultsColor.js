import React, {  useState, useEffect, useContext } from "react";
import axios from 'axios';

import GlobalContext from "./GlobalContext";


import Loader from "./Loader";
import BojePretraga from "./BojePretraga";

// import BackToTop from "./BackToTop";


const SearchResultsColor = () => {
    const [error, setError] = useState(null);
    const [colors, setColors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [prikaz, setPrikaz] = useState([]);

    

    const globalCtx = useContext(GlobalContext);
    const searchStringValue = globalCtx.searchStringValue;






    useEffect(() => {
        getBoje(searchStringValue);
    }, [searchStringValue]);

    const getBoje = async (searchStringValue) => {
        const url = "./PeriodicTableJSON.json";

        try {
            const response = await axios.get(url);
            const data = response.data.elements;
            const filterData = data.filter((color) => {
                return (
                  color.name.toLowerCase().includes(searchStringValue.toLowerCase())

                )

            });
            console.log("spisak boja", data);
            console.log("Pretraga boja", filterData);
            setIsLoading(false);

            setColors(filterData);
            setPrikaz(filterData.length);

        } catch (err) {
            setError(err);
            setIsLoading(false);

        }

    };



    if (isLoading) {
        return <Loader />
    } else if (prikaz == 0) {
        return (
            <>
            <div><BojePretraga /></div>
            <h2>Ništa slično nije pronađeno</h2></>
        )
    }


    return (
        <>
            <table className="cities">
                <thead >

                    <tr>
                        <th colSpan={2}>
                            <BojePretraga />

                        </th>
                    </tr>
                    <tr>
                        <th className="state">Broj boja:</th>
                        <th className="nameCity">{prikaz}</th>
                    </tr>
                    <tr><th colSpan={2}
                    className="borderBottom"></th></tr>

                </thead>

                {colors.map((dataObj) => (



                    <tbody key={dataObj.name}  >



                        <tr>
                            <td className="title">Ime:</td>
                            <td className="nameCity"
                           >
                                {dataObj.name}</td>

                        </tr>
                        <tr>
                            <td className="title">Heksadecimalni broj</td>
                            <td className="state"
                           >
                                {dataObj.category}</td>
                        </tr>
                   
                  


                   
                    </tbody>

                ))}
            </table>
            {/* <div><BackToTop /></div> */}

        </>

    );
};
export default SearchResultsColor;