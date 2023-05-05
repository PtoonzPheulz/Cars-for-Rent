import React from "react";
import { FaBell } from "react-icons/fa";
import { FiSearch, FiClock } from "react-icons/fi";
import { BsCalendarCheck, BsChevronDown, BsFilterSquare } from "react-icons/bs";
import { BiCar } from "react-icons/bi";
import Select, { components } from "react-select";
const icon2 = <BsCalendarCheck style={{ marginRight: "10px" }} />;
const icon3 = <FiClock style={{ marginRight: "10px" }} />;
const icon1 = <BiCar style={{ marginRight: "10px" }} />;
// const Option = (props) => (
//   <components.Option {...props}>
//     {props.data.icon}
//     {props.label}
//   </components.Option>
// );
const customStyles = {
  control: (provided) => ({
    ...provided,
    // paddingLeft: "30px",
  }),
};
const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <BsChevronDown />
    </components.DropdownIndicator>
  );
};
const Placeholder = (props) => {
  return (
    <components.Placeholder {...props}>
      {props.data.icon}
      {props.children}
    </components.Placeholder>
  );
};

// fixes and know what the icon should not be before the initialization 
const option = [
  { value: "Car Number", label: <span className="d-flex gap-2 align-items-center">Car Number <span></span>{icon2}</span> },
  { value: "Nov 20", label: "Nov 20" },
  { value: "10:20 AM", label: "10:20 AM" },
  
];





const Admin = () => {
  return (
    <>
      <div className="ad-admin">
        <div className="admin py-3">
          <div className="row">
            <div className="col-lg-6"> </div>
            <div className="col-lg-6">
              <div className="d-flex justify-content-end gap-30 align-items-center">
                <FaBell className="b-svg" style={{ left: "150px" }} />
                <div
                  style={{ padding: "6px 20px 6px 30px", borderRadius: "8px" }}
                  className="form-floating shadow"
                >
                  <input
                    style={{
                      border: "none",
                      fontSize: "12px",
                      paddingRight: "3rem",
                      outline: "none",
                    }}
                    type="text"
                    placeholder="Search here"
                  />
                  <FiSearch />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ padding: "20px 28px 30px 28px", borderRadius: "8px" }}
          className="admin-ii shadow"
        >
          <h5 className="py-2">Car Availability</h5>
          <div className="d-flex justify-content-between find-data">
            <Select
              options={option}
              //i make the first one the default value
              value={option[0]}
              // components={{ Placeholder, DropdownIndicator }}
              styles={customStyles}
              // placeholder={{
              //   label: "Car Number",
              //   icon: icon1,
              // }}
            />
            <Select
              options={option}
              // components={{ Placeholder, DropdownIndicator }}
              styles={customStyles}
              // placeholder={{
              //   label: "Nov 20",
              //   icon: icon2,
              // }}
            />
            <Select
              options={option}
              // components={{ Placeholder, DropdownIndicator }}
              styles={customStyles}
              // placeholder={{
              //   label: "10:20 AM",
              //   icon: icon3,
              // }}
            />

            {/* <div className="form-floating">
              <div
                style={{ paddingRight: "40px" }}
                className="form-select car-id d-flex gap-5"
                id="floatingSelectGrid"
              >
                <BiCar
                  className="f-svg car-vg"
                  style={{ color: "#6c757d" }}
                  size={20}
                />
                <p className="text-muted">Car Number</p>
              </div>
            </div>
            <div className="row g-0">
              <div className="col-md">
                <div className="d-flex forum gap-5 form-floating">
                  <BsCalendarCheck
                    className="f-svg"
                    style={{ marginTop: "2px", color: "#6c757d" }}
                    size={15}
                  />
                  <p className="text-muted">Nov 20</p>
                </div>
              </div>
              <div className="col-md">
                <div
                  style={{
                    borderLeft: "none",
                    borderTopLeftRadius: "0",
                    borderBottomLeftRadius: "0",
                  }}
                  className="form-floating d-flex align-items-center"
                >
                  <div
                    style={{ paddingLeft: "30px" }}
                    className="form-select d-flex gap-5 car-id-ii"
                    id="floatingSelectGrid"
                  >
                    <FiClock
                      className="f-svg"
                      style={{ marginTop: "1px", color: "#6c757d" }}
                      size={18}
                    />
                    <p className="text-muted">10:AM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="check-btn">
              <button>Check</button>
            </div> */}
          </div>
        </div>
        <div
          style={{ padding: "20px 28px", borderRadius: "8px" }}
          className="ad-admin-ii shadow my-3"
        >
          <div className="d-flex justify-content-between status-xx">
            <h5 style={{ padding: ".5rem 0" }}>Live Car Status</h5>
            <div className="d-flex gap-5 filt">
              <img className="filter-img" src="images/filter.svg" alt="" />
              <BsFilterSquare className="d-none" />
              <p style={{ marginBottom: "0", paddingTop: "8px" }}>Filter</p>
            </div>
          </div>
          <div className="table-x">
            <table className="scrollbar-container ps" style={{ width: "100%" }}>
              <tr>
                <th>No.</th>
                <th>Car no.</th>
                <th>Driver</th>
                <th>Status</th>
                <th>Earning</th>
                <th></th>
              </tr>
              <tr>
                <td
                  className="txt-num"
                  style={{
                    fontWeight: "400",
                    fontSize: "13px",
                    color: "#1A1919",
                  }}
                >
                  01
                </td>
                <td>
                  <p
                    style={{
                      fontWeight: "400",
                      fontSize: "13px",
                      color: "#1A1919",
                      background: "rgba(153, 153, 153, 0.1)",
                      borderRadius: " 4px",
                      padding: "4px 7px",
                      textAlign: "center",
                      margin: "0",
                    }}
                  >
                    6465
                  </p>
                </td>
                <td>
                  <div className="d-flex align-items-center gap-10 admin-content">
                    <img src="images/person-i.svg" alt="" />
                    <p
                      style={{
                        fontWeight: "400",
                        fontSize: "14px",
                        color: "#1A1919",
                      }}
                    >
                      Alex Norman
                    </p>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center gap-10 admin-content">
                    <img src="images/border-badge-green.svg" alt="" />
                    <p
                      style={{
                        fontWeight: "300",
                        fontSize: "14px",
                        color: "#656575",
                      }}
                    >
                      Completed
                    </p>
                  </div>
                </td>
                <td
                  style={{
                    fontWeight: "300",
                    fontSize: "14px",
                    color: "#656575",
                  }}
                >
                  <p>$ 35.44</p>
                </td>
                <td>
                  <button
                    style={{
                      background: " #006AFF",
                      borderRadius: "4px",
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#fff",
                      border: "none",
                      padding: "4px 16px",
                    }}
                  >
                    Details
                  </button>
                </td>
              </tr>
              <tr>
                <td
                  className="txt-num"
                  style={{
                    fontWeight: "400",
                    fontSize: "13px",
                    color: "#1A1919",
                  }}
                >
                  02
                </td>
                <td>
                  <p
                    style={{
                      fontWeight: "400",
                      fontSize: "13px",
                      color: "#1A1919",
                      background: "rgba(153, 153, 153, 0.1)",
                      borderRadius: " 4px",
                      padding: "4px 7px",
                      textAlign: "center",
                      margin: "0",
                    }}
                  >
                    5665
                  </p>
                </td>
                <td>
                  <div className="d-flex align-items-center gap-10 admin-content">
                    <img src="images/person-ii.svg" alt="" />
                    <p
                      style={{
                        fontWeight: "400",
                        fontSize: "14px",
                        color: "#1A1919",
                      }}
                    >
                      Razib Rahman
                    </p>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center gap-10 admin-content">
                    <img src="images/border-badge-blue.svg" alt="" />
                    <p
                      style={{
                        fontWeight: "300",
                        fontSize: "14px",
                        color: "#656575",
                      }}
                    >
                      Pending
                    </p>
                  </div>
                </td>
                <td
                  style={{
                    fontWeight: "300",
                    fontSize: "14px",
                    color: "#656575",
                  }}
                >
                  <p>$ 0.00</p>
                </td>
                <td>
                  <button
                    style={{
                      background: " #006AFF",
                      borderRadius: "4px",
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#fff",
                      border: "none",
                      padding: "4px 16px",
                    }}
                  >
                    Details
                  </button>
                </td>
              </tr>
              <tr>
                <td
                  className="txt-num"
                  style={{
                    fontWeight: "400",
                    fontSize: "13px",
                    color: "#1A1919",
                  }}
                >
                  03
                </td>
                <td>
                  <p
                    style={{
                      fontWeight: "400",
                      fontSize: "13px",
                      color: "#1A1919",
                      background: "rgba(153, 153, 153, 0.1)",
                      borderRadius: " 4px",
                      padding: "4px 7px",
                      textAlign: "center",
                      margin: "0",
                    }}
                  >
                    1755
                  </p>
                </td>
                <td>
                  <div className="d-flex align-items-center gap-10 admin-content">
                    <img src="images/person-iii.svg" alt="" />
                    <p
                      style={{
                        fontWeight: "400",
                        fontSize: "14px",
                        color: "#1A1919",
                      }}
                    >
                      Luke Norton
                    </p>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center gap-10 admin-content">
                    <img src="images/border-badge-red.svg" alt="" />
                    <p
                      style={{
                        fontWeight: "300",
                        fontSize: "14px",
                        color: "#656575",
                      }}
                    >
                      In route
                    </p>
                  </div>
                </td>
                <td
                  style={{
                    fontWeight: "300",
                    fontSize: "14px",
                    color: "#656575",
                  }}
                >
                  <p>$ 23.50</p>
                </td>
                <td>
                  <button
                    style={{
                      background: " #006AFF",
                      borderRadius: "4px",
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#fff",
                      border: "none",
                      padding: "4px 16px",
                    }}
                  >
                    Details
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div
          style={{ padding: "20px 28px", borderRadius: "8px" }}
          className="shadow ad-admin-iii"
        >
          <div className="d-flex ad-headline justify-content-between">
            <div className="d-flex align-items-baseline gap-15">
              <h5>Earning Summary</h5>
              <div className="d-flex align-items-center gap-5">
                <p>Mar 2022 - Oct 2022</p>
                <img src="images/chevron.svg" alt="" />
              </div>
            </div>
            <div className="d-flex gap-15 align-items-baseline">
              <div className="d-flex align-items-center gap-5">
                <img style={{ width: "8%" }} src="images/blue-dot.svg" alt="" />
                <p>Last 6 months</p>
              </div>
              <div className="d-flex align-items-center gap-5">
                <img src="images/grey-dot.svg" alt="" />
                <p>Same period last year</p>
              </div>
            </div>
          </div>
          <div className="d-flex ad-headline-ii gap-15">
            <div className="d-flex flex-column">
              <p>$300k</p>
              <p>$200k</p>
              <p>$100k</p>
              <p>$0.00</p>
            </div>
            <div className="d-flex flex-column ova">
              <div
                style={{
                  backgroundImage: 'url("images/graph.svg")',
                }}
                className="graph-wrap"
              >
                {/* <div className="graph-img">
                  <img src="images/graph.svg" alt="" />
                </div> */}
              </div>
              <div className="d-flex sub-head gap-100 justify-content-between">
                <p>May</p>
                <p>Jun</p>
                <p>Jul</p>
                <p>Aug</p>
                <p>Sep</p>
                <p>Oct</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
