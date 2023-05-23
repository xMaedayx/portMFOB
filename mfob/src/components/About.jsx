import React from 'react';
import styled from 'styled-components';

const Article = styled.article`
height: 100vh;
background-color: #DAF7A6; `;

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1000px;
  display: flex;
  justify-content: space-between;
`;
const Top = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
`;
const Bottom = styled.div`
  flex: 5;
  position: relative;
`;
const Content = styled.div`
display: flex;
align-items: center;
gap: 15px;
`;
const Text = styled.div`
height:5px;
color: #FCACBF;
`;
const Title = styled.h1`
font-size: 50px;
`;
const Description = styled.div`
font-size: 20px;
color: #B0808C;

`;
const Button = styled.div`
background-color: #B8889F;
color: #ffffff;
font-weight: 500;
width: 150px;
padding: 10px;
border: none;
border-radius: 5px;
cursor: pointer;
`;
const About = () => {
    return (
        <Article>
           <Section>
            <Top> 
                <h1> 23 years young with a passion for the right thing. </h1>
            </Top>
            <Bottom>
                <Title> Her Story</Title>
                <Content>
                    <Text> ARIZONA </Text>
                    </Content>
                    <Description> Meghan Farris O'Brien was born in Scottsdale, Arizona on September 24, 1999. </Description>
                    <Button>See my work!</Button>   
            </Bottom>   
           </Section>
        </Article>
    ) };
    export default About;