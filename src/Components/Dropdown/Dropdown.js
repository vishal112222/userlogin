import React, { useEffect } from 'react';

export default function DropDown({ onSelect }) {
  const storedLocation = localStorage.getItem('selectedLocation') || '';

  useEffect(() => {
    onSelect(storedLocation);
  }, [onSelect, storedLocation]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    localStorage.setItem('selectedLocation', newValue);
    onSelect(newValue);
  };

  return (
    <div className="dropdown">
      <select value={storedLocation} onChange={handleChange}>
        <option value="naukrw8w_chd_donordb">Chandigarh</option>
        <option value="naukrw8w_mum_donordb">Mumbai</option>
        <option value="naukrw8w_donordatabase">Delhi</option>
        <option value="naukrw8w_jal_donordb">Jalandhar</option>
        <option value="naukrw8w_ldh_donordb">Ludhiana</option>
      </select>
    </div>
  );
}
