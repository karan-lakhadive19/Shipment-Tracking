// StartShipment.jsx
import React, { useState } from "react";

const StartShipment = ({ contract }) => {
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [index, setIndex] = useState("");

  const startShipment = async () => {
    if (contract && sender && receiver && index) {
      try {
        await contract.startShipment(sender, receiver, index - 1);
        alert("Shipment started successfully!");
      } catch (error) {
        console.error("Failed to start shipment:", error);
      }
    }
  };

  return (
    <div style={{ textAlign: "center",}}>
      <h5 className="text-xl font-medium text-gray-900 dark:text-white py-6">Start Shipment</h5>
      <form style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Sender Address"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white pr-10 mr-5"
        />
        <input
          type="text"
          placeholder="Receiver Address"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white pr-10 mr-5"
        />
        <input
          type="number"
          placeholder="Shipment Index"
          value={index}
          onChange={(e) => setIndex(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white pr-10 mr-5"
        />
        <div className='py-3'></div>
        <button
          type="submit"
          className="w-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={startShipment}
        >
          Start Shipment
        </button>
      </form>
    </div>
  );
};

export default StartShipment;
