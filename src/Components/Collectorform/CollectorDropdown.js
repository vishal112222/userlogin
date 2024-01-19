import React from 'react';

const CollectorDropdown = ({droptitle,onChangeFunction, ListOfSelections}) => {

    // value={selectedLocation} onChange={handleChange}
  return (
    <div className="collector-dropdown">
      <select onChange={onChangeFunction} >
        <option value="" disabled selected className='zonetitle'>{droptitle}</option>
        {ListOfSelections}
        
        {/* <option value="naukrw8w_chd_donordb">Chandigarh</option>
        <option value="M">Mumbai</option>
        <option value="naukrw8w_donordatabase">Delhi</option>
        <option value="naukrw8w_jal_donordb">Jalandhar</option>
        <option value="naukrw8w_ldh_donordb">Ludhiana</option> */}
        {/* Add more options as needed */}
      </select>
    </div>
  );
}

export default CollectorDropdown;
