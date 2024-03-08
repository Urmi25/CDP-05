import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <section className="Contact" id='contact'>
        
    <form >
      <input type="text" id="First Name" placeholder="First Name"/>
      <input type="text" id="Last Name" placeholder="Last Name"/>
      <input type="email" id="Email"  placeholder="Email"/>
      <textarea id="message"  rows="4" placeholder="Write a message"/>
      <button type="submit">Submit</button>
    </form>
    
  </section>
  )
}

export default Contact