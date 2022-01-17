import logo from './logos/Aurora-logos_black.png';
import './App.css';
import {
  Route,
  Link,
  Routes
} from "react-router-dom";
import { ImageRoute } from './routes/image-feed';
import { ExploreRoute } from './routes/explore';

import { SignIn } from './components/sign-in';
import { useState } from 'react';
import { HomeRoute } from './routes/home';
import { ProfileRoute } from './routes/profile';
const homeIcon = require('./icons/home.svg');
const exploreIcon = require('./icons/infinity.svg');
const userIcon = require('./icons/user.svg');
const cameraIcon = require('./icons/camera.svg');
const searchIcon = require('./icons/search.svg');

function App() {
  const [currentUser, setCurrentUser] = useState();
  function handleAuth(username, password)
    {
        setCurrentUser(username);
    }

  return (
    <div className="App">
      <nav>

        <Link to="/"><img src={homeIcon.default} className='icon-nav'></img></Link>
        <Link to="/explore"><img src={exploreIcon.default} className='icon-nav'></img></Link>
        <Link to="/profile"><img src={userIcon.default} className='icon-nav'></img></Link>
        <Link to="/publish"><img src={cameraIcon.default} className='icon-nav'></img></Link>
        <Link to="/"><img src={searchIcon.default} className='icon-nav'></img></Link>
      </nav>
      {currentUser ? (
            <div>
                <input type="button" value="Sign out" onClick={() => setCurrentUser()} />
                <Routes>
                  <Route
                    path="/"
                    element={<HomeRoute />}
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                  />
                  <Route
                    path="/publish"
                    element={<ImageRoute />}
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                  />
                  <Route path="/explore" element={<ExploreRoute />} />
                  <Route path="/profile" element={<ProfileRoute />} />
                </Routes>
            </div>
        ) : (
            <SignIn onAuthenticate={handleAuth} />
        )}

    </div>
  );


}

export default App;
