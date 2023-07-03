import React from "react";
import Image from "next/image";
import { FaPhone } from 'react-icons/fa';
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";

import { RiSendPlaneFill } from "react-icons/ri";

//INTERNAL IMPORT
import Style from "./Footer.module.css";
import images from "../../img";
import { Patientcare, Fields, Blogs, Contact} from "../NavBar/index";

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          <Image src={images.logo} alt="footer logo" height={100} width={120} />
          
          <div className={Style.footer_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
            
          </div>
          <h3>Emergency</h3>
          <div className={Style.footer_emergency}> 
            <p><FaPhone /><a href="#"> 123-456-7890</a></p>
          </div>
          <h3>Health Help Line</h3>
          <div className={Style.footer_emergency}>
            
            <p><FaPhone /><a href="#"> 1860-500-1066</a></p>
          </div>
          
        </div>

        <div className={Style.footer_box_patientcare}>
          <h3>Patient Care</h3>
          <Patientcare />
        </div>

        <div className={Style.footer_box_fields}>
          <h3>Services</h3>
          <Fields />
        </div>

        <div className={Style.subscribe}>
          <h3>Subscribe Our Newsletter</h3>

          <div className={Style.subscribe_box}>
            <input type="email" placeholder="Enter your email *" />
            <RiSendPlaneFill className={Style.subscribe_box_send} />
          </div>
          <div className={Style.subscribe_box_info}>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;