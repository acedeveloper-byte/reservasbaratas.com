import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const CallNowBanner = () => {
  return (
    <div className="call-now-banner">
      <div className="call-icon">
        <FaPhoneAlt />
      </div>
      <div className="call-text">
        <span className="call-now">CALL US NOW</span>
        <span className="phone-number"><a href="tel:+52 80 0733 4112" className='text-decoration-none text-white'>+52 80 0733 4112</a></span>
      </div>
    </div>
  );
};

export default CallNowBanner;