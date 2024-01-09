import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import MyInput from './MyInput';
import Tiles from './Tiles';
import axios from "axios"

const Crtacc = ({ toggleacc }) => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const defaults = {
        "Mumbai": false,
        "Delhi": false,
        "Chandigarh": false,
        "Ludhiana": false,
        "jalandhar": false
    };
    const [locations, setLocations] = useState(defaults)
    const selectedLocations = Object.keys(locations).filter((key) => locations[key]);

    const Submit = async (data) => {

        try {
            const response = await axios.post('http://localhost:3000/api/scripts/mms-user', JSON.stringify({
                selectedLocations: JSON.stringify(selectedLocations),
                additionalData: JSON.stringify(data),
            }));
            console.log(response.data);
        } catch (error) {
            console.error('API request error:', error);
        }
    };

    const onToggle = (name) => {

        const prevValue = locations[name];
        setLocations({
            ...locations,
            [name]: !prevValue
        })
    }

    return (
        <>
            <div className='mainbody'>
                <div className='userbody'>
                    <div className='heading'>
                        <span className='userhead'>Create User</span>
                    </div>

                    <form onSubmit={handleSubmit(Submit)} className='formbody' method='POST'>
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

                                <Tiles name={"Mumbai"} onClick={onToggle} isSelected={locations["Mumbai"]} />
                                <Tiles name={"Delhi"} onClick={onToggle} isSelected={locations["Delhi"]} />
                                <Tiles name={"Chandigarh"} onClick={onToggle} isSelected={locations["Chandigarh"]} />
                                <Tiles name={"Ludhiana"} onClick={onToggle} isSelected={locations["Ludhiana"]} />
                                <Tiles name={"Jalandhar"} onClick={onToggle} isSelected={locations["Jalandhar"]} />

                            </div>

                        </div>

                        <div className='btnbody'>
                            <div className='btns'>
                                <button onClick={toggleacc} className='btn' type='button'>Back</button>
                                <button className='btn1' type='reset'>Reset</button>
                                <button className='btn2' type='submit'>Create</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>

        </>
    );
}

export default Crtacc;