import React from 'react'

import Style from "../styles/bookappointment.module.css";

import { Bookappointment } from "../BookDoc/bookappointmentindex";
const bookappointment = () => {
    return (
        <div className={Style.bookappointment}>
            <Bookappointment />
        </div>
    )
}

export default bookappointment;