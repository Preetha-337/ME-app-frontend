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

    // Fix iOS Safari zoom on input focus (font-size must be >= 16px)
    const style = document.createElement("style");
    style.id = "mobile-zoom-fix";
    style.innerHTML = `
      input, select, textarea {
        font-size: 16px !important;
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
      <div style={overlayStyle} />

      {/* touchAction: manipulation disables double-tap zoom */}
      <div style={{ position: "relative", zIndex: 0, touchAction: "manipulation" }}>
        <Router />
      </div>
    </Provider>
  );
}

export default App;