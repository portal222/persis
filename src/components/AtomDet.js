import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import dataAtom from "../../public/PeriodicTableJSON.json";





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


      <div className="fizika">
        <div className="warp">

        <h1>{atoms.name}</h1>
        <div className="symbol">
          {atoms.symbol}
        </div>
        <div>Number:{atoms.number}</div>




          <div>Atomic mass: {atoms.atomic_mass}</div>

          <div>Group: {atoms.group}</div>
          <div>Period: {atoms.period}</div>
          <div>Category: {atoms.category}</div>

          <div>Discovered by: {atoms.discovered_by}</div>
          <div>Phase: {atoms.phase}</div>
          <div>Appearance: {atoms.appearance}</div>
          <div>Density: {atoms.density} </div>
          <div>Melt: {atoms.melt / 10.17} C</div>
          <div>Electron affinity: {atoms.electron_affinity}</div>
          <div>Electron configuration: {atoms.electron_configuration}
          </div>
          <div>Electronegativity pauling: {atoms.electronegativity_pauling}</div>
          <div>Source: <a href={atoms.source} target="_blanc">
            Wikipedia</a></div>
          <div className="summary">{atoms.summary}</div>


          <div>
            <img
              className="imgHold"
              src={image.url}
              alt="nema slike" ></img>
          </div>
          <p>{image.attribution}</p>
          <div>{image.title}</div>


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