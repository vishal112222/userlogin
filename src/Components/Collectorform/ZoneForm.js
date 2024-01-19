import React,{useState} from 'react';
import Input from '../Input/Input';
import Buttons from '../Buttons/Buttons';
import axios from 'axios';
const ZoneForm = ({backzone, selectedLocation}) => {
const [zoneData, setZoneData] = useState({
    zoneName: '', // You can add more properties as needed
  });

  const Submit = async () => {

    try {
        await axios.post(`/api/scripts/mms-zone`, JSON.stringify({
            zoneData,
            dbname: selectedLocation
            
        }));
    } catch (error) {
        console.error('API request error:', error);
    }
};


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setZoneData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  function reset(){
          setZoneData("")
  }
  return (
    <body className='formbackground'>
      <div className='form-body' >
        <h2>Add Zone</h2>
        <form className='formstyle' onSubmit={handleSubmit}>
          <Input Title={"Zone Name"} inputName={"zoneName"} inputValue={zoneData.zoneName} functionName={handleInputChange} />
          <div className='zonebuttons'>
            <Buttons  functionName={backzone} buttonType={"button"}Default={'primarybutton'} Adjustment={'BackButton'} buttonName={"Back"} />
            <Buttons  functionName={reset} buttonType={"reset"} Default={'secondarybutton'} Adjustment={'ResetButton'} buttonName={"Reset"}  />
            <Buttons functionName={Submit} buttonType={"submit"} Default={'primarybutton'} Adjustment={'SaveButton'} buttonName={"Save"} />
          </div>
        </form>
      </div>
    </body>
  );
}

export default ZoneForm;
