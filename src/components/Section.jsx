import React from 'react'
import '../styles/Section.css'
import luggage from '../assets/luggage.WEBP'
import backpacks from '../assets/backpacks.WEBP'
import duffles from '../assets/duffles.WEBP'
import bestsellers from '../assets/bestsellers.WEBP'
import newarrivals from '../assets/newarrivals.WEBP'
import hereforu from '../assets/hereforu.png'

const Section = () => {
  return (
    <>
      <div className="best-sellers">
        <img src={bestsellers} alt="" />
        <div className="bestsellers-text">
          <h2>Best Sellers</h2>
          <div id='color-line'></div>
          <p>Shop American Tourister's best-sellers online.
            Discover the most popular, top-rated travel gear handpicked by American Tourister fans!</p>
          <button>Shop Now</button>
        </div>
      </div>

      <div className="new-arrivals">
        <img src={newarrivals} alt="" />
        <div className="newarrivals-text">
          <h2>New Arrivals</h2>
          <div id='color-line'></div>
          <p>Shop new carry-on luggage to backpacks. Freshen up your
            next trip with the latest in luggage and travel gear.</p>
          <button>Shop Now</button>
        </div>
      </div>

      <div className="three-bags">
        <div className="luggage">
          <div id='luggage-bag'>
            <img src={luggage} alt="" />
          </div>
          <h5>Luggage More</h5>
        </div>
        <div className="backpacks">
          <div id='backpacks-bag'>
            <img src={backpacks} alt="" />
          </div>
          <h5>Backpacks More</h5>
        </div>
        <div className="duffles">
          <div id='duffles-bag'>
            <img src={duffles} alt="" />
          </div>
          <h5>Duffles More</h5>
        </div>
      </div>

      <div className="here-foru">
        <img src={hereforu} alt="" />
        <div className="here-text">
          <h2>Here For You</h2>
          <div id='color-line'></div>
          <p>Discover answers for our most frequently asked questions
            plus how to deal with any issue you might encounter.</p>
          <button>Let Us Help</button>
        </div>
      </div>

    </>
  )
}

export default Section
