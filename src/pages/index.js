import React from "react";
import Link from "gatsby-link";
import Card from "../components/Card";

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          Join in<br />Fashion Teller
        </h1>
        <p>
          This is the center of fashion<br />
          Created by Viduy
        </p>
        <Link to="#discover">go to discover</Link>
        <div className="logos">
          <img src={require("../images/logo-sketch.png")} width="50" alt="" />
          <img src={require("../images/logo-figma.png")} width="50" alt="" />
          <img src={require("../images/logo-studio.png")} width="50" alt="" />
          <img src={require("../images/logo-framer.png")} width="50" alt="" />
          <img src={require("../images/logo-react.png")} width="50" alt="" />
          <img src={require("../images/logo-swift.png")} width="50" alt="" />
        </div>
        <svg
          width="100%"
          height="172"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path fill="black">
            <animate
              repeatCount="indefinite"
              fill="freeze"
              attributeName="d"
              dur="20s"
              values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
            M0 87.1596C316 87.1597 444 160 884 52.0001C1324 -55.9999 1320.29 34.966 1538 71.251C1814 117.251 2156 189.252 2560 87.1597V233.161L0 233.161V87.1596Z;
            M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
            M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;"
            />
          </path>
        </svg>
      </div>
    </div>
    <div className="Cards" id="discover">
      <h2>New Comming</h2>
      <div className="CardGroup">
        <Card
          title="React for Desingers"
          text="12 sections"
          image={require("../images/wallpaper.jpg")} />
        <Card
          title="React for Desingers"
          text="12 sections"
          image={require("../images/wallpaper.jpg")} />
        <Card
          title="React for Desingers"
          text="12 sections"
          image={require("../images/wallpaper.jpg")} />
        <Card
          title="React for Desingers"
          text="12 sections"
          image={require("../images/wallpaper.jpg")} />
      </div>
      
    </div>
  </div>
);

export default IndexPage;
