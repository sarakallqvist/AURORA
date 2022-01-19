import { useState } from "react";
const logo = require('../../logos/logo.png');
//const AuroraIcon = require('../../logos/Aurora-icon.png')

require("./style.css");
export function HomeRoute()
{
    return <div className="home-route">
        <h3> Welcome to Aurora </h3>
        <div>  When you follow people you will see the photos they publish here. </div>
        <div>
            <img src={logo} className='logo-home'/>
        </div>
        <div className="slogan" > Nature never goes out of style </div>
    </div>
}