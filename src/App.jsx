import React from "react";
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

  return (
    <Provider store={store}>
      <div style={overlayStyle}></div>
      <Router />
    </Provider>
  );
}

export default App;
