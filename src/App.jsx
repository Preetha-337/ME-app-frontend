import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Router from "./Router";
import background from "./assets/background.jpg";

function App() {
  const overlayStyle = {
    position: "fixed",
    inset: 0,
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    opacity: 0.4,
    zIndex: -1,
  };

  // Prevent horizontal scroll
  useEffect(() => {
    document.body.style.overflowX = "hidden"; // disables horizontal scroll
    return () => {
      document.body.style.overflowX = "auto"; // restore on unmount
    };
  }, []);

  return (
    <Provider store={store}>
      <div style={overlayStyle}></div>
      <div style={{ position: "relative", zIndex: 0 }}>
        <Router />
      </div>
    </Provider>
  );
}

export default App;
