import React from "react";
import Link from "gatsby-link";
import Card from "../components/Card"

const Home = () => (
  <div>
    <Link to="/">Back</Link>
    <div className="card">
      <h2>test</h2>
      <Card
        title="React for Desingers"
        text="12 sections"
        image={require("../images/wallpaper.jpg")}
      />
    </div>
  </div>
);

export default Home;
