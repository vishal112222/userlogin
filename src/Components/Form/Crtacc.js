import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import MyInput from './MyInput';
import Tiles from './Tiles';
import axios from "axios"

const Crtacc = ({ toggleacc }) => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const locationMappings = {
        "naukrw8w_ldh_donordb": false,
        "naukrw8w_chd_donordb": false,
        "naukrw8w_jal_donordb": false,
        "naukrw8w_donordatabase": false,
        "naukrw8w_mum_donordb": false,
    };

    const [locations, setLocations] = useState(locationMappings)
    const selectedLocations = Object.keys(locations).filter((key) => locations[key]);
    console.log(selectedLocations)
    const Submit = async (data) => {

        try {
            await axios.post('/api/scripts/mms-user', JSON.stringify({
                selectedLocations: selectedLocations,
                additionalData: data

            }));
        } catch (error) {
            console.error('API request error:', error);
        }
        window.location.reload()
    };

    const toggleLocation = (locationKey) => {
        setLocations(locations => ({
            ...locations,
            [locationKey]: !locations[locationKey]
        }));
    };




    return (
        <>
            <div className='mainbody'>
                <div className='userbody'>
                    <div className='heading'>
                        <span className='userhead'>Create User</span>
                    </div>

                    <form onSubmit={handleSubmit(Submit)} action='/user/ssd' className='formbody' method='POST'>
                        <div className="form-row">
                            <MyInput name={"firstname"} errMsg={"First Name field is required"} errors={errors} register={register} label={"FirstName"} />
                            <MyInput name={"lastname"} errMsg={"Last Name field is required"} errors={errors} register={register} label={"LastName"} />
                        </div>
                        <div className="form-row">
                            <MyInput name={"username"} errMsg={"Username field is required"} errors={errors} register={register} label={"Username"} />
                            <MyInput name={"email"} errMsg={"Email field is required"} errors={errors} register={register} label={"Email"} />
                        </div>
                        <div className="form-row">
                            <MyInput name={"phone"} errMsg={"Phone No field is required"} errors={errors} register={register} label={"PhoneNo"} />
                            <MyInput name={"address"} errMsg={"Address field is required"} errors={errors} register={register} label={"Address"} />
                        </div>
                        <div className='slectionbody'>
                            <div className='spanbody'>
                                <span className='select'>Select your Location</span>
                            </div>
                            <div className='slections'>

                                <Tiles name={"Mumbai"} onClick={() => toggleLocation("naukrw8w_mum_donordb")} isSelected={locations["naukrw8w_mum_donordb"]} />
                                <Tiles name={"Delhi"} onClick={() => toggleLocation("naukrw8w_donordatabase")} isSelected={locations["naukrw8w_donordatabase"]} />
                                <Tiles name={"Chandigarh"} onClick={() => toggleLocation("naukrw8w_chd_donordb")} isSelected={locations["naukrw8w_chd_donordb"]} />
                                <Tiles name={"Ludhiana"} onClick={() => toggleLocation("naukrw8w_ldh_donordb")} isSelected={locations["naukrw8w_ldh_donordb"]} />
                                <Tiles name={"Jalandhar"} onClick={() => toggleLocation("naukrw8w_jal_donordb")} isSelected={locations["naukrw8w_jal_donordb"]} />

                            </div>
                        </div>
                        <div className='btnbody'>
                            <div className='btns'>
                                <button onClick={toggleacc} className='btn' type='button'>Back</button>
                                <button className='btn1' type='reset'>Reset</button>
                                <button className='btn2' type='submit' >Create</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Crtacc;