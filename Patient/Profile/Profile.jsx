
import React, { useState } from 'react';
import Style from "./Profile.module.css";
import './Profile.module.css';


function HealthForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [job, setJob] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [relationshipStatus, setRelationshipStatus] = useState('');

    const [illness, setIllness] = useState('');
    const [hospitalization, setHospitalization] = useState('');
    const [medications, setMedications] = useState('');
    const [allergies, setAllergies] = useState('');
    const [medIntolerance, setMedIntolerance] = useState('');
    const [pregnancy, setPregnancy] = useState('');
    const [covid, setCovid] = useState('');
    const [bpProblem, setBpProblem] = useState('');
    const [implantation, setImplantation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        console.log('Form submitted:', {
            personalInfo: {
                firstName,
                lastName,
                dob,
                phoneNumber,
                address,
                state,
                city,
                postalCode,
                job,
                weight,
                height,
                age,
                gender,
                bloodGroup,
                relationshipStatus,
            },
            healthInfo: {
                illness,
                hospitalization,
                medications,
                allergies,
                medIntolerance,
                pregnancy,
                covid,
                bpProblem,
                implantation,
            },
        });
        // Reset form fields
        setFirstName('');
        setLastName('');
        setDob('');
        setPhoneNumber('');
        setAddress('');
        setState('');
        setCity('');
        setPostalCode('');
        setJob('');
        setWeight('');
        setHeight('');
        setAge('');
        setGender('');
        setBloodGroup('');
        setRelationshipStatus('');
        setIllness('');
        setHospitalization('');
        setMedications('');
        setAllergies('');
        setMedIntolerance('');
        setPregnancy('');
        setCovid('');
        setBpProblem('');
        setImplantation('');
    };

    return (
        <div className={Style.formdiv}>
            <h2 className={Style.formTitle}>Health Form</h2>
            <form onSubmit={handleSubmit} className={Style.formContainer}>
                <h3 className={Style.sub}>Personal Questionnaire</h3>
                <div className={Style.formGroup}>
                    <label htmlFor="firstName" className={Style.formLabel}>First Name:</label>
                    <input className={Style.inputField}
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName" className={Style.formLabel}>Last Name:</label>
                    <input className={Style.inputField}
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="dob" className={Style.formLabel}>Date of Birth:</label>
                    <input className={Style.inputField}
                        type="date"
                        id="dob"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phoneNumber" className={Style.formLabel}>Phone Number:</label>
                    <input className={Style.inputField}
                        type="tel"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="address" className={Style.formLabel}>Address:</label>
                    <input className={Style.inputField}
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="state" className={Style.formLabel}>State:</label>
                    <input className={Style.inputField}
                        type="text"
                        id="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="city" className={Style.formLabel}>City:</label>
                    <input className={Style.inputField}
                        type="text"
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="postalCode" className={Style.formLabel}>Postal Code:</label>
                    <input className={Style.inputField}
                        type="text"
                        id="postalCode"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="job" className={Style.formLabel}>Job:</label>
                    <input className={Style.inputField}
                        type="text"
                        id="job"
                        value={job}
                        onChange={(e) => setJob(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="weight" className={Style.formLabel}>Weight:</label>
                    <input className={Style.inputField}
                        type="text"
                        id="weight"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="height" className={Style.formLabel}>Height:</label>
                    <input className={Style.inputField}
                        type="text"
                        id="height"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="age" className={Style.formLabel}>Age:</label>
                    <input className={Style.inputField}
                        type="text"
                        id="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="gender" className={Style.formLabel}>Gender:</label>
                    <select className={Style.formselect}
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="bloodGroup" className={Style.formLabel}>Blood Group:</label>
                    <input className={Style.inputField}
                        type="text"
                        id="bloodGroup"
                        value={bloodGroup}
                        onChange={(e) => setBloodGroup(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="relationshipStatus" className={Style.formLabel}>Relationship Status:</label>
                    <select className={Style.formselect}
                        id="relationshipStatus"
                        value={relationshipStatus}
                        onChange={(e) => setRelationshipStatus(e.target.value)}
                        required
                    >
                        <option value="">Select Relationship Status</option>
                        <option value="single">Single</option>
                        <option value="married">Married</option>

                    </select>
                </div>
                <div className="health">
                    <h3 className={Style.sub} >Health Questionnaire</h3>

                    <div>
                        <label htmlFor="illness" className={Style.formLabel}>Existing or Recent Illness:</label>
                        <input className={Style.inputField}
                            type="text"
                            id="illness"
                            value={illness}
                            onChange={(e) => setIllness(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="hospitalization" className={Style.formLabel}>
                            Recent Hospitalization or Surgery:
                        </label>
                        <input className={Style.inputField}
                            type="text"
                            id="hospitalization"
                            value={hospitalization}
                            onChange={(e) => setHospitalization(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="medications" className={Style.formLabel}>Recent Medications:</label>
                        <input className={Style.inputField}
                            type="text"
                            id="medications"
                            value={medications}
                            onChange={(e) => setMedications(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="allergies" className={Style.formLabel}>Allergies:</label>
                        <input className={Style.inputField}
                            type="text"
                            id="allergies"
                            value={allergies}
                            onChange={(e) => setAllergies(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="medIntolerance" className={Style.formLabel}>Medicine Intolerance:</label>
                        <input className={Style.inputField}
                            type="text"
                            id="medIntolerance"
                            value={medIntolerance}
                            onChange={(e) => setMedIntolerance(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="pregnancy" className={Style.formLabel}>Pregnancy:</label>
                        <select className={Style.formselect}
                            id="pregnancy"
                            value={pregnancy}
                            onChange={(e) => setPregnancy(e.target.value)}
                            required
                        >
                            <option value="">Select Pregnancy Status</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="covid" className={Style.formLabel}>COVID-19 within 6 Months:</label>
                        <select className={Style.formselect}
                            id="covid"
                            value={covid}
                            onChange={(e) => setCovid(e.target.value)}
                            required
                        >
                            <option value="">Select COVID-19 Status</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="bpProblem" className={Style.formLabel}>Blood Pressure Problem:</label>
                        <select className={Style.formselect}
                            id="bpProblem"
                            value={bpProblem}
                            onChange={(e) => setBpProblem(e.target.value)}
                            required
                        >
                            <option value="">Select Blood Pressure Problem</option>
                            <option value="high">High</option>
                            <option value="low">Low</option>
                            <option value="normal">Normal</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="implantation" className={Style.formLabel}>
                            Permanent Implantation of Metal Rods or Plates:
                        </label>
                        <select className={Style.formselect}
                            id="implantation"
                            value={implantation}
                            onChange={(e) => setImplantation(e.target.value)}
                            required
                        >
                            <option value="">Select Implantation Status</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div><br></br>

                </div>



                <button type="submit" className={Style.submitButton}>Submit</button>
            </form>
        </div>
    );
}

export default HealthForm;

