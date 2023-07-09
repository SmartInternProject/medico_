import React, { useState } from 'react';
import Style from "./Spine.module.css";
import './Spine.module.css';

import images from "../../img";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import Image from "next/image";


const Doctor = () => {
  const featureArray = [1,2,3];



  return (
    <div className={Style.Doctor}>
      {featureArray.map((el, i) => (
        <div className={Style.Doctor_box} key={i + 1}>
          <div className={Style.Doctor_box_img}>
            <Image style={{ width: "100%", height: "100%" }}
              src={images.d2}
              alt="NFT images"
            //   width={600}
            //   height={600}
              className={Style.Doctor_box_img_img}
            />
          </div>

          <div className={Style.Doctor_box_update}>
            <div className={Style.Doctor_box_update_left}>
              {/* <div
                className={Style.Doctor_box_update_left_like}
                onClick={() => likeNft()}
              >
                {like ? (
                  <AiOutlineHeart />
                ) : (
                  <AiFillHeart
                    className={Style.Doctor_box_update_left_like_icon}
                  />
                )}
                {""} 22
              </div> */}
            </div>

            <div className={Style.Doctor_box_update_right}>
              <div className={Style.Doctor_box_update_right_info}>
                <small>Working days</small>
                <p>Mon - Wed</p>
                <p>Sat - Sun</p>
              </div>
            </div>
          </div>

          <div className={Style.Doctor_box_update_details}>
            <div className={Style.Doctor_box_update_details_info}>
              <div className={Style.Doctor_box_update_details_info_box}>
                <h5>Dr. David</h5>
                <p>Spine| 32 years exp</p>
                

                <div className={Style.Doctor_box_update_details_info_box_box}>
                <small>MBBS MD MEDICINE DM SPINE</small>
                  <div
                    className={Style.Doctor_box_update_details_info_box_stock}
                  >
                    
                  </div>
                </div>
              </div>
            </div>
            <div className={Style.Doctor_box_update_details_category}>
              {/* <BsImages /> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Doctor;

