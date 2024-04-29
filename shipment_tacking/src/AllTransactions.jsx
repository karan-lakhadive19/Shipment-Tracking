// AllTransactions.jsx
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
const AllTransactions = ({ contract }) => {
    const [transactions, setTransactions] = useState([]);


    useEffect(() => {
        const fetchTransactions = async () => {
            if (contract) {
                const allTransactions = await contract.getAllTransactions();
                setTransactions(allTransactions);
                console.log('Fetched Transactions:', (allTransactions[28].status));
                // console.log( 'Receiver',)
            }
        };

        fetchTransactions();
    }, [contract]);

    return (
        <div>
    <h5 className="text-xl font-medium text-gray-900 dark:text-white py-6 text-center">All Transactions</h5>
    <table style={{ borderCollapse: 'collapse', width: '100%', border: '1px solid #ddd', borderRadius: '5px' }}>
        <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Index</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Sender Address</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Receiver Address</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Pickup Time</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Distance (km)</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Delivery Time</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Payment Status</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Status</th>
            </tr>
        </thead>
        <tbody>
            {transactions.map((transaction, index) => (
                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f2f2f2' }}>
                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{index + 1}</td>
                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{transaction.sender}</td>
                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{transaction.receiver}</td>
                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{new Date(Number(transaction.pickupTime)).toLocaleDateString('en-GB')}</td>
                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{Number(transaction.distance)}</td>
                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{new Date(Number(transaction.deliveryTime) * 1000).toLocaleString()}</td>
                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{transaction.isPaid ? 'Paid' : 'Unpaid'}</td>
                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{Number(transaction.status) === 0
                        ? "Pending"
                        : Number(transaction.status) === 1
                        ? "IN_TRANSIT"
                        : "Delivered"}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>


    );
};

export default AllTransactions;