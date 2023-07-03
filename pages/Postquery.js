import React from 'react'

import Style from "../styles/postquery.module.css";

import { Postquery } from "../Postquerypage/postqueryindex";
const postquery = () => {
    return (
        <div className={Style.postquery}>
            <Postquery />
        </div>
    )
}

export default postquery;