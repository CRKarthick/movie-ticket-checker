import React, { useState } from "react";

const Navbar = ({ setAppMailId }) => {
  const [userMailId, setUserMailId] = useState("");
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand">MOVIE TICKET CHECKER</div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="d-flex"
          style={{ width: "40%" }}
        >
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              @
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Enter User Mail ID"
              aria-label="userMailId"
              aria-describedby="basic-addon1"
              value={userMailId}
              onChange={(e) => setUserMailId(e.target.value)}
            />
            <button
              className="btn btn-outline-secondary"
              onClick={(e) => setAppMailId(userMailId)}
            >
              ✔
            </button>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
