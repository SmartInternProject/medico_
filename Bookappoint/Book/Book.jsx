import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Book.module.css'; 
import Style from "./Book.module.css";



const AppointmentForm = () => {
  const [specialityDropdownValue, setspecialityDropdownValue] = useState('');
  const [doctorDropdownValue, setdoctorDropdownValue] = useState('');
  const [specialityDropdownOptions, setspecialityDropdownOptions] = useState([]);
  const [doctorDropdownOptions, setdoctorDropdownOptions] = useState([]);

  const [appointmentSchedule, setAppointmentSchedule] = useState([])

  const [dateDropdownValue, setDateDropdownValue] = useState('');
  const [timeDropdownValue, setTimeDropdownValue] = useState('');
  const [dateDropdownOptions, setDateDropdownOptions] = useState([]);
  const [timeDropdownOptions, setTimeDropdownOptions] = useState([]);


  
  // Update doctors on speciality change in drop down 
  const handleSpecialityDropdownChange = (event) => {
    const selectedValue = event.target.value;
    setspecialityDropdownValue(selectedValue);
    
    // Fetch data for the doctors dropdown based on the selected value of the speciality dropdown
    axios.get(`http://localhost:8080/api/doctorsWithSpecialization/${selectedValue}`)
      .then(response => {
        setdoctorDropdownOptions(response.data);
        console.log(response.data);
        setdoctorDropdownValue('');
      })
      .catch(error => {
        console.error('Error fetching dropdown options:', error);
      });
  };
  
  // Update date slots on doctor change in drop down 
  const handleDoctorDropdownChange = (event) => {
    const selectedValue = event.target.value;
    setdoctorDropdownValue(selectedValue);
    // Find the selected doctor object from the doctorDropdownOptions array
    const selectedDoctor = doctorDropdownOptions.find(doctor => doctor.id == selectedValue);

    // Extract the appointment schedules from the selected doctor
    const appointmentSchedules = selectedDoctor.appointmentScheduls;

    // Create an array of objects with id, date and time properties
    const dateOptions = appointmentSchedules.map(schedule => ({ id: schedule.id, date: schedule.appDate, time: schedule.startTime }));

    // Update the date dropdown options
    setDateDropdownOptions(dateOptions);

    // Reset the selected date
    setDateDropdownValue('');


  };
  
  // //Update time slots on date change in drop down 
  // const handleDateDropdownChange = (event) =>{
  //   const selectedValue = event.target.value;
  //   setDateDropdownValue(selectedValue);

  //   // Find the selected date object from the dateDropdownOptions array
  //   const selectedDate = dateDropdownOptions.find(date => date.id == selectedValue);

  //   // Create an array of objects with id and time properties
  //   const timeOptions = selectedDate.map(schedule => ({id:schedule.id, time:schedule.time}));

  //   // Update the time dropdown options
  //   setTimeDropdownOptions(timeOptions);

  //   // Reset the selected date and time
  //   setTimeDropdownValue('');
  // }


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here

    console.log('Form submitted:', {
      data,
      name,
      email,
      phone,
      date,
      time
    });
    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setDate('');
    setTime('');

  };
  // Fetch initial data for the first dropdown on component mount
  useEffect(() => {
    axios.get('http://localhost:8080/api/specialization')
      .then(response => {
        setspecialityDropdownOptions(response.data);
        
      })
      .catch(error => {
        console.error('Error fetching dropdown options:', error);
      });
  }, []);
  
  return (

    <div className={Style.container}>
      <h2 className={Style.heading}>Book an Appointment</h2>
      <form onSubmit={handleSubmit} className={Style.bookform}>
        <div className="form-group">
          <label htmlFor="name" className={Style.formlabel}>Name:</label>
          <input className={Style.forminput}
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div><br></br>
        <div className="form-group">
          <label htmlFor="email" className={Style.formlabel}>Email:</label>
          <input className={Style.forminput}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div><br></br>
        <div className="form-group">
          <label htmlFor="phone" className={Style.formlabel}>Phone:</label>
          <input className={Style.forminput}
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div><br></br>
        <div className="form-group">
          <label htmlFor="Speciality" className={Style.formlabel}>Speciality:</label>
            <select id="Speciality" value={specialityDropdownValue} onChange={handleSpecialityDropdownChange}  className={Style.formselect}>
              <option value="">Select an option</option>
              {specialityDropdownOptions.map(option => (
                <option key={option.id} value={option.id}>{option.specialization}</option>
              ))}
            </select>
        </div><br></br>
        <div className="form-group">
          <label htmlFor="Doctors" className={Style.formlabel}>Doctor:</label>
            <select id="Doctors" value={doctorDropdownValue} onChange={handleDoctorDropdownChange} disabled={!specialityDropdownValue}  className={Style.formselect}>
              <option value="">Select an option</option>
              {doctorDropdownOptions.map(option => (
                <option key={option.id} value={option.id}>Dr. {option.firstName} {option.lastName}</option>
              ))}
            </select>
        </div><br></br>
        <div className="form-group">
          <label htmlFor="date" className={Style.formlabel}>Slote:</label>
            <select
              id="date"
              value={dateDropdownValue}
              onChange={(e) => {setDateDropdownValue(e.target.value)}}
              required
              className={Style.formselect}
            >
              <option value="">Select a slote</option>
              {dateDropdownOptions.map(option => (
                <option key={option.id} value={option.id}>date: {option.date} | time: {option.time}</option>
              ))}
            </select>
        </div><br></br>
        {/* <div className="form-group">
          <label htmlFor="time" className={Style.formlabel}>Time:</label>
            <select
              id="time"
              value={timeDropdownValue}
              onChange={(e) => setTimeDropdownValue(e.target.value)}
              required
              className={Style.formselect}
            >
              <option value="">Select a time</option>
              {timeDropdownOptions.map(option => (
                <option key={option.id} value={option.id}>{option.time}</option>
              ))}
            </select>
        </div><br></br> */}
        
        <button type="submit" className={Style.formbutton}>Book Appointment</button>
      </form>
    </div>

  );
};

export default AppointmentForm;
