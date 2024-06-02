import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './ProductPage.css'
import Footer from '../components/Footer';

const ProductPage = () => {
    const { id } = useParams();
    const [product_details, setProduct_details] = useState();

    const navigate = useNavigate;

    useEffect(() => {
        async function getProduct() {
            try {
                const result = await fetch(`https://anandiwears-backend.vercel.app/api/products/${id}`);
                // console.log('ProdPage.jsx 15:   ', result);
                const data = await result.json();
                // console.log(data[0]);
                setProduct_details(data[0]);
            }
            catch (error) {
                console.log(error);
            }
        }
        getProduct();
    }, []);


    function likeBtnHandler() {
        alert("Product Liked");
    }

    function backClickHandler() {
        window.location.href = '/home';
    }

    function logoClickHandler(params) {
        window.location.href = '/home';
    }
    



    // JSX Content
    return (
        <>
            {/* <Navbar fetchProducts={dummyFetchProducts} setSearchInput={dummySetSearchInput} /> */}
            <div className="product-page-navbar">
                <i className="fa-solid fa-arrow-left" onClick={backClickHandler}></i>
                <img id='anandi-prod-page-logo' src="/anandi-logo.png" alt="" onClick={logoClickHandler} />
                <img id="anandi-mobile" src="/anandi-logo.png" alt="" onClick={logoClickHandler} />
            </div>


            <div className="product-page-container">
                {product_details ? (
                    <div className="product-page">
                        {product_details.prod_images && (
                            <div className='product-page-image-container'>
                                {product_details.prod_images.map((image, index) => (
                                    <img className='product-page-image' key={index} src={image} alt="" />
                                ))}
                            </div>
                        )}

                        <div className="product-page-details">
                            <div className='product-page-prod-brand'>{product_details.prod_brand}</div>
                            <div className='product-page-prod-name'>{product_details.prod_name}</div>
                            <hr className='prod-page-hr' />
                            <div className="product-page-prod-price">MRP Rs.{product_details.prod_price}</div>
                            <div style={{ color: 'grey' }}>Inclusive of all taxes</div>

                            {product_details.in_stock ? (
                                <div style={{ color: 'green', fontSize: '30px', fontWeight: 600 }}>In Stock</div>
                            ) : (
                                <div style={{ color: 'red', fontSize: '30px', fontWeight: 600 }}>Out of Stock</div>
                            )}

                            {product_details.prod_variants && (
                                <div className="product-variant-wrapper">
                                    {product_details.prod_variants.map((variant, index) => (
                                        <div className="product-page-prod-variant" key={index}>
                                            <div className="prod-size">{variant.size}</div>
                                            <div className="prod-color-wrapper">
                                                {variant.colors.map((color, index) => (
                                                    <div className='prod-color' key={index} style={{ backgroundColor: color }}></div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <button className="product-like-btn" onClick={likeBtnHandler}>
                                <i className="fa-solid fa-heart"></i>
                                Like this product
                            </button>
                            <br />
                            <b>NOTE:</b> <br />
                            1. Color shown in images may differ from actual product. <br />
                            2. Contact store to inquire about size and colour availability (Scroll to bottom).
                        </div>
                    </div>
                ) : (
                    <div className="loader"></div>
                )}
            </div>


            <Footer />
        </>
    )
}

export default ProductPage;
