import React from "react";
import { useSelector } from "react-redux";

const Aboutus = () => {
  const company = useSelector((state) => state.company);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg my-6">
      <h2 className="text-2xl font-semibold mb-4">Company Overview</h2>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Name:</strong> {company?.name}</li>
        {console.log("company",company)}
        <li><strong>Established:</strong> {company?.established}</li>
        <li><strong>Location:</strong> {company?.location}</li>
        <li><strong>Phone:</strong> {company?.phone}</li>
        <li><strong>Email:</strong> {company?.email}</li>
      </ul>
    </div>
  );
};

export default Aboutus;
