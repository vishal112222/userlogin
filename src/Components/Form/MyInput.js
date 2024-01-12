import React from "react";

const MyInput = ({name, errMsg, errors,register,label}) => {

    return (
        <div className="input-data">
            <input type="text" {...register(name, { required: { value: true, message: errMsg } })} />
            <div className="underline" ></div>
            <label >{label}</label>
            <p className='errorbody'>{errors[name]?.message}</p>
        </div>
    )
}

export default MyInput;



