import React, { useEffect, useState } from "react";
import RequestForm from "./components/RequestForm";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/requests")
      .then((res) => res.json())
      .then((data) => setRequests(data));
  }, []);

  const handleNewRequest = (newRequest) => {
    setRequests((prev) => [...prev, newRequest]);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:8000/requests/${id}`, {
      method: "DELETE",
    });
    setRequests((prev) => prev.filter((req) => req.id !== id));
  };

  const clearAll = async () => {
    await fetch("http://localhost:8000/requests", {
      method: "DELETE",
    });
    setRequests([]);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-blue-800 text-center">
        Hospital Emergency Request Portal
      </h1>
      <RequestForm onRequestAdded={handleNewRequest} />
      <div className="w-full max-w-5xl mt-10">
        <Dashboard requests={requests} onDelete={handleDelete} />
        {requests.length > 0 && (
          <button
            onClick={clearAll}
            className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
          >
            Clear Dashboard
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
