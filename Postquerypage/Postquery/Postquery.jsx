import Style from "./Postquery.module.css";
import React, { useState } from 'react';
import './Postquery.module.css'; // Import the CSS file for styling

function PostQuery() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [query, setquery] = useState('');
  const [phone, setPhone] = useState('');
   

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted:', {
      name,
      email,
      phone,
      query,
      
    });
    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setQuery('');
    
  };

  return (
    <div className={Style.container}>
      <h2 className={Style.heading}>Post a query</h2>
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
          <label htmlFor="Query" className={Style.formlabel}>Query:</label>
          <input className={Style.forminput}
            type="text"
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
        </div><br></br>

        
       
        <button type="submit" className={Style.formbutton}>Post Query</button>
      </form>
    </div>
  );
}

export default PostQuery;
