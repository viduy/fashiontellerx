import React from "react";
import Link from "gatsby-link";
import Card from "../components/Card";
import Section from "../components/Section";
import Wave from "../components/Wave";
import Layout from "../Layouts/index.js";
import staticdata from "../../staticdata.json";
import Cell from "../components/Cell";
import styled from "styled-components";

const SectionCaption = styled.p`
    color: white;
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
    color: #94A4BA;
    text-align: center;
`

const SetctionCellGroup = styled.div`
    max-width: 800px;
    margin: 0 auto 100px;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    @media (max-width: 800px) {
        grid-template-columns: repeat(1, 1fr);
    }
`



const IndexPage = () => (
    <Layout>
        <div>
            <div className="Hero">
                <div className="HeroGroup">
                    <h1>Join in<br />Fashion Teller</h1>
                    <p>This is the center of fashion<br />Created by Viduy</p>
                    <Link to="/discover">go to discover</Link>
                    <div className="logos">
                        <img src={require("../images/logo-sketch.png")} width="50" alt="" />
                        <img src={require("../images/logo-figma.png")} width="50" alt="" />
                        <img src={require("../images/logo-studio.png")} width="50" alt="" />
                        <img src={require("../images/logo-framer.png")} width="50" alt=""/>
                        <img src={require("../images/logo-react.png")} width="50" alt="" />
                        <img src={require("../images/logo-swift.png")} width="50" alt="" />
                    </div>
                    <Wave />
                </div>
            </div>
            <div className="Cards">
                <h2>New Comming</h2>
                <div className="CardGroup">
                    <Card
                        title="React for Desingers"
                        text="12 sections"
                        image={require("../images/wallpaper.jpg")}
                    />
                    <Card
                        title="React for Desingers"
                        text="12 sections"
                        image={require("../images/wallpaper.jpg")}
                    />
                    <Card
                        title="React for Desingers"
                        text="12 sections"
                        image={require("../images/wallpaper.jpg")}
                    />
                    <Card
                        title="React for Desingers"
                        text="12 sections"
                        image={require("../images/wallpaper.jpg")}
                    />
                </div>
            </div>
            <Section
                image={require("../images/wallpaper2.jpg")}
                logo={require("../images/logo-react.png")}
                title="React for Designers"
                text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
            />

            <SectionCaption>12 sections - 6 hours</SectionCaption>
            <SetctionCellGroup>
                {staticdata.cells.map(cell => (
                    <Cell title={cell.title} image={cell.image} />
                ))}
            </SetctionCellGroup>
        </div>

    </Layout>
);

export default IndexPage;
