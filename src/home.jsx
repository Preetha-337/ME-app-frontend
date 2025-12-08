import React from "react";

const Home = () => {
  return (
    <div id="home-section" className="max-w-5xl mx-auto p-6 space-y-6 text-gray-800">
      <h1 className="text-3xl font-bold text-center">Home</h1>

     

      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Business Description</h2>
        <p>
          Core Business: Trading and distribution of high-quality wiring harnesses and accessories for automotive, industrial, and consumer electronics applications.
        </p>
        <p className="mt-2">
          <strong>Product Range:</strong>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Automotive Wiring Harnesses</li>
            <li>Industrial Wiring Harnesses</li>
            <li>Consumer Electronics Wiring Harnesses</li>
            <li>Connectors and Terminals</li>
            <li>Custom Wiring Solutions</li>
          </ul>
        </p>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Key Products and Services</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Automotive Wiring Harnesses:</strong> Leading manufacturers like Tyco, Sumitomo, Yazaki, Molex, and Delphi.
          </li>
          <li>
            <strong>Industrial Wiring Harnesses:</strong> Designed for heavy machinery, industrial equipment & automobile wiring harness.
          </li>
          <li>
            <strong>Consumer Electronics Wiring Harnesses:</strong> Suitable for appliances and electronic devices.
          </li>
          <li>
            <strong>Custom Wiring Solutions:</strong> Tailored to meet specific customer requirements.
          </li>
          <li>
            <strong>Additional Services:</strong> Import and export services, custom clearance, and freight forwarding.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
