import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from './App.tsx';
import './index.css';
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);
