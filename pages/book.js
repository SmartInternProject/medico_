import React from 'react'

import Style from "../styles/book.module.css";
import images from "../img";
import {Book} from "../Bookappoint/Bookappontindex";
const book = () => {
  return (
    <div className={Style.book}>
        <Book/>
    </div>
  )
}

export default book;