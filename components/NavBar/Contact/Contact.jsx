import React from 'react'

import Link from "next/link";

//INTERNAL IMPORT
import Style from "./Contact.module.css";

const Contact = () => {
  const contact = [
    {
      name: "Post a query",
      link: "Postquery",
    },
    {
      name: "Consult Doctors Online",
      link: "Consultonline",
    },
    {
      name: "Book Physical Appointment",
      link: "Bookappointment",
    },
  ];
  return (
    <div>
      {contact.map((el, i)=>(
        <div key={i+1} className={Style.contact}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default Contact