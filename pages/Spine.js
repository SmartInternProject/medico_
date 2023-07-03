import React from 'react'

import Style from "../styles/spine.module.css";

import { Spine } from "../SpineDoc/Spineindex";
const spine = () => {
    return (
        <div className={Style.spine}>
            <Spine />
        </div>
    )
}

export default spine;