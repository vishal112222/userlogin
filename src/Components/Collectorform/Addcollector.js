import React, { useState, useEffect } from 'react';
import Buttons from '../Buttons/Buttons';
import CollectorDropdown from './CollectorDropdown';
import axios from 'axios';
const Addcollector = ({ backcollector, setwholeData, selectedLocation }) => {


  const [username, setUsername] = useState('');
  const [zonePlaceName, setZonePlaceName] = useState('');
  const [userObj, setUserObj] = useState([]);
  const [zonePlaceObj, setzonePlaceObj] = useState([]);
  const [collectorData, setCollectorData] = useState([]);

  useEffect(() => {
    fetchZonePlaceData();
    fetchUserData();
  }, []);



  const fetchUserData = async () => {
    try {
      await axios.get(`/api/scripts/mms-user?dbname=${selectedLocation}`).then((response) => {
        setUserObj(response.data);
      })
    } catch (err) {
      console.error(err);
    }
  };

  const fetchZonePlaceData = async () => {
    try {
      await axios.get(`/api/scripts/mms-zoneplace?dbname=${selectedLocation}`).then((response) => {
        setzonePlaceObj(response.data);
      })
    } catch (err) {
      console.error(err);
    }
  };

  let userSelections;
  if (userObj.length > 0) {
    userSelections = userObj.map((data) => (
      <option value={data.userid}>{data.username}</option>
    ));
  }


  let zoneplaceSelections;
  if (zonePlaceObj.length > 0) {
    zoneplaceSelections = zonePlaceObj.map((data) => (
      <option value={data.zoneplaceid}>{data.placename}</option>
    ));
  }

  const Submit = async () => {

    try {
      await axios.post(`/api/scripts/mms-collector`, JSON.stringify({
        collectorData,
        dbname: selectedLocation

      }));
    } catch (error) {
      console.error('API request error:', error);
    }
  };



  const handleUsernameChange = (event) => {
    const newValue = event.target.value;
    setUsername(newValue);
  };
  const handleZonePlaceChange = (event) => {
    const newValue = event.target.value;
    setZonePlaceName(newValue)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const collectorDataObj = {
      username, zonePlaceName
    }
    setCollectorData(collectorDataObj)
  };


  return (
    <body className='formbackground'>
      <div className='form-body' >
        <h2>Add Collector</h2>
        <form className='formstyle' onSubmit={handleSubmit}>
          <CollectorDropdown ListOfSelections={userSelections} droptitle={'Username'} onChangeFunction={handleUsernameChange} />
          <CollectorDropdown ListOfSelections={zoneplaceSelections} droptitle={'Zoneplace Name'} onChangeFunction={handleZonePlaceChange} />

          <div className='zonebuttons'>
            <Buttons functionName={backcollector} Default={'primarybutton'} Adjustment={'BackButton'} buttonName={"Back"} />
            <Buttons buttonType={"reset"} Default={'secondarybutton'} Adjustment={'ResetButton'} buttonName={"Reset"} />
            <Buttons buttonType={"submit"} Default={'primarybutton'} Adjustment={'SaveButton'} buttonName={"Save"} functionName={Submit} />
          </div>


        </form>

      </div>

    </body>
  );
}

export default Addcollector;
