import React, { useState } from 'react';

const ShipmentCount = ({ contract }) => {
    const [senderAddress, setSenderAddress] = useState('');
    const [shipmentCount, setShipmentCount] = useState('0');

    const fetchShipmentCount = async () => {
        if (contract && senderAddress) {
            try {
                const count = await contract.getShipmentsCount(senderAddress);
                setShipmentCount(count); 
                console.log(count);// This updates the state
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
        <div>
            <h2>Shipment Count</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={senderAddress}
                    onChange={handleAddressChange}
                    placeholder="Enter sender's address"
                />
                
                <button type="submit">Submit</button>
            </form>
            <p>Total Shipments: {Number(shipmentCount)}</p> {/* This will update automatically */}
        </div>
    );
};

export default ShipmentCount;