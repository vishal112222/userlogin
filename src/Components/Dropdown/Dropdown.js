import React, { useState } from 'react';
export default function DropDown({ onSelect }) {
  const [selectedLocation, setSelectedLocation] = useState('');
  const handleChange = (event) => {
    const newValue = event.target.value;
    setSelectedLocation(newValue);
    onSelect(newValue);
  };
  return (
    <div className="dropdown">
      <select value={selectedLocation} onChange={handleChange}>
        <option value="naukrw8w_chd_donordb">Chandigarh</option>
        <option value="naukrw8w_mum_donordb">Mumbai</option>
        <option value="naukrw8w_donordatabase">Delhi</option>
        <option value="naukrw8w_jal_donordb">Jalandhar</option>
        <option value="naukrw8w_ldh_donordb">Ludhiana</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
}






