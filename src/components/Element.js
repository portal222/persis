import React from "react";
import data from "../../public/PeriodicTableJSON.json";
// import "./PeriodicTable.css";
import { useNavigate } from "react-router-dom";
import SearchPlace from "./SearchPlace";


const colorMap = {
  "noble gas": "#bbdefb",
  "alkaline earth metal": "#ff9e80",
  "diatomic nonmetal": "#e0e0e0",
  "alkali metal": "#d7ccc8",
  "transition metal": "#c8e6c9",
  "post-transition metal": "#d1c4e9",
  "actinide": "#fff9c4",
  "polyatomic nonmetal": "#ffe0b2",
  "unknown, probably transition metal": "white",
  "unknown, probably post-transition metal": "#ffff8d",
  "unknown, but predicted to be an alkali metal": "white",
  "unknown, probably metalloid": "white",
  "unknown, predicted to be noble gas": "white",
  lanthanide: "#4AABAF",
  metalloid: "#73D2DE",
};

const PeriodicTable = () => {

  const navigate = useNavigate();



  const handleClick = (atomNum) => {
    console.log("klik na atomi", atomNum);
    const LinkTo = `/${atomNum}`;
    navigate(LinkTo);
  }

  return (
    <>
      <div><SearchPlace /></div>

      <div className="periodic-table">
        {data.elements.map((element) => (
          <div
            onClick={() => handleClick(element.number)}
            className="element"
            key={element.name}
            style={{
              gridRow: element.ypos,
              gridColumn: element.xpos,
              background: colorMap[element.category],
              // borderColor: colorMap[element.category],
            }}
          >
            <div
            >{element.symbol}</div>
            <small className="number">{element.number}</small>
            <small className="name">{element.name}</small>
          </div>
        ))}
      </div>
    </>
  );
};

export default PeriodicTable;

// deo projekta skinut sa neta periodic-table-css-master cela komponenta
// dodao sa onclick da bi izvukao podatak