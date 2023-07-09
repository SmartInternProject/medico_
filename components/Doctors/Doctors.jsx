import React, { useState,useEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Doctors.module.css";
import images from "../../img";

import axios from "axios";

const Doctor = () => {

  const [data,setData] = useState(


  );

  useEffect(()=>{
    axios.get("http://localhost:8080/api/doctors").then(response => {setData(response.data);console.log(data)}).catch(error => console.log(error))
  },[]);

  const renderSpecialization= (nestedObjects) => {
    return nestedObjects.map((nestedObject) => (
      <div>
      <div key={nestedObject.id}>{nestedObject.specialization} || 15 years</div><br></br>
      </div>
    ));
  };

  const renderAcademicDetails = (nestedObjects) => {
    return nestedObjects.map((nestedObject) => (
      <div>
      <div key={nestedObject.id}>{nestedObject.degree}|{nestedObject.specialization}</div><br></br>
      </div>
    ));
  };

  if (data === null || !Array.isArray(data)) {
    return <div>Loading data...</div>;
  }
  return (
    <div className={Style.Doctor}>
      {data.map((doctor) => (
        
        <div className={Style.Doctor_box} key={doctor.id}>
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
                <p>Mon - Fri</p>
              </div>
            </div>
          </div>

          <div className={Style.Doctor_box_update_details}>
            <div className={Style.Doctor_box_update_details_info}>
              <div className={Style.Doctor_box_update_details_info_box}>
                  <div>
                    <h5>Dr. {doctor.firstName+" "+doctor.lastName}</h5>
                    <p>
                      {renderSpecialization(doctor.specialization)}
                    </p>
                  </div>
                

                <div className={Style.Doctor_box_update_details_info_box_box}>
                <small>
                  {renderAcademicDetails(doctor.academicDetails)}
                </small>
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