import React from 'react'

const Footer = () => {
  return (
    <>
      <div id='footer' className="footer">
        <div className="footer-content first">
          &copy; 2024 Anandi. All Rights Reserved.
        </div>
        <div className="footer-content second">
          Email: anandiwears@gmail.com <br />
          Contact: +91 9007724730 / +91 8582802440
        </div>
        <div className="footer-content third">
          <i className="fa-brands fa-square-whatsapp footer-socials"></i> <br /><br />
          <i className="fa-brands fa-facebook footer-socials"></i> <br />
          <a href="https://www.instagram.com/anandiwears/" target='_blank'><i  className="fa-brands fa-square-instagram footer-socials"></i></a>
        </div>
      </div>
    </>
  )
}

export default Footer
