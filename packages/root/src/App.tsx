import * as React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "../src/pages/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<>login</>}/>
    </Routes>
  );
}

export default App;
