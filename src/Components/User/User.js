import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import Userbody from './Userbody';

const User = () => {

    const [selectedLocation, setSelectedLocation] = useState(() => {
        return localStorage.getItem('selectedLocation') || 'naukrw8w_donordatabase';
    });

    const [obj, setobj] = useState([]);
    const [email, setEmailData] = useState('')


    useEffect(() => {
        localStorage.setItem('selectedLocation', selectedLocation);
        fetchData();
    }, [selectedLocation]);


    const handleEmailSubmit = (emailData) => {
        setEmailData(emailData)

    };
    const { to, body } = email;
      //function for fetch users details 
      const fetchData = async () => {
        try {
            await axios.get(`/api/scripts/mms-user?dbname=${selectedLocation}&email=${to}&body=${body}`).then((response) => {
                setobj(response.data);
            })
        } catch (err) {
            console.error(err);
        }
    };

    //function for user details delete
    const handleDelete = async (id) => {
        try {
            const shouldDelete = window.confirm("Are you sure you want to delete this user?");

            if (shouldDelete) {
                await axios.delete(`/api/scripts/mms-user`, {
                    data: {
                        userid: id,
                        dbname: selectedLocation
                    }
                });
            }
        } catch (err) {
            console.error(err);
        }
    };

    let ListOfTable;

    if (obj.length > 0) {
        ListOfTable = obj.map((data) => (
            <tr key={data.userid} className='tablerow'>
                <td>{data.username}</td>
                <td>{data.firstname}</td>
                <td>{data.lastname}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.address}</td>
                <td>
                    <button className='icon'>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                    <button className='icon' onClick={() => handleDelete(data.userid)}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </td>
            </tr>
        ));
    } else {
        ListOfTable = (
            <tr>
                <td colSpan="7" className="noRecordsMessageStyle">No records found</td>
            </tr>
        );
    }

    return (
        <>
            <div className='main'>
                <Userbody
                    ListOfTable={ListOfTable}
                    setSelectedLocation={setSelectedLocation}
                    onEmailSubmit={handleEmailSubmit}
                    fetch={fetchData}
                />
                  
            </div>
        </>
    );
};

export default User;


