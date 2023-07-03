import React from "react";
import Image from "next/image";
import ReactPlayer from 'react-player'
import { Button } from "../componentsindex";
//INTERNAL IMPORT
import Style from "./Aboutus.module.css";
import images from "../../img";
const Aboutus = () => {
  return (
    <div className={Style.about}>
      <div className={Style.about_box}>
        <div className={Style.about_box_left}>
        <Image
            src={images.medbro}
            alt="About us"
            width={600}
            height={600}
          />
        
        </div>
        <div className={Style.about_box_right}>
        <h1>About Us</h1>
          <p>
          Introducing Medico: The Complete Hospital Management Solution. Our comprehensive system is designed to streamline operations and elevate patient care at your healthcare facility. With Medico, you can customize and scale the solution to meet your organization's unique needs, ensuring seamless integration into your existing workflows. Our user-friendly interface simplifies adoption and enhances productivity for your staff, allowing them to focus on delivering exceptional patient care. By providing quick access to comprehensive patient information, Medico empowers your healthcare providers to make informed decisions and deliver personalized care that improves patient outcomes. With a proven track record of delivering results and backed by dedicated support and industry recognition, Medico is your trusted partner in achieving operational efficiency, exceptional care, and success for your healthcare organization. Choose Medico today and experience the difference it can make in transforming your hospital management processes.
          </p>
          {/* <Button btnName="Learn more" /> */}
        </div>
      </div>
    </div>
    // <div className={Style.about}>
    //   <div className={Style.about_box}>
    //     <div className={Style.about_box_item}>
    //       <Image
    //         src={images.service1}
    //         alt="Filter & Discover"
    //         width={100}
    //         height={100}
    //       />
    //       <p className={Style.service_box_item_step}>
    //         <span>Step 1</span>
    //       </p>
    //       <h3>Filter & Discover</h3>
    //       <p>
    //         Connect with wallet, discover, buy NTFs, sell your NFTs and earn
    //         money
    //       </p>
    //     </div>
    //     <div className={Style.service_box_item}>
    //       <Image
    //         src={images.service2}
    //         alt="Filter & Discover"
    //         width={100}
    //         height={100}
    //       />
    //       <p className={Style.service_box_item_step}>
    //         <span>Step 1</span>
    //       </p>
    //       <h3>Filter & Discover</h3>
    //       <p>
    //         Connect with wallet, discover, buy NTFs, sell your NFTs and earn
    //         money
    //       </p>
    //     </div>
    //     <div className={Style.service_box_item}>
    //       <Image
    //         src={images.service3}
    //         alt="Connect Wallet"
    //         width={100}
    //         height={100}
    //       />
    //       <p className={Style.service_box_item_step}>
    //         <span>Step 1</span>
    //       </p>
    //       <h3>Connect Wallet</h3>
    //       <p>
    //         Connect with wallet, discover, buy NTFs, sell your NFTs and earn
    //         money
    //       </p>
    //     </div>
    //     <div className={Style.service_box_item}>
    //       <Image
    //         src={images.service1}
    //         alt="Filter & Discover"
    //         width={100}
    //         height={100}
    //       />
    //       <p className={Style.service_box_item_step}>
    //         <span>Step 1</span>
    //       </p>
    //       <h3>Start trading</h3>
    //       <p>
    //         Connect with wallet, discover, buy NTFs, sell your NFTs and earn
    //         money
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Aboutus;