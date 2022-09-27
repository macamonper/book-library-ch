import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/header/NavBar";
import Home from "./components/Home";
import MyAccount from "./components/my-account-panel/MyAccount";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/search/:value" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
