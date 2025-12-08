import React from "react";
 const Aboutus =() =>{
    return(
         <div  id="home-section">
     <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Company Overview</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Name:</strong> MOOGAMBIGAI ENTERPRISES</li>
          <li><strong>Established:</strong> 2020</li>
          <li><strong>Location:</strong> Chennai, Tamil Nadu, India</li>
          <li>
            <strong>Contact Information:</strong>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Phone: +91-44-61753149</li>
              <li>Email: Moogambigaid5@gmail.com</li>
            </ul>
          </li>
        </ul>
      </section>
      </div>
    )
   
 }

 export default Aboutus;