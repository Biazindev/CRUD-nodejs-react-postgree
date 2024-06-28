import styled from 'styled-components';

export const TituloContainer = styled.h2`
    margin-top: -140px;
    color: #101010;
    margin: 0px 0px 10px 0px;
    font-family: "Ubuntu", Sans-serif;
    font-size: 55px;
    font-weight: 600;
    letter-spacing: -1px;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; 
  text-align: center;
  
  @media (max-width: 480px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
    }
  }
  h1 {
    margin-bottom: 40px;
    color: #FFB701;
  }

  .numbers {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    }
  }

  .numbers > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
    @media (max-width: 480px) {
    text-align: center;
    }
  }

  .numbers > div h1 {
    font-size: 3rem;
    margin-bottom: 10px;
     @media (max-width: 480px) {
     font-size: 2rem;
     margin: 0;
     }
  }

  .numbers > div h4 {
    font-size: 1.2rem;
    font-weight: 400;

    @media (max-width: 480px) {
    font-size: 1rem;
    margin: 0;
    }
  }

  @media (max-width: 480px) {
    display: block;
  }
`;
