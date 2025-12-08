// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Banner from './Banner'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import background from './assets/background.jpg'
import Header from './Navbar/Header'

function App() {
  // const appStyle = {
  //   backgroundImage:`url(${background})`,
  //   backgroundSize: "cover",
  //    backgroundRepeat: "no-repeat",
  //   backgroundPosition: "center",
  // };
const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  opacity: 0.4,  
  zIndex: -1,
};
  return (
    <Provider store={store}>
      {/* <div style={appStyle}>   */}
          <div className='float-end'>
            <Header/>
        </div>
        <div style={overlayStyle}>
      
      </div>
        <Banner/>
      {/* </div> */}
    </Provider>
  );
}

export default App;