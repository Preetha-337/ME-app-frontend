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
    <div id="home" mt={8}>
        <Home/> 
           <Vission/>
     
       <Assurance/>
       <WhyWe/>
       <Product1/>
        {/* <Business/> */}
        <Production/>
        
        <Specification/>
        <Markets/>
        <Personalized/>
        {/* <Products/> */}
    </div>
  )
}

export default Allmodule