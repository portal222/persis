import React from "react";
import data from "../../public/PeriodicTableJSON.json";

import { useNavigate } from "react-router-dom";



const colorMap = {
  "noble gas": "#c5cae9",
  "alkaline earth metal": "#ff9e80",
  "diatomic nonmetal": "#e0e0e0",
  "alkali metal": "#ffccbc",
  "transition metal": "#c8e6c9",
  "post-transition metal": "#d1c4e9",
  "actinide": "#fff9c4",
  "polyatomic nonmetal": "#ffe0b2",
  "unknown, probably transition metal": "#e8f5e9",
  "unknown, probably post-transition metal": "#ede7f6",
  "unknown, but predicted to be an alkali metal": "#fbe9e7",
  "unknown, probably metalloid": "#e0f7fa",
  "unknown, predicted to be noble gas": "#e8eaf6",
  lanthanide: "#b2dfdb",
  metalloid: "#b2ebf2",
};

const Element = () => {

  const navigate = useNavigate();



  const handleClick = (atomNum) => {
    console.log("klik na atomi", atomNum);
    const LinkTo = `/${atomNum}`;
    navigate(LinkTo);
  }
  const handleCategory = (categoryName) => {
   
    const LinkTo = `/catname/${categoryName}`;
    navigate(LinkTo);
  }

  return (
    <>


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
           
            }}
          >
            <div
            >{element.symbol}</div>
            <small className="number">{element.number}</small>
            <small className="name">{element.name}</small>
          </div>



        ))}
      </div>
      <table className="category">
        <tbody>
          <tr>
            <td
              style={{
                background: colorMap["noble gas"],
                padding: "10px"
              }}>
              Noble gas</td>
            <td
              style={{
                background: colorMap["unknown, predicted to be noble gas"],
                padding: "10px"
              }}>
              Predicted to be noble gas
            </td>
            <td
              style={{
                background: colorMap["polyatomic nonmetal"],
                padding: "10px"
              }}>
              Polyatomic nonmetal
            </td>


          </tr>
          <tr>
            <td
              style={{
                background: colorMap["transition metal"],
                padding: "10px"
              }}>
              Transition metal
            </td>
            <td
              style={{
                background: colorMap["unknown, probably transition metal"],
                padding: "10px"
              }}>
              Probably transition metal
            </td>
            <td
              style={{
                background: colorMap["actinide"],
                padding: "10px"
              }}>
              Actinide
            </td>


          </tr>
          <tr>

            <td
              style={{
                background: colorMap["post-transition metal"],
                padding: "10px"
              }}>
              Post-transition metal
            </td>

            <td
              style={{
                background: colorMap["unknown, probably post-transition metal"],
                padding: "10px"
              }}>
              Probably post-transition metal
            </td>
            <td
              style={{
                background: colorMap["alkaline earth metal"],
                padding: "10px"
              }}>Alkaline earth metal</td>
          </tr>

          <tr>
            <td
              style={{
                background: colorMap.metalloid,
                padding: "10px"
              }}>
              Metalloid
            </td>

            <td
              style={{
                background: colorMap["unknown, probably metalloid"],
                padding: "10px"
              }}>
              Probably metalloid
            </td>
            <td
              style={{
                background: colorMap["diatomic nonmetal"],
                padding: "10px"
              }}>Diatomic nonmetal</td>
          </tr>

          <tr>
            <td
              style={{
                background: colorMap["alkali metal"],
                padding: "10px"
              }}>
              Alkali metal
            </td>

       
            <td
              style={{
                background: colorMap["unknown, but predicted to be an alkali metal"],
                padding: "10px"
              }}>
              Predicted to be an alkali metal
            </td>


            <td
              style={{
                background: colorMap.lanthanide,
                padding: "10px"
              }}>
              Lanthanide
            </td>
          </tr>

        
          <tr>
            <td className="place"></td>
          </tr>
        </tbody>
      </table>



     

    </>
  );
};

export default Element;

