import React from 'react'

const ContactForm = ({formData,setFormData}) => {

  const handleInputChange = (e) => {

    setFormData((formData)=> {
        return {...formData, [e.target.name]: e.target.value}
    })
  }

  const handleSubmit = (e) => {
      // e.preventDefault();
      console.log(formData)
  }


  return (
    <form onSubmit={handleSubmit} action = "mailto:mukultiwari2020@gmail.com" method = 'get' encType='text/plain'>
          <input autoComplete="off" type="text" required  = "true" name='name' value={formData.name} placeholder='Enter your Name' onChange={handleInputChange}/>
          <input autoComplete="off" type="email" required  = "true" name='email' value={formData.email} placeholder='Enter your Email (eg - abcd@xyz.com)' onChange={handleInputChange}/>
          {/* <input type="number" name='ContactNumber' value={formData.number} placeholder='Enter your Mobile Number'/> */}
          <textarea required  = "true" name="message" id="message" cols="30" rows="10" value={formData.message} placeholder='Enter your Message' onChange={handleInputChange}></textarea>
          <button id="submit" type="submit">SUBMIT</button>
    </form>
  )
}

export default ContactForm