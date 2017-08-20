import styled from "styled-components";

export const Header = styled.header`
  background-color: #35424A;
  padding-top: 20px;
  min-height:50px;

  a{
    color: #fff;
    text-transform: capitalize;
    text-decoration: none;
  }

  a:hover{
    color: #ccc;
  }

  li{
    float: left;
    display: inline;
    padding: 0 20px;
  }

  nav{
    float: right;
    margin-top: 3px;
  }
`;
