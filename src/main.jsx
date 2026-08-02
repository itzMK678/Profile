import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./Index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<HelmetProvider>
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
</HelmetProvider>
)
