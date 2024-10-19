import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <div className="container mt-5">
        <h2>TV APPS</h2>
        <div className="d-flex gap-3"> {/* Flexbox for horizontal layout */}
          <Link to="/netflix">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"
              alt="Netflix"
              width="100"
            />
          </Link>
          <Link to="/hbo">
            <img
              className="hbo" 
              src="https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg"
              alt="HBO Max"
              width="100"
            />
          </Link>
          <Link to="/hulu">
            <img
              className="hulu" 
              src="https://upload.wikimedia.org/wikipedia/commons/2/20/Hulu_2019.svg"
              alt="Hulu"
              width="100"
            />
          </Link>
          <Link to="/prime">
            <img
              className="prime"
              src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png"
              alt="Prime Video"
              width="100"
            />
          </Link>
        </div>

        <Routes>
          <Route path="/:id" element={<Child />} />
        </Routes>
      </div>
    </Router>
  );
}

function Child() {
  let { id } = useParams(); // Extract the 'id' parameter from the URL

  return (
    <div className="mt-3">
      <h3>
        You Selected: <span>{id.charAt(0).toUpperCase() + id.slice(1)}</span>
      </h3>
    </div>
  );
}

