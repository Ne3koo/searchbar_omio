import React, { useState } from 'react';

const IncrementIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
    viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
  
  const DecrementIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
    viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );

const PanierPassenger = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [childrenAges, setChildrenAges] = useState<number[]>([]);
  const [seniors, setSeniors] = useState(0);
  const [seniorsAges, setSeniorsAges] = useState<number[]>([]);

  const handleAdultsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedAdults = parseInt(event.target.value);
    setAdults(selectedAdults);
  };

  const handleChildrenChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedChildren = parseInt(event.target.value);
    setChildren(selectedChildren);
    setChildrenAges((prevAges) => {
      if (selectedChildren < prevAges.length) {
        return prevAges.slice(0, selectedChildren);
      } else {
        const newAges = [...prevAges];
        for (let i = prevAges.length; i < selectedChildren; i++) {
          newAges.push(0);
        }
        return newAges;
      }
    });
  };  

  const handleChildrenAgeChange = (index: number, event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedAge = parseInt(event.target.value);
    const updatedAges = [...childrenAges];
    updatedAges[index] = selectedAge;
    setChildrenAges(updatedAges);
  };

  const handleSeniorsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSeniors = parseInt(event.target.value);
    setSeniors(selectedSeniors);
    setSeniorsAges(Array(selectedSeniors).fill(58));
  };

  const handleSeniorsAgeChange = (index: number, event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedAge = parseInt(event.target.value);
    const updatedAges = [...seniorsAges];
    updatedAges[index] = selectedAge;
    setSeniorsAges(updatedAges);
  };

  const ageOptions = Array.from({ length: 26 }, (_, index) => index);

  const seniorAgeOptions = Array.from({ length: 18 }, (_, index) => index + 58);

  return (
    <div>
      <div>
        <label htmlFor="adults">Adults:</label>
        <button onClick={() => setAdults(Math.max(adults - 1, 0))}>{DecrementIcon()}</button>
        <span id="adults" onChange={handleAdultsChange}>{adults}
          {/* {Array.from({ length: 10 }, (_, index) => (
            <option key={index} value={index}>{index}</option>
          ))} */}
        </span>
        <button onClick={() => setAdults(Math.min(adults + 1, 9))}>{IncrementIcon()}</button>
      </div>
      <div>
        <label htmlFor="children">Children:</label>
        <button onClick={() => setChildren(Math.max(children - 1, 0))}>{DecrementIcon()}</button>
        <select id="children" value={children} onChange={handleChildrenChange}>
          {Array.from({ length: 10 }, (_, index) => (
            <option key={index} value={index}>{index}</option>
          ))}
        </select>
        <button onClick={() => setChildren(Math.min(children + 1, 9))}>{IncrementIcon()}</button>
      </div>

      {children > 0 && (
  <div>
    {childrenAges.map((age, index) => (
      <div key={index}>
        <label htmlFor={`childAge-${index}`}>Child {index + 1} Age:</label>
        <select id={`childAge-${index}`} value={age} onChange={(event) => handleChildrenAgeChange(index, event)}>
          {ageOptions.map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>
    ))}
  </div>
      )}
      <div>
        <label htmlFor="seniors">Seniors:</label>
        <select id="seniors" value={seniors} onChange={handleSeniorsChange}>
          {Array.from({ length: 10 }, (_, index) => (
            <option key={index} value={index}>{index}</option>
          ))}
        </select>
      </div>
      {seniors > 0 && (
        <div>
          {seniorsAges.map((age, index) => (
            <div key={index}>
              <label htmlFor={`seniorAge-${index}`}>Senior {index + 1} Age:</label>
              <select id={`seniorAge-${index}`} value={age} onChange={(event) => handleSeniorsAgeChange(index, event)}>
                {seniorAgeOptions.map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PanierPassenger;
