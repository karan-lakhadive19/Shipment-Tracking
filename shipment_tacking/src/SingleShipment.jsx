// SingleShipment.jsx
import React, { useState } from 'react';
import { ethers } from 'ethers';

const SingleShipment = ({ contract }) => {
    const [sender, setSender] = useState('');
    const [index, setIndex] = useState('');
    const [shipment, setShipment] = useState(null);

    const fetchShipment = async () => {
        if (contract && sender && index) {
            try {
                const shipmentDetails = await contract.getShipment(sender, index-1);
                setShipment(shipmentDetails);
                console.log(shipmentDetails);
            } catch (error) {
                console.error("Failed to fetch shipment:", error);
            }
        }
    };

    return (
        <div>
            <h2>Fetch Single Shipment</h2>
            <input
                type="text"
                placeholder="Sender Address"
                value={sender}
                onChange={(e) => setSender(e.target.value)}
            />
            <input
                type="number"
                placeholder="Shipment Index"
                value={index}
                onChange={(e) => setIndex(e.target.value)}
            />
            <button onClick={fetchShipment}>Fetch Shipment</button>
            {shipment && (
                <div>
                    <h3>Shipment Details</h3>
                    <p>Sender: {shipment[0]}</p>
                    <p>Receiver: {shipment[1]}</p>
                    <p>Pickup Time: {new Date(Number(shipment[2])).toLocaleDateString('en-GB')}</p>
                    <p>Delivery Time: {new Date(Number(shipment[3])).toLocaleDateString('en-GB')}</p>
                    <p>Distance: {Number(shipment[4])} km</p>
                    <p>Price: {ethers.formatEther(shipment[5])} ETH</p>
                    <p>Status: {Number(shipment[6]) === 0 ? "Pending" : Number(shipment[6]) === 1 ? "IN_TRANSIT" : "Delivered"}</p>
                    <p>Payment Status: {shipment[7] ? "Paid" : "Unpaid"}</p>
                </div>
            )}
        </div>
    );
};

export default SingleShipment;