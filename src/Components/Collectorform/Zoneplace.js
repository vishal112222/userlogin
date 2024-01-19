import React, { useState, useEffect } from 'react';
import Input from '../Input/Input';
import Buttons from '../Buttons/Buttons';
import CollectorDropdown from './CollectorDropdown';
import axios from 'axios';
const Zoneplace = ({ backzoneplace, selectedLocation }) => {
  const [selectedZone, setSelectedZone] = useState('');
  const [zonePlaceData, setZonePlaceData] = useState({ zonePlaceName: '', });
  const [selectedZonePlace, setSelectedZonePlace] = useState('');
  const [obj, setobj] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      await axios.get(`/api/scripts/mms-zone?dbname=${selectedLocation}`).then((response) => {
        setobj(response.data);
      })
    } catch (err) {
      console.error(err);
    }
  };



  const Submit = async () => {

    try {
      await axios.post(`/api/scripts/mms-zoneplace`, JSON.stringify({
        selectedZonePlace,
        dbname: selectedLocation

      }));
    } catch (error) {
      console.error('API request error:', error);
    }
  };


  const handleZoneChange = (event) => {
    const newValue = event.target.value;
    setSelectedZone(newValue);
  };



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setZonePlaceData((prevData) => ({
      ...prevData,
      [name]: value,

    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const zonePlaceObj = {
      ...zonePlaceData,
      selectedZone
    }
    setSelectedZonePlace(zonePlaceObj)
  };

  let ListOfSelections;
  if (obj.length > 0) {
    ListOfSelections = obj.map((data) => (
      <option value={data.zoneid}>{data.zonename}</option>
    ));
  }





  return (
    <body className='formbackground'>
      <div className='form-body' >
        <h2>Add Zoneplace</h2>
        <form className='formstyle' onSubmit={handleSubmit} >

          <CollectorDropdown ListOfSelections={ListOfSelections} droptitle={'Zone Name'} onChangeFunction={handleZoneChange} />

          <Input Title={"Zoneplace Name"} inputName={"zonePlaceName"} inputValue={zonePlaceData.zonePlaceName} functionName={handleInputChange} />
          <div className='zonebuttons'>
            <Buttons functionName={backzoneplace} Default={'primarybutton'} Adjustment={'BackButton'} buttonName={"Back"} />
            <Buttons Default={'secondarybutton'} Adjustment={'ResetButton'} buttonName={"Reset"} />
            <Buttons functionName={Submit} buttonType={"submit"} Default={'primarybutton'} Adjustment={'SaveButton'} buttonName={"Save"} />
          </div>


        </form>

      </div>

    </body>
  );
}

export default Zoneplace;
