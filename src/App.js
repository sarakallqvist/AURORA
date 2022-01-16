import logo from './logos/Aurora-logos_white.png';
import './App.css';
import {
  Route,
  Link,
  Routes
} from "react-router-dom";
import { HomeRoute } from './routes/home';
import { TestRoute } from './routes/test';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/test" element={<TestRoute />} />
      </Routes>
    </div>
  );
}

export default App;
