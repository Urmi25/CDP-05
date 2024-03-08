import React from 'react'
import './About.css'
const About = () => {
  return (
    <section className="about" id='about'>
      <div className="aboutme">
        <h1>About Me</h1>
      </div>
      <div className="content">
        <div className="left">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, labore.
            Tempore eaque nihil quae voluptatibus consectetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, labore.
            Tempore eaque nihil quae voluptatibus consectetur.
          </p>
        </div>
        <div className="right">
          <img
            src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
   </div>
    </section>
  )
}
export default About