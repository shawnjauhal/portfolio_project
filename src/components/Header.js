import React from "react";
import Typed from "react-typed";


const Header = () => {
    return (
     <div className="header-wrapper">
        <div className="main-info">
          <h1>Shawn Jauhal Portfolio</h1>
          <Typed
            className="typed-text"
            strings={["Web Design", "Software Development", "Cyber Security", "Unity Game Development"]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
          <a href="#" className="btn-main-offer">CONTACT ME</a>
        </div>
     </div>
    )
}

export default Header
