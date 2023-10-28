import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import dataAtom from "../../public/PeriodicTableJSON.json";
import SearchPlace from "./SearchPlace";




const AtomDet = (props) => {

  const [error, setError] = useState(null);
  const [atoms, setAtoms] = useState([]);
  const [image, setImage] = useState([]);

  const params = useParams();



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



  // dole preko axiosa

  useEffect(() => {
    getAtoms();
  }, []);


  const getAtoms = () => {
    const atomNum = params.atomNum;
    console.log("doslo sa klikom", atomNum - 1)

    const data = dataAtom.elements;

    console.log("Detalj atoma bez axios", data[atomNum - 1]);
    setAtoms(data[atomNum - 1]);
    setImage(data[atomNum - 1].image);
  }





  return (
    <>
      <div><SearchPlace /></div>

      <div className="fizika">

        <h1>{atoms.name}</h1>
        <div className="symbol">
          {atoms.symbol}</div>





        <div className="fizika" >

          <strong>Category: {atoms.category}</strong>

          <strong>Discovered by: {atoms.discovered_by}</strong>
          <strong>Phase: {atoms.phase}</strong>
          <strong>Appearance: {atoms.appearance}</strong>
          <strong>Atomic_mass: {atoms.atomic_mass}</strong>
          <strong>Density: {atoms.density} </strong>
          <strong>Melt: {atoms.melt / 10.17} C</strong>
          <strong>Electron configuration: {atoms.electron_configuration}
          </strong>
          <strong>Source: <a href={atoms.source} target="_blanc">
            Wikipedia</a></strong>
          <strong>{atoms.summary}</strong>


          <strong>
            <img
              className="imgHold"
              src={image.url}
              alt="nema slike" ></img>
          </strong>
          <p>{image.attribution}</p>
          <h3>{image.title}</h3>


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
    </>
  )
}
export default AtomDet;