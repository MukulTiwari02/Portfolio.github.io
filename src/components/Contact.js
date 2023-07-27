import React , {useState} from 'react'
import Socials from './Socials';

const Contact = () => {

  const [formData, setformData] = useState({
    name: '',
    ContactNumber : '',
    email : '',
    message : '',
  })


  return (
    <div id='Contact' className='contact'>
      <div className="form-container">
        <div className="about-info">Contact</div>
        <form action="mailto:mukultiwari2020@gmail.com" method = 'get' encType='text/plain'>
          <input type="text" name='name' value={formData.name} placeholder='Enter your Name'/>
          <input type="number" name='ContactNumber' value={formData.number} placeholder='Enter your Mobile Number'/>
          <input type="email" name='email' value={formData.email} placeholder='Enter your Email (eg - abcd@xyz.com)'/>
          <textarea name="message" id="message" cols="30" rows="10" value={formData.message} placeholder='Enter your Message'></textarea>
        </form>
      </div>
      <div className="socials">
          <Socials />
      </div>
    </div>
  )
}

export default Contact