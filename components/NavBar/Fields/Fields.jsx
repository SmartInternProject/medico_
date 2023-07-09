import React from 'react'

import Link from "next/link";

//INTERNAL IMPORT
import Style from "./Fields.module.css";

const Fields = () => {
  const fields = [
    {
      name: "Cardiology",
      link: "Heart",
    },
    {
      name: "Orthopedics",
      link: "Orthopedics",
    },
    {
      name: "Neurology",
      link: "Spine",
    },
         
    {
      name: "Otolaryngology (ENT)",
      link: "ENT",
    },
    {
      name: "Endocrinology",
      link: "Dermatology",
    },

  ];
  return (
    <div>
      {fields.map((el, i)=>(
        <div key={i+1} className={Style.fields}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default Fields