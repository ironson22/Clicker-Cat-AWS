import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Admin from "./Pages/Admin";

const App = () => {
  //Routes for the application
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/admin" element={<Admin />}/>
      </Routes>
    </Router>
  );
}

export default App;
