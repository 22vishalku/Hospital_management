import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>Welcome to Shamali Hospital: Your Trusted Partner in Health</h1>
          <p>
          Welcome to Shamali Hospital, where excellence in healthcare meets compassionate service. Established to serve our community with dedication and expertise, we offer a comprehensive range of medical services, from routine check-ups to specialized treatments. Our commitment to patient-centered care ensures that every individual receives personalized attention and support throughout their healthcare journey. At Shamali Hospital, we prioritize your well-being and strive to exceed your expectations with the highest standards of clinical excellence and safety. Welcome to a place where your health and comfort are our top priorities.

          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
