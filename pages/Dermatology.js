import React from 'react'

import Style from "../styles/dermatology.module.css";
import images from "../img";
import {Dermatology} from "../DermatologyDoc/Dermatologyindex";
const dermatology = () => {
  return (
    <div className={Style.dermatology}>
        <Dermatology/>
    </div>
  )
}

export default dermatology;