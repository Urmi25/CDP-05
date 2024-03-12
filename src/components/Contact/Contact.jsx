import React, { useState } from "react";
import './Contact.css'
 
function Button() {
  const [ btn , setbtn] = useState(false);

function handleClick(){
  setbtn(!btn);
  console.log('btn');
}

let toggleClass = btn ? 'active': '';

  return (
    <section className="Contact" id='contact'>    
   {
    !btn ?  <form  className= {`btn${toggleClass}`}
    onClick={handleClick} 
    >
      <input type="text" id="First Name" placeholder="First Name"/>
      <input type="text" id="Last Name" placeholder="Last Name"/>
      <input type="email" id="Email"  placeholder="Email"/>
      <textarea id="message"  rows="4" placeholder="Write a message"/>
      <button type="submit">Submit</button>
    </form>: <div>
      <button onClick={handleClick}>Back to Previous</button>
    </div>
   }
    
  </section>
  )
}

export default Button