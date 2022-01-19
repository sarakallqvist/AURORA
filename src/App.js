
import './App.css';
import {
  Route,
  Link,
  Routes
} from "react-router-dom";
import { ImageRoute } from './routes/publish';
import { ExploreRoute } from './routes/explore';
import { SignIn } from './components/sign-in';
import { useState } from 'react';
import { HomeRoute } from './routes/home';
import { ProfileRoute } from './routes/profile';
import { SearchRoute } from './routes/search';
const homeIcon = require('./icons/home.svg');
const exploreIcon = require('./icons/infinity.svg');
const userIcon = require('./icons/user.svg');
const cameraIcon = require('./icons/camera.svg');
const searchIcon = require('./icons/search.svg');
const logo = require('./logos/Aurora-tree.png');


function App() {
  const [users, setUsers] = useState([]);
  const [currentUserID, setCurrentUserID] = useState();
  const [currentError, setCurrentError] = useState();

  const [imageFeed, setImageFeed] = useState([

  ]);

  function handleAuth(username, password)
  {
    var found = false;
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      if ((user.username === username || user.email === username) && user.password === password)
      {
        setCurrentError();
        setCurrentUserID(i);
        found = true;
        break;
      }
    }
    if (!found)
    {
      setCurrentError('User not found')
    }
  }

  function handleRegister(username, email, password)
  {
    setCurrentError();
    setUsers(prev => [
      ...prev,
      {
        username,
        email,
        password,
      },
    ])
  }

  function handleSetBio(bio)
  {
    setUsers(prev => {
      const res = [...prev];
      res[currentUserID].bio = bio;
      return res;
    })
  }

  return (
    <div className="App">
      <nav>
        <img src={logo} className='logo-nav'/>
        <Link to="/"><img src={homeIcon.default} className='icon-nav'></img></Link>
        <Link to="/explore"><img src={exploreIcon.default} className='icon-nav'></img></Link>
        <Link to="/profile"><img src={userIcon.default} className='icon-nav'></img></Link>
        <Link to="/publish"><img src={cameraIcon.default} className='icon-nav'></img></Link>
        <Link to="/search"><img src={searchIcon.default} className='icon-nav'></img></Link>
        {currentUserID !== undefined ? (
          <input type="button" value="Sign out" onClick={() => setCurrentUserID()} />
          ) : null
        }
      </nav>
      {currentUserID !== undefined ? (
            <div>

                <Routes>
                  <Route
                    path="/"
                    element={<HomeRoute />}
                  />
                  <Route
                    path="/publish"
                    element={<ImageRoute setImageFeed={setImageFeed} />}
                  />
                  <Route
                    path="/explore"
                    element={<ExploreRoute />}
                  />
                  <Route
                    path="/profile"
                    element={<ProfileRoute imageFeed={imageFeed} user={users[currentUserID]} setBio={handleSetBio} />}
                  />
                  <Route
                    path="/search"
                    element={<SearchRoute/>}
                  />
                </Routes>
            </div>
        ) : (
          <div>

            <SignIn onAuthenticate={handleAuth} onRegister={handleRegister}
            error={currentError}
            />

          </div>
        )}

    </div>
  );


}

export default App;
