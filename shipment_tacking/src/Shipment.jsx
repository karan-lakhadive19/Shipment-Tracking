import React, { useState } from "react";
import { ethers } from "ethers";

const Shipment = ({ contract }) => {
  // const [receiver, setReceiver] = useState('');
  // const [pickupTime, setPickupTime] = useState('');
  // const [distance, setDistance] = useState('');
  // const [price, setPrice] = useState('');
  const [shipment, setShipment] = useState({
    receiver: "",
    pickupTime: "",
    distance: "",
    price: "",
  });

  const createShipment = async (e) => {
    e.preventDefault();
    // console.log("Hello")
    const pt = new Date(shipment.pickupTime).getTime();
    const prc = ethers.parseUnits(shipment.price, 18);
    console.log("Price:", prc);
    const tx = await contract.createShipment(
      shipment.receiver,
      pt,
      shipment.distance,
      prc,
      { value: prc }
    );
    await tx.wait();
    alert("Shipment created!");

    console.log("Transaction hash : ", tx.hash);

    const receipt = await tx.wait();
    const eventx = receipt.events?.filter((x) => {
      return x.eventx == "ShipmentCreated";
    })[0];
    console.log("Event : ", receipt.logs[0]);
    // if (receipt.events) {
    //     receipt.events.forEach((event) => {
    //         console.log('Event:', event.event, 'Data:', event.args);
    //     });
    // } else {
    //     console.log('No events found in the receipt.');
    // }

    // const event = receipt.logs[0].args?.filter((x) => {
    //     return x.event == "ShipmentCreated"
    // })[0];
    if (receipt.logs[0].args) {
      console.log("Event Details:", receipt.logs[0].args);
    } else {
      console.log('No "ShipmentCreated" event found in the receipt.');
    }

    // Format and log the shipment details
    const formattedPrice = ethers.formatEther(prc);
    const pickupTimeFormatted = new Date(pt).toLocaleString();
    console.log(`Shipment Details:
            Receiver: ${shipment.receiver},
            Pickup Time: ${pickupTimeFormatted},
            Distance: ${shipment.distance} km,
            Price: ${formattedPrice} ETH`);

    alert("Shipment created!");
  };

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      
      <form
        onSubmit={createShipment} className="space-y-6"
      >
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Create Shipment</h5>
        <input
          type="text"
          value={shipment.receiver}
          onChange={(e) =>
            setShipment({ ...shipment, receiver: e.target.value })
          }
          placeholder="Receiver Address"
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        />
        <input
          type="date"
          value={shipment.pickupTime}
          onChange={(e) =>
            setShipment({ ...shipment, pickupTime: e.target.value })
          }
          placeholder="Pickup Time"
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        />
        <input
          type="text"
          value={shipment.distance}
          onChange={(e) =>
            setShipment({ ...shipment, distance: e.target.value })
          }
          placeholder="Distance"
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        />
        <input
          type="text"
          value={shipment.price}
          onChange={(e) => setShipment({ ...shipment, price: e.target.value })}
          placeholder="Price"
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        />
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create Shipment
        </button>
      </form>
    </div>
  );
};

export default Shipment;
