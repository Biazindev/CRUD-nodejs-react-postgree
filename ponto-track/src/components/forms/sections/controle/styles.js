import styled from 'styled-components';

export const Titulo = styled.h1`
     color: #101010;

     span{
       color: #F0AA00;
     }
`

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  height: 100vh;
  border-radius: 16px;
  width: 100%;

  @media (max-width: 480px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
    }
`;

export const Container = styled.div`
  flex: 1;
  padding: 20px;
  text-align: left; 
  margin-left: 48px;

   @media (max-width: 480px) {
    margin-top: 8px;
    margin-bottom: -20px;
    }
  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  h4 {
    font-size: 16px;
    line-height: 1.5;
    color: #555;
    width: 286px;
    font-weight: 400;
  }

  span {
    color: #F0AA00;
    font-family: "Baloo Da 2", Sans-serif;
    font-weight: 800;
    font-style: italic;
  }
`;

export const Aside = styled.aside`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    img {
    width: 100%; 
    height: auto;
  }
    }
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

export const Botao = styled.button`
    font-weight: 900;
    fill: #FFFFFF;
    color: #FFFFFF;
    background-color: #3583CF;
    border-radius: 6px 6px 6px 6px;
    padding: 20px 50px 20px 50px;
    border: none;
    margin-top: 24px;
    cursor: pointer;
`;