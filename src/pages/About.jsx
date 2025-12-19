import React from 'react';

export default function About(props) {
  return (
    <div className="container">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="desc">
      I’m a passionate and dedicated Data Analyst who transforms raw data into meaningful insights.
I specialize in SQL, Excel, Power BI, and Tableau to help businesses make data-driven decisions.
      </div>
      <div className="content">
        <div className="user">
          <img src="male.jpg" alt="User" />
        </div>
        <div className="info">
          <div className="list-title">
            <h4>Personal Details</h4>
          </div>
          <div className="personal">
            <ul className="list">
              <li>
                <strong>Email:</strong>
                <span>donaverma302@gmail.com</span>
              </li>
              <li>
                <strong>Mobile:</strong>
                <span>9302035365</span>
              </li>
              <li>
                <strong>City:</strong>
                <span>Bangalore</span>
              </li>
            </ul>
            <ul className="list">
              <li>
                <strong>Website:</strong>
                <span>www.donaverma.com</span>
              </li>
              <li>
                <strong>Degree:</strong>
                <span>Undergraduate</span>
              </li>
              <li>
                <strong>Status:</strong>
                <span>Experienced</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* technical details */}
      <div className="info">
  <div className="info-title">
    <h4>Technologies</h4>
  </div>
  <div className="tech">
    
    <div className="column">
      <h5>Analytics & Tools</h5>
      <ul className="list">
        <li>
          <strong>Excel</strong>
          <div id="html"></div>
        </li>
        <li>
          <strong>Power BI</strong>
          <div id="css"></div>
        </li>
        <li>
          <strong>Tableau</strong>
          <div id="js"></div>
        </li>
        <li>
          <strong>Python</strong>
          <div id="react"></div>
        </li>
      </ul>
    </div>
    
   
    <div className="column">
      <h5>Data & Databases</h5>
      <ul className="list">
        <li>
          <strong>Data Visualization</strong>
          <div id="node"></div>
        </li>
        <li>
          <strong>Statistics</strong>
          <div id="express"></div>
        </li>
        <li>
          <strong>Data Cleaning</strong>
          <div id="mongo"></div>
        </li>
        <li>
          <strong>MySQL</strong>
          <div id="sql"></div>
        </li>
      </ul>
    </div>
  </div>
</div>

    </div>
  );
}
