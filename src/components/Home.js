import React from "react";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import Admin from "../pages/Admin";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row revs">
          <div className="col-md-2">
            <Dashboard />
          </div>
          <div className="col-md-3">
            <Statistics />
          </div>
          <div className="col-md-7">
            <Admin />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
