import React from "react";
import Header from "../elements/header";
import "./About.css";
const About = () => {
  return (
    <div>
      <Header />
    <div className="container" style={{color: "#96ada7", textAlign:'center'}}>
      <div className="py-3">
        <h1 style={{ color: "#3F0071", fontSize: "80px", fontWeight: "bold" }}>About Page</h1>
        <div className="abt">
          <img src={`https://picsum.photos/200?t=${Math.random()}`} />
          <p className="lead" >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque rerum
            hic ab veniam reiciendis cum repudiandae, voluptate explicabo nesciunt
            nam accusantium? Soluta cupiditate, accusamus commodi praesentium
            laborum dolorum libero maiores!
          </p>
        </div>
        
        <div className="abt"> 
          <p className="lead">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque rerum
            hic ab veniam reiciendis cum repudiandae, voluptate explicabo nesciunt
            nam accusantium? Soluta cupiditate, accusamus commodi praesentium
            laborum dolorum libero maiores!
          </p>
          <img src={`https://picsum.photos/200?t=${Math.random()}`} />
        </div>

        <div className="abt">
          <img src={`https://picsum.photos/200?t=${Math.random()}`} />
          <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Cumque rerum hic ab veniam reiciendis cum repudiandae, voluptate explicabo nesciunt
          nam accusantium? Soluta cupiditate, accusamus commodi praesentium laborum dolorum libero maiores!
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
