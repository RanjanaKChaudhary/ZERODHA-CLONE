import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import "./index.css";
import  Home from "./components/Home";



 
function App(){
return(
   <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
}

export default App;




