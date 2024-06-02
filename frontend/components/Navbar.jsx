import React, { useEffect, useState } from 'react';

const Navbar = ({ setSearchInput, fetchProducts }) => {

    const [clickedCategory, setClickedCategory] = useState();   //dummy searchInput state to call fetchProducts()

    //to open the FILTER SECTION
    function hamburgClickHandler() {
        const filterSection = document.querySelector('.filter-section');
        filterSection.style.left = '0vw';
    }

    //return home when logo is clicked
    function logoClickHandler() {
        window.location.href = '/';
    }

    //when a category is clicked
    function handleCategoryWrapperClick(event) {
        if (event.target.classList.contains('categories')) {
            setSearchInput(event.target.innerText);
            setClickedCategory(event.target.innerText);
        }
    }
    /* used 'clickedCategory' since using fetchProducts() in above handler won't work
    as searchInput state isn't updated instantly */
    //so when clickedCategory state is updated, searchInput state is updated and then fetchProducts is called
    useEffect(() => {
        fetchProducts();
    }, [clickedCategory]);


    //searching from searchbar
    function handleSearch(event) {
        if (event.key === 'Enter') {
            fetchProducts();
        }
    }

    function handleInputChange(event) {
        setSearchInput(event.target.value);
    }

    function showContactDetails() {
        const contactDetails = document.querySelector('.contact-details-wrapper');
        contactDetails.classList.remove('hidden');
    }
    function closeContactDetails() {
        const contactDetails = document.querySelector('.contact-details-wrapper');
        contactDetails.classList.add('hidden');
    }

    return (
        <>
            <header>
                {/* navbar */}
                <div className="navbar">
                    <div className="nav-lefties">
                        <i className="fa-solid fa-bars hamburg-icon" onClick={hamburgClickHandler}></i>

                        <img id="anandi" src="/anandi-logo.png" alt="" onClick={logoClickHandler} />
                        <img id="anandi-mobile" src="/anandi-favicon.png" alt="" onClick={logoClickHandler} />

                        <div className="categories-wrapper" onClick={handleCategoryWrapperClick}>
                            <a href='#' className="categories">Kurti</a>
                            <a href='#' className="categories">Leggings</a>
                            <a href='#' className="categories">Palazzo</a>
                            <a href='#' className="categories">House-coat</a>
                            <a href='#' className="categories">Nightwear</a>
                        </div>
                    </div>

                    <div className="nav-interact">
                        <div id="search-bar-container">
                            <i id="search-icon" className="fa-solid fa-magnifying-glass"></i>
                            <input id="search-bar" type="text" placeholder="Search item..." onKeyDown={handleSearch} onChange={handleInputChange} />
                        </div>
                        <div className="search-btn">
                            <i className="fa-solid fa-magnifying-glass" style={{ color: 'white' }} onClick={handleSearch}></i>
                        </div>

                        <div className="contact-btn" onClick={showContactDetails}>
                            <div className="desktop-contact-btn">CONTACT US</div>
                        </div>
                        <div className="contact-details-wrapper hidden">
                            <div className="contact-details">
                                <h2 className='contact-us-title'>
                                    Contact Us
                                    <i className="fa-solid fa-xmark contact-close-btn" onClick={closeContactDetails}></i>
                                </h2>

                                <hr />
                                <div className='contacts contact-number'>
                                    <i className="fa-solid fa-phone"></i>
                                    +91 90077 24730 / +91 85828 02440
                                </div>
                                <div className="contacts contact-email">
                                    <i className="fa-solid fa-envelope"></i>
                                    anandiwears@gmail.com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar
