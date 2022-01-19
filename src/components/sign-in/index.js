import { useState } from "react"

require("./style.css");


export function SignIn(props)
{
    const {
        onAuthenticate,
        onRegister,
        error,
    } = props;

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [authMode, setAuthMode] = useState('authenticate');

    return <div className="signin-form">
        <div>
            <input
                type='button'
                value='Sign in'
                className={authMode === 'authenticate' ? 'active' : undefined}
                onClick={() => setAuthMode('authenticate')}
                />
            <input
                type='button'
                value='Register'
                className={authMode === 'Register' ? 'active' : undefined}
                onClick={() => setAuthMode('register')}
            />
        </div>

        {authMode === 'authenticate' ? (
            <div>
                <form onSubmit={() => onAuthenticate(username, password)} >
                    <div className="userName">
                        <div className="label">Username or email: </div>
                        <div>
                            <input type="text" onChange={e => setUsername(e.target.value)} required/>
                        </div>
                    </div>
                    <div className="password">
                        <div className="label">Password: </div>
                        <div>
                            <input type="password" onChange={e => setPassword(e.target.value)} required/>
                        </div>
                    </div>
                    {error ?
                        <div className="error">
                            {error}
                        </div> :null
                    }
                    <div>
                        <span>
                            <input type="submit" value="Sign in"  />
                        </span>
                    </div>
                </form>
            </div>
        ) : null}

        {authMode === 'register' ? (
            <div>
                <form onSubmit ={() => {
                    onRegister(username, email, password)
                    setAuthMode('authenticate');
                        }
                }>
                <div className="userName">
                    <div className="label">Username: </div>
                    <div>
                        <input type="text" onChange={e => setUsername(e.target.value)} required/>
                    </div>
                </div>
                <div className="email">
                    <div className="label">E-mail: </div>
                    <div>
                        <input type="text" onChange={e => setEmail(e.target.value)} required />
                    </div>
                </div>
                <div className="password">
                    <div className="label">Password: </div>
                    <div>
                        <input type="password" onChange={e => setPassword(e.target.value)} required/>
                    </div>
                </div>
                <div>
                    <span>
                        <input type="submit" value="Submit" />
                    </span>
                </div>
                </form>
            </div>
        ) : null}
    </div>
}
