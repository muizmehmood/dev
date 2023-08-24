import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ServicesComponent from './components/ServicesComponent';
//import Image_with_Description from './components/Image_with_description';
//import Cards from './components/Card';
//import Slider from './components/Slider';
//import AnimatedCard from './components/AnimatedCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <ServicesComponent/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
