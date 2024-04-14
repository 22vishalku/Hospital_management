import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Since its inception in 2020, Shamali Hospital has been a beacon of hope and healing in Palamu, Jharkhand. Nestled in the heart of the community, our hospital is committed to providing exemplary healthcare services to the people of Palamu and beyond.
          </p>
          <p>Our Comprehensive Services Include:

Internal Medicine
Surgery
Pediatrics
Obstetrics/Gynecology
Orthopedics
Cardiology
Neurology
Oncology
Radiology
Emergency Medicine

Our Pledge to You:

At Shamali Hospital, we understand the importance of compassionate care. Our dedicated team of healthcare professionals is here to ensure that you receive the highest quality of personalized care, tailored to your specific needs.

          </p>
          <p>At Shamali Hospital, we understand the importance of compassionate care. Our dedicated team of healthcare professionals is here to ensure that you receive the highest quality of personalized care, tailored to your specific needs.
</p>
          <p>Experience the Shamali Hospital difference – where your health and well-being come first.</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
