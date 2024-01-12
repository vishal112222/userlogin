import React from 'react'

export default function Email({showmail}) {
    return (
        

            <div class="email-form">
                <h2>New Mail</h2>
                <form className='formstyle' action="/send-email" method="post">
                    <label for="to" className='bodylabel'>To</label>
                    <input type="text" id="to" name="to" className='datafield'/>

                    <label for="body" className='bodylabel'>Body</label>
                    <textarea id="body" name="body" placeholder="Type here..." rows="4" className='datafield'></textarea>

                    <div class="emailbuttons">
                        <button type="button" onClick={showmail}>Back</button>
                        <button type="submit" className='btns'>Send Email</button>
                        <button type="reset" className='btns' id='clrbtn'>Clear</button>
                    </div>
                </form>
            </div>
    
    )
}