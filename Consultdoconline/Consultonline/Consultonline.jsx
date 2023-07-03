import Style from "./Consultonline.module.css";
import React, { useState } from 'react';
import './Consultonline.module.css'; // Import the CSS file for styling

function AppointmentForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');  
  const [speciality, setSpeciality] = useState('');
  const [doctor, setDoctor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted:', {
      name,
      email,
      phone,
      
      speciality,
      doctor,
    });
    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    
    setSpeciality('');
    setDoctor('');
  };

  return (
    <div className={Style.container}>
      <h2 className={Style.heading}>Online Consultation</h2>
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
          <label htmlFor="speciality" className={Style.formlabel}>Speciality:</label>
          <select className={Style.formselect}
            id="speciality"
            value={speciality}
            onChange={(e) => setSpeciality(e.target.value)}
            required
          >
            <option value="">Select Speciality</option>
            <option value="cardiology">Cardiology</option>
            <option value="dermatology">Dermatology</option>
            <option value="neurology">Neurology</option>
          </select>
        </div><br></br>
        <div className="form-group">
          <label htmlFor="doctor" className={Style.formlabel}>Doctor:</label>
          <select className={Style.formselect}
            id="doctor"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            required
          >
            <option value="">Select Doctor</option>
            {speciality === 'cardiology' && (
              <>
                <option value="dr-smith">Dr. Smith</option>
                <option value="dr-jones">Dr. Jones</option>
              </>
            )}
            {speciality === 'dermatology' && (
              <>
                <option value="dr-wilson">Dr. Wilson</option>
                <option value="dr-miller">Dr. Miller</option>
              </>
            )}
            {speciality === 'neurology' && (
              <>
                <option value="dr-anderson">Dr. Anderson</option>
                <option value="dr-walker">Dr. Walker</option>
              </>
            )}
          </select>
        </div><br></br>
        <button type="submit" className={Style.formbutton}>Consult Online</button>
      </form>
    </div>
  );
}

export default AppointmentForm;
