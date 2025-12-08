// import React from 'react';
// import { Link } from "react-router-dom";
// const Header = () => {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         gap: '20px',
//         padding: '10px',
//         backgroundColor: '#f0f0f0',
//         justifyContent: 'center',
//       }}
//     >
import React from "react";

const Header = () => {
  return (
    //     <div
    //   style={{
    //     display: 'flex',
    //     gap: '20px',
    //     padding: '10px',
    //     backgroundColor: '#f0f0f0',
    //     justifyContent: 'center',
    //   }}
    // >
    <nav className="bg-gray-800 text-white py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-center gap-x-12">
        <a href="/#home-section" className="hover:text-yellow-300">
          Home
        </a>
        <a href="#about-section" className="hover:text-yellow-300">
          About
        </a>
        <a href="#contact-section" className="hover:text-yellow-300">
          Contact
        </a>
      </div>
    </nav>
    // </div>
  );
};

export default Header;



//       <h6 style={{ margin: 0, cursor: 'pointer' }}>About Us</h6>
//       <h6 style={{ margin: 0, cursor: 'pointer' }}>Products</h6>
//       <h6 style={{ margin: 0, cursor: 'pointer' }}>Brands</h6>
//       <h6 style={{ margin: 0, cursor: 'pointer' }}>Contact</h6>
//     </div>
//   );
// };

// export default Header;
