import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import FilterSection from '../components/FilterSection'
import Footer from '../components/Footer'
import { NavLink, useLocation } from 'react-router-dom'
import './App.css'

function App() {

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  console.log(query.get('search'));

  const [product_list, setProduct_list] = useState([]);   //actual product list fetched from server
  const [searchInput, setSearchInput] = useState(query.get('search') || '');     //search input from searchbar or url query
  console.log(searchInput);

  //states for product filters
  //set methods are sent to FilterSection component using prop
  const [sizeFilters, setSizeFilters] = useState([]);
  const [colorFilters, setColorFilters] = useState([]);
  const [brandFilters, setBrandFilters] = useState([]);
  const [priceRangeFilters, setPriceRangeFilters] = useState([]);

  //accumulating all filters 
  const filters = {
    size: encodeURIComponent(sizeFilters.join('+')),
    color: encodeURIComponent(colorFilters.join('+')),
    brand: encodeURIComponent(brandFilters.join('+')),
    pricerange: encodeURIComponent(priceRangeFilters.join('+'))
  }

  //fetching all products from database on first render
  useEffect(() => {
    fetchProducts();
  }, []);


  //product fetch method
  async function fetchProducts() {
    setProduct_list([]);
    try {
      let fetchURI;
      (searchInput !== '' || filters.size !== '' || filters.color !== '' || filters.brand !== '' || filters.pricerange !== '') ?
        fetchURI = `https://anandiwears-backend.vercel.app/api/products?search=${searchInput}&size=${filters.size}&color=${filters.color}&brand=${filters.brand}&pricerange=${filters.pricerange}` :
        fetchURI = `https://anandiwears-backend.vercel.app/api/products`;
      console.log(fetchURI);

      let result = await fetch(fetchURI);
      let data = await result.json();
      setProduct_list(data);
    }
    catch (error) {
      console.log(error);
    }
  }


  // JSX CONTENT
  return (
    <>
      <Navbar searchInput={searchInput} setSearchInput={setSearchInput} fetchProducts={fetchProducts} />


      <main>
        <FilterSection
          setSizeFilters={setSizeFilters}
          setColorFilters={setColorFilters}
          setBrandFilters={setBrandFilters}
          setPriceRangeFilters={setPriceRangeFilters}
          fetchProducts={fetchProducts}
        />

        <div id="main-seperator"></div>

        <div className="product-section">
          {product_list.length ? (
            <>
              <div id="item-count" style={{ width: "100%", fontSize: "18px", color: "grey" }}>
                {product_list.length} Items
              </div>

              {/* product card iteration */ }
              {product_list.map(product => (
                <NavLink to={`/product/${product.prod_id}`} className="product-card" key={product.prod_id}>
                  <div className="product-image-container">
                    <img className="product-image" src={product.prod_thumb} alt="" />
                  </div>
                  <div className="product-info">
                    <div className="product-brand">{product.prod_brand}</div>
                    <div className="product-name">{product.prod_name}</div>
                    <div className="product-size">
                      {product.prod_sizes.map((prod_size, index) => (
                        <div className="available-size" key={index}>{prod_size}</div>
                      ))}
                    </div>
                    <div className="product-color">
                      {product.prod_colors.map((prod_color, index) => (
                        <div className="color" key={index} style={{ backgroundColor: prod_color }}></div>
                      ))}
                    </div>
                    <div className="product-price">Rs. {product.prod_price}</div>
                  </div>
                </NavLink>
              ))}
            </>
          ) : (
            <div className="loader" style={{marginTop:'200px'}}>
              <br /><br /><br /><br /> Loading...
            </div>
          )}
        </div>

      </main>


      <Footer />
    </>
  )
}

export default App
