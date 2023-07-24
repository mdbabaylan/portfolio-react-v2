import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// let markObject = {
//   name: "Mark Daniel C. Babaylan",

//   softSkills: ["Customer Service", "Adaptability", "Accountability", 
//   "Leadership", "Self-reliance", "Teamwork"],

//   techSkils: ["React JS", "Express JS", "HTML/CSS/JS", "Solidity", "AWS S3/EB", "Mongo DB", 
//   "MySQL/Microsoft SQL", "PHP/C#/Java/Android Dev"],

//   message: "Adapt relentlessly and provide value"
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(markObject);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
