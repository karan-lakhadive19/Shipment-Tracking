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
            <h2>All Transactions</h2>
            <table>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Sender Address</th>
                        <th>Receiver Address</th>
                        <th>Pickup Time</th>
                        <th>Distance (km)</th>
                        {/* <th>Price (ETH)</th> */}
                        <th>Delivery Time</th>
                        <th>Payment Status</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{transaction.sender}</td>
                            <td>{transaction.receiver}</td>
                            <td>{new Date(Number(transaction.pickupTime)).toLocaleDateString('en-GB')}</td>
                            <td>{Number(transaction.distance)}</td>
                            {/* <td>{Number(transaction.price)}</td> */}
                            <td>{new Date(Number(transaction.deliveryTime) * 1000).toLocaleString()}</td>
                            <td>{transaction.isPaid ? 'Paid' : 'Unpaid'}</td>
                            <td>{Number(transaction.status) == 0
                                    ? "Pending"
                                    : Number(transaction.status) == 1
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