//Aakriti Code
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import { ToastContainer } from "react-toastify";

// import App from "./App";
// import "./index.css";
// import "react-toastify/dist/ReactToastify.css";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//       <ToastContainer
//         position="top-right"
//         autoClose={3000}
//       />
//     </BrowserRouter>
//   </React.StrictMode>
// );

//Updated code
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { ToastContainer, Bounce } from 'react-toastify'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <Router>
        <App />
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        pauseOnHover
        draggable={false}
        theme="light"
        transition={Bounce}
      />
    </HelmetProvider>
  </StrictMode>,
)