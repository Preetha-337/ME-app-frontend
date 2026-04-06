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

  useEffect(() => {
    // Prevent horizontal scroll
    document.body.style.overflowX = "hidden";

    // Set minimum font-size for mobile inputs dynamically
    const style = document.createElement("style");
    style.id = "mobile-zoom-fix";
    style.innerHTML = `
      input, select, textarea, button {
        font-size: 16px !important;
        -webkit-text-size-adjust: 100%;
      }
    `;
    if (!document.getElementById("mobile-zoom-fix")) {
      document.head.appendChild(style);
    }

    return () => {
      document.body.style.overflowX = "auto";
      const injected = document.getElementById("mobile-zoom-fix");
      if (injected) injected.remove();
    };
  }, []);

  return (
    <Provider store={store}>
      {/* Background overlay */}
      <div style={overlayStyle} />

      {/* Main content */}
      <div style={{ position: "relative", zIndex: 0, touchAction: "manipulation" }}>
        <Router />
      </div>
    </Provider>
  );
}

export default App;