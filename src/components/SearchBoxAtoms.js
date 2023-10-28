import React, { useRef, useContext } from "react";

import { Paper,InputBase,IconButton } from "@mui/material";

import { useNavigate } from "react-router-dom";
import GlobalContext from "./GlobalContext";

const SearchBoxAtoms = (props) => {

    const globalCtx = useContext(GlobalContext);

    const navigate = useNavigate();
    const searchString = useRef();

    const handleClickSearch = () => {
        console.log("klik za trazenje")
        if (searchString.current.value.trim().length === 0) {
            return false;
        }

        globalCtx.setSearchStringFn(searchString.current.value.trim());
        navigate(props.linkTo);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleClickSearch();
        }
    };

    // return (
    //     <>
    //     <div className="paper">
    //         <input type="text"
    //         autoFocus
    //         placeholder={props.placeholder}
    //         inputProps={{ 'ariel-label': 'search' }}
    //         value={searchString}
    //               inputRef={searchString}
    //             onKeyDown={handleKeyDown}
    //         ></input>
    //         <button
    //         type="button"
    //         onClick={handleClickSearch}
    //         aria-label='search'
    //         ></button>
            
    //         </div></>
    // )

    return (
        <Paper className="paper"
        component = 'form'
        se={{
            p: '2px 4px',
          
            alignItems: 'center',
          
            width: '20rem',
            backgroundColor: 'red',
        }}
        >
            <InputBase className="base"
            // sx={{ ml:1, flex: 1 }}
            autoFocus
            placeholder={props.placeholder}
            inputProps={{ 'ariel-label': 'search' }}
            inputRef={searchString}
            onKeyDown={handleKeyDown}
            />
            <IconButton 
            type='button'
            onClick={handleClickSearch}
            sx={{ p: '10px'}}
            aria-label='search'
            >
           
            </IconButton>
        </Paper>
    );
};
export default SearchBoxAtoms;
