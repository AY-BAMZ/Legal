import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './component/About/About';
import Practices from './component/Practices/Practices';
import Careers from './component/Careers/Careers';
import TheFirm from './component/TheFirm/TheFirm';
import AttorneyBody from './component/Attorneys/AttorneyBody';
// import AttorneyPage from './component/Attorneys/AttorneyPage';
import ContactUs from './component/ContactUs/ContactUs';
import RenderAttorneyPage from './component/Attorneys/RenderAttorneyPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="thefirm" element={<TheFirm />} />
        <Route path="attorneys" element={<AttorneyBody />} />
        <Route path="practices" element={<Practices />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="/attorney/:id" element={<RenderAttorneyPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
