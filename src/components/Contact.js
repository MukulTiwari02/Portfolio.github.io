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
          <h1>Contact</h1>
          <div className="my-info">
            <div className="info">
              <h3>Mobile</h3>
              <h5>+91 XXXXXXXXXX</h5>
            </div>
            <div className="info">
              <h3>Email</h3>
              <h5>xyz@abc.com</h5>
            </div>
            <div className="info">
              <h3>Address</h3>
              <h5>XYZ</h5>
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