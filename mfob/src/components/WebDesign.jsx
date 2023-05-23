import styled from "styled-components";


const Description = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;

  }
`;

const WebDesign = () => {
  return (
    <>
      <Description>
      <p>
          My GitHub projects:
          <br />
          <a href="https://github.com/xMaedayx/PWAtext.git">Project 1</a>
          <br />
          <a href="https://github.com/xMaedayx/Public-Interest-Press.git">Project 2</a>
          <br />
          <a href="https://github.com/xMaedayx/SequenceCMS.git">Project 3</a>
        </p>
      </Description>
    </>
  );
};

export default WebDesign;