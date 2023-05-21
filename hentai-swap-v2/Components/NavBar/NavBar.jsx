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

  // useState
  const [ openModel, setOpenModel ] = useState(false);
  const [ openTokenBox, setOpenTokenBox ] = useState(false);

  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_box}>
        {/* Left section */}
        <div className={Style.NavBar_box_left}>
          {/* Logo */}
          <div className={Style.NavBar_box_left_img}>
            <Image src={images.hentaiSwapLogo} alt='logo' width={50} height={50}/>
          </div>

          {/* Menu items */}
          <div className={Style.NavBar_box_left_menu}>
            {menuItems.map((el, i) => (
              <Link
                key={i + 1}
                href={{pathname: `${el.name}`, query: `${el.link}`}}
              >
                <p className={Style.NavBar_box_left_menu_item}>
                  {el.name}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Middle section */}
        <div className={Style.NavBar_box_middle}>
          {/* Search section */}
          <div className={Style.NavBar_box_middle_search}>
            {/* Search Image */}
            <div className={Style.NavBar_box_middle_search_img}>
              <Image src={images.searchIcon} alt='search' width={20} height={20}/>
            </div>

            {/* Search Input */}
            <input type='text' placeholder='Search tokens'/>
          </div>
        </div>

        {/* Right section */}
        <div className={Style.NavBar_box_right}>
          <div className={Style.NavBar_box_right_box}>
            <div className={Style.NavBar_box_right_box_img}>
            <Image src={images.etherLogo} alt='Network' width={30} height={30}/>
            </div>
            <p>Network Name</p>
          </div>

          <button
            onClick={ () => {} }
          > Address</button>

          { openModel && (
            <Model setOpenModel={setOpenModel} connectWallet="Connect" />
          )}

        </div>
      </div>


      {/* Tokenlist component */}
      { openTokenBox && (
        <TokenList tokenData="Sarvad" setOpenTokenBox={setOpenTokenBox}/>
      )}
    </div>
  )
};

export default NavBar;