import React , {useState} from 'react'
import Socials from './Socials';
import ContactForm from './ContactForm';
import ComingSoon from './ComingSoon';

const Contact = () => {

  const [formData, setformData] = useState({
    name: '',
    ContactNumber : '',
    email : '',
    message : '',
  })


  return (
    <div id='Contact' className='contact'>
      <div className="socials"> 
          <Socials />
      </div>
      <div className="form-container">
        <div className="about-info">
          <h1 className='text-3xl text-center w-full'>Contact Me</h1>
          <div className="my-info flex-wrap sm:mb-7">
            <div className="info">
              <h3>Mobile</h3>
              <h5>+91 XXXXXXXXXX</h5>
            </div>
            <div className="info">
              <h3>Email</h3>
              <h5>mukultiwari2020@gmail.com</h5>
            </div>
            <div className="info">
              <h3>Address</h3>
              <h5>Greater Noida, Uttar Pradesh</h5>
            </div>
          </div>
        </div>
        <ContactForm  formData={formData} setFormData={setformData}/>
      </div>
      {/* <ComingSoon /> */}
    </div>
  )
}

export default Contact