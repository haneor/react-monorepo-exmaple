import * as React from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../src/pages/home";
import Login from "@packages/legacy/src/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
