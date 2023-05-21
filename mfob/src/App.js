import React from "react";
import styled from 'styled-components';
import Intro from './components/Intro';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

const Article = styled.article`
height: 100vh;
background-color: #B2AC88; `;

function App() {
  return (
    <Article> 
     <Intro/>
     <About/>
     <Contact/>
     <Portfolio/>
  </Article>
  );
}

export default App;
