import React from 'react';
import './App.css';
import Login from "./pages/Login";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Register from "./pages/Register";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">

    <BrowserRouter>
        <Nav />

        <main className="form-signin">

                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
        </main>
    </BrowserRouter>
    </div>
  );
}

export default App;
