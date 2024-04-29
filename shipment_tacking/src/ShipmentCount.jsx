import React, { useState } from "react";

const ShipmentCount = ({ contract }) => {
  const [senderAddress, setSenderAddress] = useState("");
  const [shipmentCount, setShipmentCount] = useState("0");

  const fetchShipmentCount = async () => {
    if (contract && senderAddress) {
      try {
        const count = await contract.getShipmentsCount(senderAddress);
        setShipmentCount(count);
        console.log(count); // This updates the state
      } catch (error) {
        console.error("Failed to fetch shipment count:", error);
      }
    }
  };

  const handleAddressChange = (event) => {
    setSenderAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    fetchShipmentCount();
    console.log(shipmentCount); // Fetch the shipment count
  };

  return (
    <div style={{ textAlign: "center",}}>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white py-6">Shipment Count</h5>
      <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
        <input
          type="text"
          value={senderAddress}
          onChange={handleAddressChange}
          placeholder="Enter sender's address"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white pr-10 mr-5"
        />
        <button
          type="submit"
          className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      <p className=" text-white">
        Total Shipments: {Number(shipmentCount)}
      </p>
    </div>
  );
};

export default ShipmentCount;
