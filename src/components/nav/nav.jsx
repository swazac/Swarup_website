import React from 'react'
import './nav.css'
import {ImHome} from 'react-icons/im'
import {GoBook} from "react-icons/go";
import {GiClockwork} from "react-icons/gi";
import {IoMdContacts} from "react-icons/io";
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState(null);
  return (
    <nav>
      <a
        href="#header"
        onClick={() => setActiveNav("#header")}
      >
        <ImHome />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
      >
        <GoBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
      >
        <GiClockwork />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
      >
        <IoMdContacts />
      </a>
    </nav>
  );
}

export default Nav