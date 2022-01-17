import { useState } from "react";
import { SignIn } from "../../components/sign-in";

require("./style.css");


export function HomeRoute()
{
    const [currentUser, setCurrentUser] = useState();
    const [imageFeed, setImageFeed] = useState([

    ]);

    function handleAuth(username, password)
    {
        setCurrentUser(username);
    }

    return <div className="home-route">

        {currentUser ? <div>Hej {currentUser}!</div> : null}
        {currentUser ? <input type="button" value="Sign out" onClick={() => setCurrentUser()} /> : <SignIn onAuthenticate={handleAuth} />}


    </div>
}