import React from 'react'

import Style from "../styles/orthopedics.module.css";

import { Orthopedics } from "../OrthoDoc/orthoindex";
const orthopedics = () => {
    return (
        <div className={Style.orthopedics}>
            <Orthopedics />
        </div>
    )
}

export default orthopedics;