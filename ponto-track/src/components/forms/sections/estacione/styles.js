import styled from "styled-components";


export const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white; 
  h1 {
    margin: 0;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
    color: white;
    font-size: 56px;
  }
     h2 {
    margin: 0;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
    color: #F0AA00;
    font-size: 56px;
    background-color: #000;
    border-radius: 4px;
    padding:
  }

  button {
  display: block;
  margin: 20px auto 0;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
}
    @media (max-width: 480px) {
    h1, h2 {
    font-size: 24px;
    }
  }
 
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  img {
    width: 100%;
    height: auto;
    border-radius: 16px;
  }
`;

export const Section = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;