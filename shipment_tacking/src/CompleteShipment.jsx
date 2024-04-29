// CompleteShipment.jsx
import React, { useState } from 'react';

const CompleteShipment = ({ contract }) => {
    const [sender, setSender] = useState('');
    const [receiver, setReceiver] = useState('');
    const [index, setIndex] = useState('');

    const completeShipment = async () => {
        if (contract && sender && receiver && index) {
            try {
                await contract.completeShipment(sender, receiver, index-1);
                alert('Shipment completed successfully!');
            } catch (error) {
                console.error("Failed to complete shipment:", error);
            }
        }
    };

    return (
        <div>
            <h2>Complete Shipment</h2>
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
            <button onClick={completeShipment}>Complete Shipment</button>
        </div>
    );
};

export default CompleteShipment;