import React, { useState } from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import { BiCar, BiMenu } from "react-icons/bi";
import { TbBrandBooking } from "react-icons/tb";
import { BsCreditCard, BsFileEarmarkText } from "react-icons/bs";
import { MdCurrencyExchange } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";

const Dashboard = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };
  const closeMenu = () => {
    setMenuVisible(false);
  };
  return (
    <>
      <button
        id="button"
        className="menu-button d-none position-absolute "
        onClick={toggleMenu}
      >
        <BiMenu />
      </button>
      <div className=""></div>
      <div
        style={{ height: "128vh" }}
        className={`d-flex flex-column align-items-center bg-dark sidebar-menu ${
          menuVisible ? "visible" : "sidebar-menu"
        }`}
      >
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={closeMenu}
        ></button>
        <div className="img-logo w-100 d-flex justify-content-between">
          <img src="images/logo-ii.svg" alt="" />
        </div>

        <div className="menu-wrapper">
          <div
            style={{ background: "#006AFF" }}
            className="side-links gap-5 d-flex align-items-center rounded"
          >
            <AiOutlineAppstore size={23} color={"#fff"} />
            <h4>Dashboard</h4>
          </div>
          <div className="side-links gap-10 d-flex align-items-center">
            <BiCar size={20} color={"#fff"} />
            <h4>Drivers</h4>
          </div>
          <div className="side-links gap-10 d-flex align-items-center">
            <TbBrandBooking size={20} color={"#fff"} />
            <h4>Bookings</h4>
          </div>
          <div className="side-links gap-10 d-flex align-items-center">
            <IoNotificationsOutline size={20} color={"#fff"} />
            <h4>Notification</h4>
          </div>
          <div
            style={{
              paddingBottom: "1.6rem",
              borderBottom: "1px rgba(255, 255, 255, 0.2) solid",
            }}
            className="side-links gap-10 d-flex align-items-center"
          >
            <IoSettingsOutline size={20} color={"#fff"} />
            <h4>Setting</h4>
          </div>
        </div>
        <div className="menu-wrapper">
          <div className="pt-4 ps-1 ms-2 pb-3">
            <h4 style={{ color: " rgba(255, 255, 255, 0.2)" }}>Report</h4>
          </div>
          <div className="side-links-ii gap-10 d-flex align-items-center">
            <BsCreditCard size={19} color={"#fff"} />
            <h4>Payment Details</h4>
          </div>
          <div className="side-links-ii gap-10 d-flex align-items-center">
            <MdCurrencyExchange size={19} color={"#fff"} />
            <h4>Transactions</h4>
          </div>
          <div className="side-links-ii gap-10 d-flex align-items-center">
            <BsFileEarmarkText size={19} color={"#fff"} />
            <h4>Car Report</h4>
          </div>
        </div>
        <div className="logout">
          <button className="d-flex align-items-center log-btn rounded-3">
            <TbLogout size={20} color={"#fff"} /> Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
