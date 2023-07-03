import React from 'react'

import Link from "next/link";

//INTERNAL IMPORT
import Style from "./Patientcare.module.css";

const Patientcare = () => {
  const patientcare = [
    {
      name: "Find a Doctor",
      link: "book",
    },
    {
      name: "Patient Testimonials",
      link: "Patient-testimonials",
    },
    {
      name: "Buy Medicines",
      link: "Buy-medicines",
    },
    {
      name: "Health Record",
      link: "profile",
    },
    {
      name: "Pay Online",
      link: "Pay-online",
    },
  ];
  return (
    <div>
      {patientcare.map((el, i) => (
        <div key={i + 1} className={Style.patientcare}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default Patientcare