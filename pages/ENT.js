import React from 'react'

import Style from "../styles/ent.module.css";
import images from "../img";
import {ENT} from "../ENTDoc/ENTindex";
const ent = () => {
  return (
    <div className={Style.ent}>
        <ENT/>
    </div>
  )
}

export default ent;