import React from "react";
import './UserDetails.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faUser } from "@fortawesome/free-solid-svg-icons";

function UserDetails() {
  const data = {
    username: "ahmedraouf4",
    email: "ahmed@gmail.com",
    fname: "ahmed",
    lname: "raouf",
    bdate: "2001-07-11",
    gender: "male",
    phone: "01067662457",
    SSN: "01234567893249",
    country: "Egypt",
    address: "5 hasan el saban fisl giza",
    role: "patient",
    dep: "Radiology",
    salary: "5000",
    shift: "night",
  };

  return (
    <div className="log">
      <form className="signup-form" id='dataDisplay'>

        <div id='dataDisplay3'>
          <div class="input-field" id="inputField">
            <input type="text" required value={data.fname}></input>
            <label>First Name</label>
          </div>
          <div class="input-field" id="inputField">
            <input type="text" required value={data.lname}></input>
            <label>Last Name</label>
          </div>
          <div class="input-field" id="inputField">
            <input type="text" required value={data.username}></input>
            <label>Username</label>
          </div>
          <div class="input-field" id="inputField">
            <input type="text" required value={data.email}></input>
            <label>Email</label>
          </div>
        </div>

        <div id='dataDisplay3'>
          <div class="input-field" id="inputField">
            <input type="text" required value={data.SSN}></input>
            <label>National ID</label>
          </div>
          <div class="input-field" id="inputField">
            <input type="text" required value={data.phone}></input>
            <label>Phone number</label>
          </div>
          <div className="input-field" id="inputField">
            <input
              id="birthdate"
              type="text"
              name="birthdate"
              className="birthdate"
              placeholder=""
              value={data.bdate}
            ></input>
            <label htmlFor="birthdate">Birthdate</label>
          </div>
          <div class="input-field" id="inputField">
            <label className="input-field-cont-1" id="inputField">Gender</label>
            <select class="gender-selection" >
              <option value="Choose Gender" disabled selected hidden>{data.gender}</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        <div id='dataDisplay3'>
          <div class="input-field" id="inputField">
            <input type="text" required value={data.country}></input>
            <label>Country</label>
          </div>
          <div class="input-field" id="inputField">
            <input type="text" required value={data.address}></input>
            <label>Address</label>
          </div>
          <div class="input-field" id="inputField">
            <label className="input-field-cont-1">Role</label>
            <select class="gender-selection" >
              <option value="Choose Role" disabled selected hidden>{data.role}</option>
              <option value="patient">patient</option>
              <option value="Doctor">Doctor</option>
            </select>
          </div>
        </div>
      </form>

      <form className="signup-form" id='dataDisplay'>
        <div id='dataDisplay3'>
          <div class="input-field" id="inputField">
            <label className="input-field-cont-1">Department</label>
            <select class="gender-selection">
              <option value="Choose Department" disabled selected hidden>{data.dep}</option>
              <option value="Radiology">Radiology</option>
              <option value="Lab">Lab</option>
            </select>
          </div>
          <div class="input-field" id="inputField">
            <input type="text" required value={data.salary}></input>
            <label>Salary</label>
          </div>
          <div class="input-field" id="inputField">
            <label className="input-field-cont-1">Shift</label>
            <select class="gender-selection">
              <option value="Choose Shift" disabled selected hidden>{data.shift}</option>
              <option value="Day">Day</option>
              <option value="Night">Night</option>
            </select>
          </div>
        </div>
      </form>


    </div>
  );
}

export default UserDetails;
