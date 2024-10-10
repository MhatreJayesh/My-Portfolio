import './FormStyles.css';

import React from 'react'

const Form = () => {
    return (
        <div className='form'>
            <form>
                <label htmlFor="name">Your Name</label>
                <input type="text" id='name' />

                <label htmlFor="email">Email</label>
                <input type="email" id='email' />

                <label htmlFor="sub">Subject</label>
                <input id="sub" name='sub' type="text" />

                <label htmlFor="msg">Message</label>
                <textarea name="msg" id="msg" rows={7} placeholder='Type your message'></textarea>

                <button className='btn'>Submit</button>
            </form>
        </div>
    )
}

export default Form