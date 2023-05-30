import React from "react";
import styled from 'styled-components';
import Intro from './components/Intro';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import DataScience from "./components/DataScience";
import WebDesign from "./components/WebDesign";
import AppDevelopment from "./components/AppDevelopment"; 
import MachineLearning from "./components/MachineLearning";




const Article = styled.article`
height: 100vh;
background-color: #B2AC88; `;

function App() {
  return (
    <Article> 
     <Intro/>
     <About/>
     <Portfolio/>
     <Contact/>
     <WebDesign />
     <DataScience />
     <AppDevelopment />
     <MachineLearning />



  </Article>
  );
}

export default App;
