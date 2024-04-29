// SingleShipment.jsx
import React, { useState } from "react";
import { ethers } from "ethers";

const SingleShipment = ({ contract }) => {
  const [sender, setSender] = useState("");
  const [index, setIndex] = useState("");
  const [shipment, setShipment] = useState(null);

  const fetchShipment = async () => {
    if (contract && sender && index) {
      try {
        const shipmentDetails = await contract.getShipment(sender, index - 1);
        setShipment(shipmentDetails);
        console.log(shipmentDetails);
      } catch (error) {
        console.error("Failed to fetch shipment:", error);
      }
    }
  };

  return (
    <div style={{ textAlign: "center",}}>
      <h5 className="text-xl font-medium text-gray-900 dark:text-white py-6">Fetch Single Shipment</h5>
      <input
        type="text"
        placeholder="Sender Address"
        value={sender}
        onChange={(e) => setSender(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white pr-10 mr-5"
      />
      <input
        type="number"
        placeholder="Shipment Index"
        value={index}
        onChange={(e) => setIndex(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white pr-10 mr-5"
      />
      <button
        type="submit"
        onClick={fetchShipment}
        className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Fetch Shipment
      </button>
      {shipment && (
        <div style={{ marginTop: "20px", textAlign: "left" }}>
          <h3 style={{ color: "#2E3135", fontSize: "20px" }}>
            Shipment Details
          </h3>
          <p>Sender: {shipment[0]}</p>
          <p>Receiver: {shipment[1]}</p>
          <p>
            Pickup Time:{" "}
            {new Date(Number(shipment[2])).toLocaleDateString("en-GB")}
          </p>
          <p>
            Delivery Time:{" "}
            {new Date(Number(shipment[3])).toLocaleDateString("en-GB")}
          </p>
          <p>Distance: {Number(shipment[4])} km</p>
          <p>Price: {ethers.formatEther(shipment[5])} ETH</p>
          <p>
            Status:{" "}
            {Number(shipment[6]) === 0
              ? "Pending"
              : Number(shipment[6]) === 1
              ? "IN_TRANSIT"
              : "Delivered"}
          </p>
          <p>Payment Status: {shipment[7] ? "Paid" : "Unpaid"}</p>
        </div>
      )}
    </div>
  );
};

export default SingleShipment;
