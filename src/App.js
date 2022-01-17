import logo from './logos/Aurora-logos_black.png';
import './App.css';
import {
  Route,
  Link,
  Routes
} from "react-router-dom";
import { HomeRoute } from './routes/home';
import { TestRoute } from './routes/test';
const homeIcon = require('./icons/home.svg');
const exploreIcon = require('./icons/infinity.svg');
const userIcon = require('./icons/user.svg');
const cameraIcon = require('./icons/camera.svg');
const searchIcon = require('./icons/search.svg');

function App() {
  return (
    <div className="App">
      <nav>
        
        <Link to="/"><img src={homeIcon.default} className='icon-nav'></img></Link>
        <Link to="/test"><img src={exploreIcon.default} className='icon-nav'></img></Link>
        <Link to="/"><img src={userIcon.default} className='icon-nav'></img></Link>
        <Link to="/"><img src={cameraIcon.default} className='icon-nav'></img></Link>
        <Link to="/"><img src={searchIcon.default} className='icon-nav'></img></Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/test" element={<TestRoute />} />
      </Routes>
    </div>
  );


}

export default App;
