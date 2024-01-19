import React, { useState } from 'react'
export default function Email({ showmail, onEmailSubmit, fetchdata }) {
    const [to, setTo] = useState('');
    const [body, setBody] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const emailData = { to, body };
        onEmailSubmit(emailData);
    };
    return (
        <div class="email-form">
            <h2>New Mail</h2>
            <form className='formstyle' action="/send-email" method="post" onSubmit={handleSubmit}>
                <label for="to" className='bodylabel'>To</label>
                <input type="text" id="to" name="to" className='datafield' onChange={(e) => setTo(e.target.value)} />
                <label for="body" className='bodylabel'>Body</label>
                <textarea id="body" name="body" placeholder="Type here..." rows="4" className='datafield' onChange={(e) => setBody(e.target.value)}></textarea>
                <div class="emailbuttons">
                    <button type="button" onClick={showmail}>Back</button>
                    <button type="submit" className='btns' onClick={fetchdata}>Send Email</button>
                    <button type="reset" className='btns' id='clrbtn'>Clear</button>
                </div>
            </form>
        </div>
    )
}