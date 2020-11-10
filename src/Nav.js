import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://robertgreymallorca.com/wp-content/uploads/2019/03/1ed15bca-b389-11e7-9274-06c476b5c346_cm_800w.png"
        alt="netlogo"
      />
      <img
        className="nav__avatar"
        src="https://pbs.twimg.com/media/DN1O8hDVQAAD75h.jpg"
        alt="logo"
      />
    </div>
  );
}

export default Nav;
