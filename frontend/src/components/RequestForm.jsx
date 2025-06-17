import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const RequestForm = ({ onRequestAdded }) => {
  const [formData, setFormData] = useState({
    hospital: "",
    resource: "",
    quantity: "",
    urgency: "",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestWithId = {
      ...formData,
      id: uuidv4(),
    };

    const res = await fetch("http://localhost:8000/requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestWithId),
    });

    const result = await res.json();
    onRequestAdded(result.data);

    setFormData({
      hospital: "",
      resource: "",
      quantity: "",
      urgency: "",
      contact: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-md w-full max-w-md text-gray-700"
    >
      <h2 className="text-xl font-semibold mb-4">Raise a New Request</h2>

      <input
        type="text"
        name="hospital"
        placeholder="Hospital Name"
        value={formData.hospital}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2 mb-3"
        required
      />

      <input
        type="text"
        name="resource"
        placeholder="Resource Needed (e.g., Blood, Oxygen)"
        value={formData.resource}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2 mb-3"
        required
      />

      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={formData.quantity}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2 mb-3"
        required
      />

      <input
        type="text"
        name="urgency"
        placeholder="Urgency Level (e.g., High, Medium)"
        value={formData.urgency}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2 mb-3"
        required
      />

      <input
        type="text"
        name="contact"
        placeholder="Hospital Contact Number"
        value={formData.contact}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2 mb-4"
        required
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full"
      >
        Submit Request
      </button>
    </form>
  );
};

export default RequestForm;
