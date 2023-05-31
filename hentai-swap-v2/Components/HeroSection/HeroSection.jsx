import React from 'react'
import { useState, useContext } from 'react'
import Image from 'next/image';

// internal imports
import Style from "./HeroSection.module.css"
import images from "../../assets"
import { Token, SearchToken } from "../index"

const HeroSection = ({ account, tokenData }) => {

  // useStates
  const [openSetting, setOpenSetting] = useState(false);
  const [openTokenOne, setOpenTokenOne] = useState(false);
  const [openTokenTwo, setOpenTokenTwo] = useState(false);

  // tokenOne
  const [tokenOne, setTokenOne] = useState(
    {
      name: "",
      image: "",
    }
  );

  // tokenTwo
  const [tokenTwo, setTokenTwo] = useState(
    {
      name: "",
      image: "",
    }
  );

  return (
    <div className={Style.HeroSection}>
      <div className={Style.HeroSection_box}>
        <div className={Style.HeroSection_box_heading}>
          <p>Swap</p>
          <div className={Style.HeroSection_box_heading_img}>
            <Image src={images.close}
              alt="close"
              width={50}
              height={50}
              onClick={ () => setOpenSetting(true) }
            />
          </div>
        </div>

        {/* Token One */}
        <div className={Style.HeroSection_box_input}>
          <input type='text' placeholder='0'/>
          <button onClick={ () => setOpenTokenOne(true) }>
            <Image  src={ tokenOne.image || images.etherLogo }
            width={20}
            height={20}
            alt="ether"
            />

            {tokenOne.name || "ETH"}
            <small>69</small>
          </button>
        </div>

        {/* Token Two */}
        <div className={Style.HeroSection_box_input}>
          <input type='text' placeholder='0'/>
          <button onClick={ () => setOpenTokenTwo(true) }>
            <Image src={ tokenTwo.image || images.etherLogo }
            width={20}
            height={20}
            alt="ether"
            />

            {tokenTwo.name || "ETH"}
            <small>69</small>
          </button>
        </div>

        { account ? (
          <button className={Style.HeroSection_box_btn}>Connect Wallet</button>
        ) : (
          <button className={Style.HeroSection_box_btn} onClick={ () => {} }>Swap</button>
        ) }
      </div>

      {openSetting && <Token setOpenSetting={setOpenSetting} />}

      {openTokenOne && (
        <SearchToken 
        setOpenToken={setOpenTokenOne}
        tokens={setTokenOne}
        tokenData={tokenData}
        />
      )}

      {openTokenTwo && (
        <SearchToken 
        setOpenToken={setOpenTokenTwo}
        tokens={setTokenTwo}
        tokenData={tokenData}
        />
      )}

    </div>
  )
}

export default HeroSection