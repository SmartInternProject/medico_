import React from 'react'

import Style from "../styles/heart.module.css";

import { Heart } from "../HeartDoc/heartindex";
const heart = () => {
    return (
        <div className={Style.heart}>
            <Heart />
        </div>
    )
}

export default heart;