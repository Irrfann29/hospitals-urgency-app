import React from "react";

const Dashboard = ({ requests, onDelete }) => {
  return (
    <div className="overflow-x-auto bg-white rounded shadow-md p-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Request Dashboard</h2>
      <table className="w-full border border-gray-300">
        <thead className="bg-blue-100">
          <tr>
            <th className="border px-4 py-2">Hospital</th>
            <th className="border px-4 py-2">Resource</th>
            <th className="border px-4 py-2">Quantity</th>
            <th className="border px-4 py-2">Urgency</th>
            <th className="border px-4 py-2">Contact</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req) => (
            <tr key={req.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{req.hospital}</td>
              <td className="border px-4 py-2">{req.resource}</td>
              <td className="border px-4 py-2">{req.quantity}</td>
              <td className="border px-4 py-2">{req.urgency}</td>
              <td className="border px-4 py-2">{req.contact}</td>
              <td className="border px-4 py-2 text-center">
                <button
                  onClick={() => onDelete(req.id)}
                  className="text-red-600 cursor-pointer font-semibold hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
