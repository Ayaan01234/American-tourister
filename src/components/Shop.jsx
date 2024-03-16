import React from 'react'
import '../styles/Shop.css'
import purplebag from '../assets/purplebag.WEBP'
import bluebag from '../assets/bluebag.WEBP'

const Shop = () => {
  return (
    <>
      <div className="shop-section">
      <h1>Shop products</h1>
    <div id='color-line'></div>
    <span className='shop-buttons'>
        <button id='popular-btn'>Most popular</button>
        <button>What's new</button>
        <button>Bestseller</button>
    </span>

    <div className="popular-products">
      <div className="first-bag">
        <img src={purplebag} alt="" />
        <h2>FORNAX</h2>
        <h3>9,375</h3>
        <button>ADD TO CART</button>
      </div>

      <div className="second-bag">
        <img src={bluebag} alt="" />
        <h2>FORNAX</h2>
        <h3>9,375</h3>
        <button>ADD TO CART</button>
      </div>

      <div className="third-bag">
        <img src={bluebag} alt="" />
        <h2>FORNAX</h2>
        <h3>9,375</h3>
        <button>ADD TO CART</button>
      </div>
    </div>
      </div>
    
      
    </>
  )
}

export default Shop
