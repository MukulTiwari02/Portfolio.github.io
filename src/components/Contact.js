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
      {/* <div className="form-container">
        <div className="about-info">Contact</div>
        <ContactForm  formData/>
      </div>
      <div className="socials">
          <Socials />
      </div> */}
      <ComingSoon />
    </div>
  )
}

export default Contact