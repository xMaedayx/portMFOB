import React from 'react';
import styled from 'styled-components';
import WebDesign from "./WebDesign";
import DataScience from "./DataScience";
import AppDevelopment from "./AppDevelopment";
import Writings from "./Writings";
import { useState } from "react";
import MachineLearning from './MachineLearning';



const data = [
  "Web Design",
  "Data Science",
  "App Development",
  "Writings",
  "Machine Learning",
]

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;
`;

const Container = styled.div`
height: 100vh;
background-color: #C0C791;
scroll-snap-align: center;
justify-content: center;
`;
const List = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 25px;

`;
const ListItem = styled.li`
font-size: 90px;
font-weight: bold;
cursor: pointer;
color: transparent;
-webkit-text-stroke: 1px #ffffff;
position: relative;
::after{
  content: "${(props) => props.text}";
  position: absolute;
  top: 0;
  left: 0;
  color: #0050B5;
  width: 0px;
  overflow: hidden;
  white-space: nowrap;

}
// &:hover{
//   ::after{
//     animation: moveAround 0.5s linear both;
//     @keyfram moveAround {
//       to{width: 100%}
//     }
//   }
// }
// `;
const Top = styled.div`
flex:1;
display: flex;
align-items: center;
`;
const Bottom = styled.div`
height: 100vh;
background-color: #C0C791;
scroll-snap-align: center;
justify-content: center;
`;

const Portfolio = () => {
  const [work, setWork] = useState("Web Design");
  return (
<Section>
<Container>
  <Top>
    <List>
      {data.map((item) => (
        <ListItem key={item} text={item} onClick={() => setWork(item)}>
          {item}
        </ListItem>
      ))}
    </List>
  </Top>
  <Bottom>
    {work === "Web Design" ? (
      <WebDesign />
    ) : work === "Data Science" ? (
      <DataScience />
    ) : work === "App Development" ? (
      <AppDevelopment />
    ) : work === "Writings" ? (
        <Writings />
    ) : ( <MachineLearning /> )}
  </Bottom>
</Container>

</Section>
);
};
 

export default Portfolio