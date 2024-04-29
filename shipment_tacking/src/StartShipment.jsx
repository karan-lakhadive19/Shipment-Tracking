// StartShipment.jsx
import React, { useState } from 'react';

const StartShipment = ({ contract }) => {
    const [sender, setSender] = useState('');
    const [receiver, setReceiver] = useState('');
    const [index, setIndex] = useState('');

    const startShipment = async () => {
        if (contract && sender && receiver && index) {
            try {
                await contract.startShipment(sender, receiver, index-1);
                alert('Shipment started successfully!');
            } catch (error) {
                console.error("Failed to start shipment:", error);
            }
        }
    };

    return (
        <div>
            <h2>Start Shipment</h2>
            <input
                type="text"
                placeholder="Sender Address"
                value={sender}
                onChange={(e) => setSender(e.target.value)}
            />
            <input
                type="text"
                placeholder="Receiver Address"
                value={receiver}
                onChange={(e) => setReceiver(e.target.value)}
            />
            <input
                type="number"
                placeholder="Shipment Index"
                value={index}
                onChange={(e) => setIndex(e.target.value)}
            />
            <button onClick={startShipment}>Start Shipment</button>
        </div>
    );
};

export default StartShipment;