import React, { Component } from "react";
import {
  HomeSection,
  HomeHeader,
  HomeSubHeader,
  SocialMedia,
  GitHub,
  Facebook,
  LinkedIn
} from "./Home.style";

class Home extends Component{
  render(){
    return (
      <HomeSection>
        <HomeHeader>Danilo Gonzalez</HomeHeader>
        <HomeSubHeader>Lorem ipsum dolor sit amet.</HomeSubHeader>
        <SocialMedia>
          <GitHub>
            <a href="https://github.com/DaniloAG" target="_blank">
              <i className="fa fa-github" aria-hidden="true"></i>
              <p>GitHub</p>
            </a>
          </GitHub>
          <LinkedIn>
            <a href="https://www.linkedin.com/in/danilodamian" target="_blank">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
              <p>LinkedIn</p>
            </a>
          </LinkedIn>
          <Facebook>
            <a href="https://www.facebook.com/DaniloAntonioGee" target="_blank">
              <i className="fa fa-facebook" aria-hidden="true"></i>
              <p>Facebook</p>
            </a>
          </Facebook>
        </SocialMedia>
      </HomeSection>
    );
  }
}

export default Home;
