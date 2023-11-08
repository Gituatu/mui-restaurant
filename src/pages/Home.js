import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import "../styles/HomeStyles.css";
const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Food website</h1>
          <p>Quality foods for you</p>
          <Link to="/menu">
            <button>Order now</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
