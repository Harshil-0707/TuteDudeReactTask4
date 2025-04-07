import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css";

// Lazy load Form and About pages
const Registration = lazy(() => import("./pages/Registration"));
const Team = lazy(() => import("./pages/Team"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content-container">
          <Suspense
            fallback={
              <div className="text-center p-5">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/team" element={<Team />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
