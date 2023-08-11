import React from 'react'
import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
// import React, { useState } from 'react';

import Textform from './Components/Textform';
import Alert from './Components/Alert';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ReactDOM from "react-dom/client";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {

  const[mode,setMode]=useState('light');
  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark Mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success")
    }
  }
  const[alert,setalert]=useState(null);
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1000);

  }

  return (
     <>
    {/* <Router> */}
    <Navbar name="MUQ" home="Home" about="About" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/> 
   
       {/* <div className="container my-3">
       <Switch>
            <Route path="/about" >
               <About mode={mode}/>
            </Route> */}
            {/* <Route path="/"> */}
               <Textform heading="Enter text to work with" showAlert={showAlert}mode={mode}/>  
            {/* </Route>   */}
        {/* </Switch>  */}
    
       
       {/* </div>
        </Router>     */}
  
    
    {/* {/* <Route path='/' element={   <Textform heading="Enter text to work with" showAlert={showAlert}mode={mode}/>}/> */}
  </> 
 
   
  );
  
}

export default App;
