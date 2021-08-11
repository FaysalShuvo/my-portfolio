import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MenuContext } from "react-flexible-sliding-menu";
import { AiFillHome, AiOutlineMenu, AiFillContacts } from "react-icons/ai";
import { SiSkillshare } from "react-icons/si";
import { FaBloggerB } from "react-icons/fa";



function Menu() {
  const { closeMenu } = useContext(MenuContext);
  return (
    <div className="Menu d-flex align-items-center">
     
    
      <nav onClick={closeMenu}>
        <NavLink exact to="/">
          <AiFillHome
            className="mr-2 "
            style={{ fontSize: "20px", color: "white" }}
          />
          <span style={{ fontFamily: "Montserrat" }}>Home</span>
        </NavLink>
        <NavLink to="projects">
          <AiOutlineMenu
            className="mr-2 "
            style={{ fontSize: "20px", color: "white" }}
          />
          <span style={{ fontFamily: "Montserrat" }}>Projects</span>
        </NavLink>
        <NavLink to="skills">
          <SiSkillshare
            className="mr-2 "
            style={{ fontSize: "20px", color: "white" }}
          />
          <span style={{ fontFamily: "Montserrat" }}>Skills</span>
        </NavLink>
        <NavLink to="contact-me">
          <AiFillContacts
            className="mr-2 "
            style={{ fontSize: "20px", color: "white" }}
          />
          <span style={{ fontFamily: "Montserrat" }}>Contact Me</span>
        </NavLink>
        <NavLink to="blog">
          <FaBloggerB
            className="mr-2 "
            style={{ fontSize: "20px", color: "white" }}
          />
          <span style={{ fontFamily: "Montserrat" }}>Blog</span>
        </NavLink>
      </nav>
      <button onClick={closeMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
    </div>
  );
}

export default Menu;
