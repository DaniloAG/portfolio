import styled from "styled-components";
import codingBackground from "../../assets/img/coding-background.jpg";

export const HomeSection = styled.div`
  clear: both;
  background-image: url(${codingBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  height: 92.6vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  .wrapper{
    margin-top: -10%;
  }

  h1{
    color: #fff;
    font-size: 30px;
    letter-spacing: 0.05em;
    font-weight: 700;
  }

  h2{
    color: #595959;
    letter-spacing: 0.1em;
    font-size: 20px;
    font-weight: 200;
  }

  a{
    text-decoration: none;
  }

  a:visited{
    color: inherit;
  }

  li{
    display: inline;
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
  a:hover{
    color: #000;
  }
`;

export const Facebook = styled.li`
  a:hover{
    color: #3b5998;
  }
`;

export const LinkedIn = styled.li`
  a:hover{
    color: #0976b4;
  }
`;
