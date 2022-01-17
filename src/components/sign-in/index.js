import { useState } from "react"

require("./style.css");


export function SignIn(props)
{
    const {
        onAuthenticate,
    } = props;

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    return <div className="signin-form">
        <div className="userName">
            <span className="label">Username or email: </span>
            <span>
                <input type="text" onChange={e => setUsername(e.target.value)} />
            </span>
        </div>
        <div className="password">
            <span className="label">Password: </span>
            <span>
                <input type="password" onChange={e => setPassword(e.target.value)} />
            </span>
        </div>
        <div>
            <span>
                <input type="button" value="Sign in" onClick={() => onAuthenticate(username, password)} />
            </span>
        </div>
    </div>
}