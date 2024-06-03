import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const FilterSection = ({ setSizeFilters, setColorFilters, setBrandFilters, setPriceRangeFilters, fetchProducts }) => {


  const sizeFilters = ['M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL', 'Free-size'];
  const brandFilters = ['Arriba', 'Comfort Lady', 'FITS&FAB', 'Gemini', 'Koyena', 'Priincezz', 'Satyajit'];
  const priceRangeFilters = ['199-399', '400-599', '600-799', '800-999', '1000-1299'];
  const colorFilters = [
    'maroon', 'red', 'darkgoldenrod', "orangered", 'tan', 'orange', 'yellow', 'indianred', 'dodgerblue', "teal",
    'blue', 'darkblue', 'olive', 'darkolivegreen', 'lightgray', 'lightsalmon', 'powderblue', "darkmagenta",
    'cadetblue', 'darkseagreen', 'crimson', 'palevioletred', 'thistle', 'pink', 'hotpink', "saddlebrown",
    'cornflowerblue', 'navajowhite', 'lightsteelblue', 'midnightblue', 'slategrey', "mediumaquamarine",
    '#022b42', '#24465c'
  ];


  //taking size filter inputs
  function sizeFilterHandler(event) {
    const { value, checked } = event.target;
    setSizeFilters(prev =>
      checked ? [...prev, value] : prev.filter(size => size !== value)
    );
  }

  //taking color filter inputs
  function colorFilterHandler(event) {
    const { value, checked } = event.target;
    setColorFilters(prev =>
      checked ? [...prev, value] : prev.filter(color => color !== value)
    );
  }

  //taking brand filter inputs
  function brandFilterHandler(event) {
    const { value, checked } = event.target;
    setBrandFilters(prev =>
      checked ? [...prev, value] : prev.filter(brand => brand !== value)
    );
  }

  //taking price range filter inputs
  function priceRangeFilterHandler(event) {
    const { value, checked } = event.target;
    setPriceRangeFilters(prev =>
      checked ? [...prev, value] : prev.filter(priceRange => priceRange !== value)
    );
  }



  //APPLY FILTERS button onclick
  function applyFiltersHandler() {
    console.log('apply filter btn clicked');
    fetchProducts();
    const filterSection = document.querySelector('.filter-section');
    filterSection.style.left = '-80vw';
    window.scrollTo({ top: -100, behavior: 'smooth' });
  }

  // Function-close the FILTER SECTION
  function filterCloseHandler() {
    const filterSection = document.querySelector('.filter-section');
    filterSection.style.left = '-80vw';
  }


  return (
    <>
      <div className="filter-section" style={{ paddingLeft: "1.5%" }}>
        <div className='' style={{ textAlign: 'end' }}></div>
        <h2 id="filter-heading-text">
          Filters <i className="fa-solid fa-xmark filter-close-btn" onClick={filterCloseHandler}></i>
        </h2>
        <hr style={{ margin: "5px -4px" }} />

        <button id="apply-filter-btn" onClick={applyFiltersHandler}>Apply Filters</button>
        <div className="filter-categories">
          {/* Size filters */}
          <details className="filters size" open>
            <summary className="filter-headings">Sizes</summary>
            {sizeFilters.map((size, index) => (
              <div className="filter-options" key={index}>
                <input id={size} type="checkbox" className="checkbox" value={size} name="checkbox" onChange={sizeFilterHandler} />
                <label htmlFor={size}>
                  {size}
                  {size === 'M' && ' (38in)'}
                  {size === 'L' && ' (40in)'}
                  {size === 'XL' && ' (42in)'}
                  {size === 'XXL' && ' (44in)'}
                  {size === '3XL' && ' (46in)'}
                  {size === '4XL' && ' (48in)'}
                  {size === '5XL' && ' (50in)'}
                </label>
              </div>
            ))}
          </details>

          {/* Brand filters */}
          <details className="filters brand" open>
            <summary className="filter-headings">Brands</summary>
            {brandFilters.map((brand, index) => (
              <div className="filter-options" key={index}>
                <input id={brand} type="checkbox" className="checkbox" value={brand} name="checkbox" onChange={brandFilterHandler} />
                <label htmlFor={brand}>{brand}</label>
              </div>
            ))}
          </details>

          {/* Price filters */}
          <details className="filters price" open>
            <summary className="filter-headings">Price Range</summary>
            {priceRangeFilters.map((priceRange, index) => (
              <div className="filter-options" key={index}>
                <input id={priceRange} type="checkbox" className="checkbox" value={priceRange} name="checkbox" onChange={priceRangeFilterHandler} />
                <label htmlFor={priceRange}>Rs. {priceRange.replace('-', ' to ')}</label>
              </div>
            ))}
          </details>

          {/* Color filters */}
          <details className="filters colors" open>
            <summary className="filter-headings">Colors</summary>
            {colorFilters.map((color, index) => (
              <div className="filter-options" key={index}>
                <input id={color} type="checkbox" className="checkbox" value={color} name="checkbox" onChange={colorFilterHandler} />
                <div className="color filter-color" style={{ backgroundColor: color }}></div>
                <label htmlFor={color}>{color}</label>
              </div>
            ))}
          </details>
        </div>
      </div>
    </>
  );
}

export default FilterSection;
