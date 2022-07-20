import React from "react"; 
// import AutorenewIcon from '@mui/icons-material/Autorenew';

function Header(props) {

    return(
        <div className="heading">
           <h1 id = "random" onClick={props.random}>{props.title}</h1>
            {/* <AutorenewIcon color="primary" /> */}
        </div>
    )
}
// npm install @mui/material @mui/styled-engine-sc styled-components

export default Header;