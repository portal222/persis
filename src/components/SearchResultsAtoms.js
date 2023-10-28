import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';



import GlobalContext from "./GlobalContext";
import SearchPlace from "./SearchPlace";
import BackToTop from "./BackToTop";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";



const SearchResultsAtoms = () => {
    const [error, setError] = useState(null);
    const [atoms, setAtoms] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [results, setResults] = useState([]);


    const globalCtx = useContext(GlobalContext);
    const searchStringValue = globalCtx.searchStringValue;

    const navigate = useNavigate();

    // odavde na dole ubaceno 3d gledanje
    const modelRef = React.useRef();
    const [annots, setAnnots] = useState([]);

    const handleClick = (event) => {
        const { clientX, clientY } = event;

        if (modelRef.current) {
            let hit = modelRef.current.positionAndNormalFromPoint(clientX, clientY);
            if (hit) {
                setAnnots((annots) => {
                    return [...annots, hit];
                });
            }
        }
    };

    const getDataPosition = (annot) => {
        return `${annot.position.x} ${annot.position.y} ${annot.position.z}`;
    };

    const getDataNormal = (annot) => {
        return `${annot.normal.x} ${annot.normal.y} ${annot.normal.z}`;
    };

    // kraj dodatka za 3d





    useEffect(() => {
        getAtoms(searchStringValue);
    }, [searchStringValue]);

    const getAtoms = async (searchStringValue) => {

        const url = "../../PeriodicTableJSON.json";

        try {
            const response = await axios.get(url);
            const data = response.data.elements;
            const filterData = data.filter((atom) => {
                return (
                    atom.name.toLowerCase().includes(searchStringValue.toLowerCase())

                )

            });
            console.log("spisak atoma", data);
            console.log("Pretraga gradova", filterData);
            setIsLoading(false);

            setAtoms(filterData);
            setResults(filterData.length);
        } catch (err) {
            setError(err);
            setIsLoading(false);
        }
    };



    if (isLoading) {
        return <Loader />
    } else if (results == 0) {
        return (
            <>
            <div><SearchPlace /></div>

                <table className="fizika">
                    <thead>
                  
                        <tr>
                            <th>Nothing found</th>
                        </tr>
                    </thead>
                </table></>
        )
    }

    return (
        <>
            <div><SearchPlace /></div>

            <table className="fizika">
                <thead >

                    <tr>
                        <th colSpan={2}>

                        </th>
                    </tr>
                    <tr className="results">
                        <th>Number of atoms</th>
                        <th>{results}</th>
                    </tr>

                </thead>


                {atoms.map((atoms) => (

                    <div className="fizika">

                        <h1>{atoms.name}</h1>
                        <div className="symbol">
                            {atoms.symbol}</div>

                        <strong>Atom number: {atoms.number}</strong>



                        <div className="fizika" >

                            <strong>Category: {atoms.category}</strong>

                            <strong>Discovered by: {atoms.discovered_by}</strong>
                            <strong>Phase: {atoms.phase}</strong>
                            <strong>Appearance: {atoms.appearance}</strong>
                            <strong>Atomic_mass: {atoms.atomic_mass}</strong>
                            <strong>Density: {atoms.density} </strong>

                            <strong>Melt: {atoms.melt / 10.17} C</strong>
                            <strong>Source: <a href={atoms.source} target="_blanc">
                                Wikipedia</a></strong>
                            <strong>{atoms.summary}</strong>


                            <strong>
                                <img
                                    className="imgHold"
                                    src={atoms.image.url}
                                    alt="nema slike" ></img>
                            </strong>
                            <p>{atoms.image.attribution}</p>
                            <h3>{atoms.image.title}</h3>


                        </div>




                        {/* dodatak za 3d na dole */}
                        <model-viewer
                            src={atoms.bohr_model_3d}


                            shadow-intensity="1"

                            camera-controls
                            ar
                            ar-modes="webxr"
                            onClick={handleClick}
                            ref={(ref) => {
                                modelRef.current = ref;
                            }}
                            className="moduleView"
                        >
                            {annots.map((annot, idx) => (
                                <button
                                    key={`hotspot-${idx}`}
                                    className="view-button"
                                    slot={`hotspot-${idx}`}
                                    data-position={getDataPosition(annot)}
                                    data-normal={getDataNormal(annot)}
                                ></button>
                            ))}
                        </model-viewer>
                        {/* kraj dodatka za 3d */}
                        <div className="span"></div>

                    </div>
                    // <tbody key={dataObj.name} >



                    //     <tr>
                    //         <td >Name:</td>
                    //         <td >{dataObj.name}</td>
                    //         <td rowSpan={6}>
                    //             <img src={dataObj.image.url} className="imgHold" /></td>
                    //     </tr>
                    //     <tr>
                    //         <td >Symbol:</td>
                    //         <td className="symbol">

                    //             {dataObj.symbol}
                    //         </td>
                    //     </tr>
                    //     <tr>
                    //         <td >Category:</td>
                    //         <td >

                    //             {dataObj.category}
                    //         </td>
                    //     </tr>
                    //     <tr>
                    //         <td >Phase:</td>
                    //         <td >

                    //             {dataObj.phase}
                    //         </td>
                    //     </tr>
                    //     <tr>
                    //         <td className="atomicMass">Atomic mass :</td>
                    //         <td className="atomicMass">
                    //             {dataObj.atomic_mass}
                    //         </td>
                    //     </tr>
                    //     <tr>
                    //         <td >Boil:</td>
                    //         <td>
                    //             {dataObj.boil}
                    //         </td>
                    //     </tr>
                    //     <tr>
                    //         <td >Discovered by: :</td>
                    //         <td>
                    //             {dataObj.discovered_by}
                    //         </td>
                    //         <td>{dataObj.image.title}</td>

                    //     </tr>
                    //     <tr>
                    //         {/* <td className="lonLat">Summary: :</td> */}
                    //         <td colSpan={3} className="lonLat">
                    //             {dataObj.summary}
                    //         </td>
                    //     </tr>

                    // </tbody>
                ))}

            </table>





            <div>{<BackToTop />}</div>
        </>

    );
};
export default SearchResultsAtoms;