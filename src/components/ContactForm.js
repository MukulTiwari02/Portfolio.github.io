import React from 'react'

const ContactForm = ({formData}) => {
  return (
    <form action="mailto:mukultiwari2020@gmail.com" method = 'get' encType='text/plain'>
          <input type="text" name='name' value={formData.name} placeholder='Enter your Name'/>
          <input type="number" name='ContactNumber' value={formData.number} placeholder='Enter your Mobile Number'/>
          <input type="email" name='email' value={formData.email} placeholder='Enter your Email (eg - abcd@xyz.com)'/>
          <textarea name="message" id="message" cols="30" rows="10" value={formData.message} placeholder='Enter your Message'></textarea>
    </form>
  )
}

export default ContactForm