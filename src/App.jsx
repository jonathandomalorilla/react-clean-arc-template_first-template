import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header.jsx";
import Aside from './components/Aside.jsx';
import Content from './components/Content.jsx';



function App() {
  return (
     <div class="app-wrapper">
        <Header />
        <Aside />
        <Content />
    </div>
  );
}

export default App;
