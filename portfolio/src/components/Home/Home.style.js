import styled from "styled-components";

export const HomeSection = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    padding: 0 20px;
`;

export const HomeHeader = styled.h1`
  display: block;
  color: #000;
  font-size: 30px;
  letter-spacing: 0.05em;
  font-weight: 700;
`;

export const HomeSubHeader = styled.h2`
  color: #595959;
  letter-spacing: 0.1em;
  font-size: 20px;
  font-weight: 200;
`;

export const SocialMedia = styled.ul`
  list-style: none;
  a:link{
    text-decoration: none;
  }

  a:visited{
    text-decoration: none;
    color: inherit;
  }

  a:active{
    text-decoration: underline;
  }

  li{
    margin: 0 30px;
    font-size: 2.2em;
    position: relative;
    color: #b3b3b3;
  }

  a > p {
    display: none;
    font-size: 0.5em;
    position: absolute;
  }
`;

export const GitHub = styled.li`
  display: inline-block;
  a:hover{
    color: #000;
  }
`;

export const Facebook = styled.li`
  display: inline-block;
  a:hover{
    color: #3b5998;
  }
`;

export const LinkedIn = styled.li`
  display: inline-block;
  a:hover{
    color: #0976b4;
  }
`;
