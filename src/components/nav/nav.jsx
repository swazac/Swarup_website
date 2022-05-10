import React from 'react'
import './nav.css'
import {ImHome} from 'react-icons/im'
import {FaUserTie} from "react-icons/fa"
import {GoBook} from "react-icons/go";
import {GiClockwork} from "react-icons/gi";
import {IoMdContacts} from "react-icons/io";
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#header')
  return (
    <nav>
        <a
          href="#header"
          onClick={() => setActiveNav("#header")}
          className={activeNav === "#header" ? "active" : ""}
        >
          <ImHome />
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <FaUserTie />
        </a>
        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <GoBook />
        </a>
        <a
          href="#portfolio"
          onClick={() => setActiveNav("#portfolio")}
          className={activeNav === "#portfolio" ? "active" : ""}
        >
          <GiClockwork />
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <IoMdContacts />
        </a>
    </nav>
  );
}

export default Nav