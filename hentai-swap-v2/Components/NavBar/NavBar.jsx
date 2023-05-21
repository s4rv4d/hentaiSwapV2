import React from 'react';
import { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// internal imports
import Style from "./NavBar.module.css";
import images from "../../assets";
import { Model, TokenList } from "../index";

const NavBar = () => {

  // declaring menu items
  const menuItems = [
    {
      name: "Swap",
      link: "/"
    },
    {
      name: "Tokens",
      link: "/"
    },
    {
      name: "Pools",
      link: "/"
    }
  ]

  return (
    <div>NavBar</div>
  )
};

export default NavBar;