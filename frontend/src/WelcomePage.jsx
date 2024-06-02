import React from 'react'
import './WelcomePage.css'

const WelcomePage = () => {


    function categoryClickHandler(event) {
        const category = event.currentTarget.querySelector('.category-text').innerText.replace(/s$/, '');
        console.log(category);
        window.location.href = `/home?search=${category}`;
    }


    return (
        <div className="welcome-page">
            {/* hero section */}
            <div className="hero-section">
                <div className="hero-info-section">
                    <div><img id='anandi-welcome-page' src="anandi-logo.png" alt="" /></div>
                    <div className="hero-section-text">
                        ELEGANCE. COMFORT. <br />
                        AFFORDABILITY. <br />
                        <div className="sub-text">All in one.</div>
                    </div>
                    <a id='shop-now-btn' href="/home">Shop Now</a>
                </div>
                <div className="gradient-welcome-image-section">
                    <div id="gradient-mask"></div>
                    <img id='shop-image' src="shop-name-image.jpg" alt="" />
                </div>
            </div>

            {/* category section */}
            <div className="welcome-category-section-wrapper">
                <div className="welcome-category-section">
                    <div className="welcome-category-title">Shop for</div>
                    <div className="welcome-categories">
                        <div className="welcome-category kurtis" onClick={categoryClickHandler}>
                            <img className='category-image' src="kurti-image.jpg" alt="" />
                            <div className="category-text">Kurtis</div>
                        </div>
                        <div className="welcome-category leggings" onClick={categoryClickHandler}>
                            <img className='category-image' src="nightwear-image.jpg" alt="" />
                            <div className="category-text">Leggings</div>
                        </div>
                        <div className="welcome-category palazzos" onClick={categoryClickHandler}>
                            <img className='category-image' src="nightwear-image.jpg" alt="" />
                            <div className="category-text">Palazzos</div>
                        </div>
                        <div className="welcome-category housecoats" onClick={categoryClickHandler}>
                            <img className='category-image' src="nightwear-image.jpg" alt="" />
                            <div className="category-text">House-coats</div>
                        </div>
                        <div className="welcome-category nightwear" onClick={categoryClickHandler}>
                            <img className='category-image' src="nightwear-image.jpg" alt="" />
                            <div className="category-text">Nightwears</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* shop information */}
            <div className="shop-info-section">
                <div className="shop-info shop-location">
                    <div className="shop-info-heading shop-location-text">Shop Location</div>
                    <div className="shop-info-text">53, Shyam Nagar Road, Kolkata - 700 055</div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.1125331596277!2d88.4148440746886!3d22.612272531516357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89e1e201b6629%3A0x370df84054d7d4b6!2s53%2C%20Shyam%20Nagar%20Rd%2C%20Satgachi%2C%20Baguiati%2C%20South%20Dumdum%2C%20West%20Bengal%20700055!5e0!3m2!1sen!2sin!4v1716826947798!5m2!1sen!2sin"
                        
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <div className="shop-info reach-us-at">
                    <div className="shop-info-heading reach-us-at-text">Reach Us at</div>
                    <div className="shop-info-text"><b>Email:</b> anandiwears@gmail.com</div>
                    <div className="shop-info-text"><b>Contact:</b> +91 9007724730 / +91 8582802440</div>
                    <div className="social-container">
                        <i className="fa-brands fa-square-whatsapp welcome-socials"></i>
                        <i className="fa-brands fa-facebook welcome-socials"></i>
                        <a href="https://www.instagram.com/anandiwears/" target='_blank'><i className="fa-brands fa-square-instagram welcome-socials"></i></a>
                    </div>
                </div>
            </div>

            <br /><br /><br /><br />

            <div className="welcome-page-footer">
                ©2024 Anandi. All Rights Reserved.
            </div>
        </div>
    )
}

export default WelcomePage
