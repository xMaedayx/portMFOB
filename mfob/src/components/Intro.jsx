import styled from "styled-components";
import Navbar from "./Navbar";
import anImage from "../images/hero.png";





const Article = styled.article`
  height: 100vh;
  background-color: #c3b1e1;
`;

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
const Title = styled.div`
  font-size: 50px;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const Text = styled.div`
  height: 5px;
  color: #fcacbf;
`;
const Description = styled.div`
  font-size: 20px;
  color: #b0808c;
`;
const Button = styled.button`
  background-color: #9caf88;
  color: #ffffff;
  font-weight: 500;
  width: 150px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const Bottom = styled.div`
  flex: 5;
  position: relative;
`;
const Img = styled.img`
  
  width: 500px;
  height: 500px;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;

  animation: animate 2s infinite ease alternate;
  @keyframes animate {
    to {
      transform: translateY(30px);
    }
  }
`;

const Intro = () => {
  return (
    <Article>
      <Navbar />
      <Section>
        <Top>
          <Title>Quoi de beau? Welcome!</Title>
          <Content>
            <Text>
              I'm Meghan Farris O'Brien, a full-stack web developer based in the
              United States.
            </Text>
          </Content>
          <Description>
         back end
          </Description>
          <Button > Learn more about me</Button>
        </Top>
        <Bottom>
          <Img src={anImage} alt="character"/>
        </Bottom>
      </Section>

    </Article>
  );
};
export default Intro;



