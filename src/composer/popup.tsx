import React, { useState } from 'react';
import PanierPassenger from './panierPassengers';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button id="age" onClick={togglePopup}>Select passengers</button>
      {isOpen && (
        <div className="popup">
            <PanierPassenger/>
        </div>
      )}
    </div>
  );
};

export default Popup;
          {/* {Array.from({ length: 10 }, (_, index) => (
            <option key={index} value={index}>{index}</option>
          ))} */}