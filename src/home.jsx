import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const company = useSelector((state) => state.company);

  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-center">Home</h1>

      <section className="bg-white shadow-md rounded-lg p-6 my-6">
        <h2 className="text-2xl font-semibold mb-4">Company Overview</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Name:</strong> {company?.name}</li>
          <li><strong>Established:</strong> {company?.established}</li>
          <li><strong>Location:</strong> {company?.location}</li>
          <li><strong>Phone:</strong> {company?.phone}</li>
          <li><strong>Email:</strong> {company?.email}</li>
        </ul>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Products</h2>
        <ul className="list-disc list-inside">
          {company?.productRange.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6 mt-6">
        <h2 className="text-2xl font-semibold mb-4">Services</h2>
        <ul className="list-disc list-inside">
          {company?.services.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
