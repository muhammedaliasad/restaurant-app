// AboutMe.js

import React from "react";
import "./AboutMePage.scss";
import { useNavigate } from "react-router-dom";
const AboutMe = () => {
  const navigate = useNavigate();
  return (
    <div className="about-me-container">
      <header>
        <nav>
          <ul>
            <li>Home</li>
          </ul>
        </nav>
      </header>

      <section className="introduction">
        <h1>Welcome to My Meal Web App!</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p style={{ maxWidth: "900px" }}>
            As a Senior Full Stack Engineer at Talverse, I spearhead the
            development of customer-facing web applications using React JS and
            Next JS, resulting in a 30% increase in user engagement. I leverage
            my expertise in Next JS to implement server-side rendering and
            static site generation, enhancing the application's performance and
            search engine optimization. I also engineer and maintain .NET Core
            APIs, ensuring seamless data communication and integration with the
            front-end. Additionally, I specialize in advanced payment
            mechanisms, notably integrating the Stripe gateway for secure
            transactions. Prior to joining Talverse, I worked as a Software
            Engineer at Logiciel Services, where I successfully revamped
            front-end architectures on React JS, implemented microservices, and
            optimized SQL queries for various projects. I am passionate about
            learning new skills, solving complex problems, and creating
            innovative solutions in the ever-evolving landscape of software
            engineering.
          </p>
        </div>
      </section>

      <section className="information">
        <div className="personal-details">
          <h2>Syed Muhammad Ali Asad</h2>
          <p>Location: Karachi, Pakistan</p>
        </div>

        <div className="interests-expertise">
          <h2>Interests and Expertise</h2>
          <p>Passionate about cooking and exploring developing Foodie apps!</p>
        </div>
      </section>

      <section className="testimonials">
        <h2>User Reviews</h2>
      </section>

      <section className="achievements">
        <h2>Accomplishments</h2>
      </section>

      <section className="cta">
        <p>Ready to explore delicious recipes?</p>
        <button
          style={{
            borderRadius: "25px",
            backgroundColor: "#E16120",
            margin: "20px 0",
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          Get Started
        </button>
      </section>

      <footer>
        {/* Contact Information */}
        <div className="contact-info">
          <p>Email: muhammedaliasad@gmail.com</p>
          {/* Add social media links */}
        </div>
      </footer>
    </div>
  );
};

export default AboutMe;
