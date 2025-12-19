import React, { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation

export default function Home(props) {
  const [txt,setTxt]=useState(' ')
  const handler = () => {
    let arr = ["Data Analyst",
      "Data Visualization Specialist",
      "SQL & Reporting Analyst",
      "Power BI Analyst"];
    setTxt(arr[Math.round(Math.random()*3)])
  };

  useEffect(() => {
    setInterval(handler,3000)
    clearInterval(function(){
      handler()
    },1000)
    
  }, []);

  return (
    <div className="container">
      <div className="background">
        <div className="name">
          <h1>Dona Verma</h1>
          <h3>I'm a <span className="desg">{txt}</span></h3>
          <div className="icons">
            <a href="https://github.com/exoticaakhil" className="link" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.facebook.com/" className="link" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
              
            </a>
            <a href="" className="link" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.linkedin.com/in/akhil-anil-253603262/" className="link" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
        <div className="user-image">
            <img src={"image1.jpg"} alt="" />
        </div>
      </div>
    </div>
  );
}
