// import { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import styles from "./styles.module.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Sidebar_copy from "./Sidebar_copy";
export default function New_hope(){
    return(
        <>
        <Sidebar_copy/>

        <BrowserRouter>
           <Routes>
              <Route path="/profile/oppr" element={<Dashboard flag="1"/>} /> 
              <Route path="/profile/status" element={<Dashboard flag="2"/>} />
              {/* <Route path="/faq" element={<Dashboard/>} /> */}
              {/* <Route path="/setting" element={<Dashboard/>} />  */}
          </Routes> 
        </BrowserRouter>
        </>
    )
}