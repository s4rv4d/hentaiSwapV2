import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

// internal imports
import Style from './Model.module.css'
import images from "../../assets"

const Model = ({ setOpenModel, connectWallet }) => {

  // useState
  const walletName = [
    "Metamask",
    "coinbase",
    "wallet",
    "walletConnect"
  ]

  return (
    <div className={Style.Model}>
      <div className={Style.Model_box}>
        <div className={Style.Model_box_heading}>
          <p>Connect a wallet</p>
          <div className={Style.Model_box_heading_img}>
            <Image src={images.close} alt='close' width={20} height={20} onClick={ () => setOpenModel(false) }/>
          </div>
        </div>

        <div className={Style.Model_box_wallet}>
          {walletName.map((el, i) => (
            <p key={i + 1} onClick={ () => connectWallet() }>
              {el}
            </p>
          ))}
        </div>

        <p className={Style.Model_box_para}>
          By connecting a wallet, you are agreeing to Hentai Swap V2's agreement
        </p>

      </div>
    </div>
  )
}

export default Model