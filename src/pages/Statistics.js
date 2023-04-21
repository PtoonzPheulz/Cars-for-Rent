import React, { useState } from "react";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import { BsFillCircleFill } from "react-icons/bs";

const Statistics = () => {
  // const [isActive, setIsActive] = useState(false);

  // const handleClick = () => {
  //   setIsActive(!isActive);
  // };
  return (
    <>
      <div className="stats py-3">
        <div className="stats-text d-flex flex-column">
          <h2>Todays Statistic</h2>
          <p>Tue,14 Nov 2022, 11:30 AM</p>
        </div>
        <div className="shadow s-shadow p-3 mb-3 bg-white rounded-3">
          <div className="d-flex justify-content-between align-items-center shadow-text">
            <h5>Income</h5>
            <p>Today</p>
          </div>
          <div className="d-flex align-items-center justify-content-between shadow-text-ii">
            <h2>$ 9460.00</h2>
            <p>
              <BiDownArrowAlt color="red" />
              1.5%
            </p>
          </div>
          <div className="d-flex align-item-center flex-column shadow-text-iii">
            <p>Compared to $9940 yesterday</p>
            <div className="d-flex justify-content-between">
              <h6>Last week income</h6> <h6>$25658.00</h6>
            </div>
          </div>
        </div>
        <div className="shadow s-shadow p-3 mb-3 bg-white rounded-3">
          <div className="d-flex justify-content-between align-items-center shadow-text">
            <h5>Expences</h5>
            <p>Today</p>
          </div>
          <div className="d-flex align-items-center justify-content-between shadow-text-ii">
            <h2>$ 5660.00</h2>
            <p style={{ color: "green" }}>
              <BiUpArrowAlt style={{ marginBottom: ".2rem" }} color="green" />
              2.5%
            </p>
          </div>
          <div className="d-flex align-item-center flex-column shadow-text-iii">
            <p>Compared to $5240 yesterday</p>
            <div className="d-flex justify-content-between">
              <h6>Last week expences</h6> <h6>$25658.00</h6>
            </div>
          </div>
        </div>
        <div className="shadow p-shadow pt-3 px-3 pb-2 mb-3 bg-white rounded-3">
          <div className="d-flex justify-content-between align-items-center pie-text">
            <h5>Hire vs Cancel</h5>
            <p>Today</p>
          </div>
          <div className="w-100 pie-chart-img">
            <img style={{ width: "75%" }} src="images/pie-chart.svg" alt="" />
          </div>
          {/* <div className="d-flex align-items-center flex-column pie-chart">
            <div className="d-flex">
              <h4 style={{ paddingRight: "6rem" }}>
                <BsFillCircleFill
                  style={{ marginRight: ".3rem" }}
                  color="blue"
                />
                Total Hired
              </h4>
              <p>54%</p>
            </div>
            <div className="d-flex">
              <h4 style={{ paddingRight: "4.2rem" }}>
                <BsFillCircleFill
                  style={{ marginRight: ".3rem" }}
                  color="green"
                />
                Total Canceled
              </h4>
              <p>54%</p>
            </div>
            <div className="d-flex">
              <h4 style={{ paddingRight: "4.6rem" }}>
                <BsFillCircleFill
                  style={{ marginRight: ".3rem" }}
                  color="red"
                />
                Total Pending
              </h4>
              <p>54%</p>
            </div>
          </div> */}
          <div className="d-flex py-3 px-1 flex-column pie-chart">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex gap-5">
                <BsFillCircleFill style={{}} color="blue" />
                <h4>Total Hired</h4>
              </div>
              <p>
                54%
                <BiUpArrowAlt color="green" />
              </p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex gap-5">
                <BsFillCircleFill style={{}} color="green" />
                <h4>Total Canceled</h4>
              </div>
              <p>
                54%
                <BiUpArrowAlt color="green" />
              </p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex gap-5">
                <BsFillCircleFill style={{}} color="red" />
                <h4>Total Pending</h4>
              </div>
              <p>
                54% <BiDownArrowAlt color="red" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
