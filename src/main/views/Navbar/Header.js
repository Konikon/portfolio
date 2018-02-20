import React from "react";
import {Link} from "react-router-dom";
import Ms from "../images/Msaffron.png"
import linkedin from "../../images/linkedin.jpg";
import github3 from "../../images/github3.png"


function Header(){
    return(
      <div className="header_wrap">
        <img src={Ms} alt="logo" ></img>
        <div><span className="landPage_name">M<span >akarand</span> A K<span >armarkar </span></span></div>
          <div >
              <Link to="/Projects">Projects</Link>
              <Link to="/Resume"> Resume </Link>

                <a target="_tab" href="https://github.com/Konikon"><i className="nav-link fa fa-3x fa-github"></i></a>
                <a target="_tab" href="https://www.linkedin.com/in/mkarmarkar/"><i className="nav-link fa fa-3x fa-linkedin"></i></a>
            </div>
      </div>
    )
}

export default Header;
