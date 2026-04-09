import React from 'react'
import Home from './home'
import Aboutus from './Aboutus'
import Business from './Business'
import Production from './Production'
import Specification from './Specification'
import Markets from './Markets'
import Vission from './Vission'
import Personalized from './Personalized'
import Products from './Products'
import Services from './Services'
import Product1 from './Product1'
import Client from './Clients'
import WhyWe from './Whywe'
import Assurance from './Assurance'

const Allmodule = () => {
  return (
    <div 
      id="home" 
      style={{ 
        marginTop: '32px',  // Replaced mt={8} with proper CSS
        overflowX: 'hidden', // Prevents horizontal scroll on the main container
        width: '100%',
        maxWidth: '100%',
        position: 'relative'
      }}
    >
      {/* Wrap content that shouldn't scroll horizontally */}
      <div style={{ overflowX: 'hidden' }}>
        <Home/> 
        <Vission/>
        <Assurance/>
        <WhyWe/>
        <Product1/>
        <Production/>
        <Specification/>
        <Markets/>
        <Personalized/>
      </div>
    </div>
  )
}

export default Allmodule