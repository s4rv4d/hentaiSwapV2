import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

import Style from "./Token.module.css"
import images from "../../assets"
import { Toggle } from '..'

const Token = ({ setOpenSetting }) => {
  return (
    <div className={Style.Token}>
        <div className={Style.Token_box}>
            <div className={Style.Token_box_heading}>
                <h4>Setings</h4>
                <Image
                    src={images.close}
                    alt='close'
                    width={50}
                    height={50}
                    onClick={() => setOpenSetting(false)}
                />
            </div>
            <p className={Style.Token_box_para}>
                Slippage tolerance {""}
                <Image 
                    src={images.lock}
                    alt='lock'
                    width={20}
                    height={20}
                />
            </p>

            <div className={Style.Token_box_input}>
                <button>Auto</button>
                <input type='text' placeholder='0.10%'/>
            </div>


            <p className={Style.Token_box_para}>
                Slippage tolerance {""}
                <Image 
                    src={images.lock}
                    alt='lock'
                    width={20}
                    height={20}
                />
            </p>

            <div className={Style.Token_box_input}>
                <input type='text' placeholder='30'/>
                <button>minutes</button>
            </div>


            <h3>Interface Settings</h3>

            <div className={Style.Token_box_toggle}>
                <p className={Style.Token_box_para}>
                    Transaction deadline
                </p>
                <Toggle label="No"/>
            </div>

        </div>
    </div>
  )
}

export default Token