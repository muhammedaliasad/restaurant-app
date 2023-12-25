import React from "react";
import "./HomePage.scss";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <main className="main-content">
      <section style={{ marginTop: "30px" }}>
        <div className="sc-title">Meal Generator</div>
        <div className=" homepage-content flex align-center justify-center flex-column text-center">
          <h1 className="text-white header-title ls-2">
            Unlock Culinary Delight
          </h1>
          <p className="text-uppercase text-white my-3 ls-1">
            When Inspiration Fades, We've Got Your Plate!
          </p>

          <button
            style={{
              backgroundColor: "#E16120",
              borderRadius: "25px",
              boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
            }}
            onClick={() => {
              navigate("/meal-generator");
            }}
          >
            Generate a random meal
          </button>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
