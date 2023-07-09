import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import { mdNotifications } from 'react-icons/md';
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";

import Style from "./NavBar.module.css";
import { Patientcare, Fields, Contact, Blogs, HelpCenter } from './index';
import { Button } from "../componentsindex";
import images from "../../img";
import RegistrationForm from '../../RegistrationForm/RegistrationForm';

const useClickOutside = (ref, callback) => {
  const handleClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });
};

const NavBar = () => {
  const [patientcare, setPatientcare] = useState(false);
  const [fields, setFields] = useState(false);
  const [contact, setContact] = useState(false);
  const [blogs, setBlogs] = useState(false);
  const [helpcenter, setHelpCenter] = useState(false);

  const patientcareRef = useRef(null);
  const fieldsRef = useRef(null);
  const contactRef = useRef(null);
  const blogsRef = useRef(null);
  const helpCenterRef = useRef(null);

  useClickOutside(patientcareRef, () => setPatientcare(false));
  useClickOutside(fieldsRef, () => setFields(false));
  useClickOutside(contactRef, () => setContact(false));
  useClickOutside(blogsRef, () => setBlogs(false));
  useClickOutside(helpCenterRef, () => setHelpCenter(false));

  const openMenu = (e) => {
    e.preventDefault();
    const btnText = e.target.innerText;
    if (btnText === "Patient Care") {
      setPatientcare(true);
      setFields(false);
      setContact(false);
      setBlogs(false);
      setHelpCenter(false);
    }
    else if (btnText === "Services") {
      setPatientcare(false);
      setFields(true);
      setContact(false);
      setBlogs(false);
      setHelpCenter(false);
    }
    else if (btnText === "Contact Us") {
      setPatientcare(false);
      setFields(false);
      setContact(true);
      setBlogs(false);
      setHelpCenter(false);
    }
    else if (btnText === "Blogs") {
      setPatientcare(false);
      setFields(false);
      setContact(false);
      setBlogs(true);
      setHelpCenter(false);
    }
    else if (btnText === "Help Center") {
      setPatientcare(false);
      setFields(false);
      setContact(false);
      setBlogs(false);
      setHelpCenter(true);
    }
    else {
      setPatientcare(false);
      setFields(false);
      setContact(false);
      setBlogs(false);
      setHelpCenter(false);
    }
  };

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image src={images.logo} alt="medico" width={120} height={100} />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type='text' placeholder="Search Doctors" />
              <BsSearch onClick={() => {}} className={Style.search_icon} />
            </div>
          </div>
        </div>

        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_patientcare} ref={patientcareRef}>
            {/* Patientcare */}
            <p onClick={(e) => openMenu(e)}>Patient Care</p>
            {patientcare && (
              <div className={Style.navbar_container_right_patientcare_box}>
                <Patientcare />
              </div>
            )}
          </div>
          {/* medical fields */}
          <div className={Style.navbar_container_right_field} ref={fieldsRef}>
            <p onClick={(e) => openMenu(e)}>Services</p>
            {fields && (
              <div className={Style.navbar_container_right_field_box}>
                <Fields />
              </div>
            )}
          </div>
          {/* Blogs */}
          <div className={Style.navbar_container_right_blogs} ref={blogsRef}>
            <p onClick={(e) => openMenu(e)}>Blogs</p>
            {blogs && (
              <div className={Style.navbar_container_right_blogs_box}>
                <Blogs />
              </div>
            )}
          </div>
          {/* Contact us */}
          <div className={Style.navbar_container_right_contact} ref={contactRef}>
            <p onClick={(e) => openMenu(e)}>Contact Us</p>
            {contact && (
              <div className={Style.navbar_container_right_contact_box}>
                <Contact />
              </div>
            )}
          </div>
          {/* Helpcenter */}
          {/* <div className={Style.navbar_container_right_help} ref={helpCenterRef}>
            <p onClick={(e) => openMenu(e)}>Help Center</p>
            {helpcenter && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div> */}
          {/*Button */}
          <div className={Style.navbar_container_right_button}>
            <RegistrationForm />
          </div>
          {/* MENU BUTTON */}
          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight
              className={Style.menuIcon}
              onClick={() => openSideBar()}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
