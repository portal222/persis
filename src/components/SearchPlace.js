import React from "react";

import SearchBoxAtoms from "./SearchBoxAtoms"



const SearchPlace = () => {
 
    return (

        <div className="place">
        
           <SearchBoxAtoms placeholder={'Search Atoms'} linkTo={'/searchAtoms'} className="search" />
       

        </div>
    )

}
export default SearchPlace;