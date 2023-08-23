import React from "react";
import "./App.css"
import Home from "./Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import SingleMovie from "./SingleMovie";
import { Error } from "./Error";


function App() {
  return (
   <>
<Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="movie/:id" element={<SingleMovie/>}/>
    <Route path="*" element={<Error/>}/>
  </Routes>
</Router>
   </>
  );
}

export default App; 
