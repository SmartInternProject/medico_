import React from 'react'

import Style from "../styles/profile.module.css";

import { Profile } from "../Patient/patientindex";
const profile = () => {
    return (
        <div className={Style.profile}>
            <Profile />
        </div>
    )
}

export default profile;