import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { contractABI, contractAddress } from './contract';

const Provider =({ children }) =>{
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [contract, setContract] = useState(null);

    useEffect(()=>{
        const init = async () => {
            
            // const provider = new ethers.JsonRpcProvider('http://127.0.0.1:8545', undefined, {
            //     staticNetwork: true
            // });
            // const signer = await provider.getSigner();
            // const contract = new ethers.Contract(contractAddress,contractABI, signer);

            // setProvider(provider);
            // setSigner(signer);
            // setContract(contract);
            if (typeof window.ethereum !== 'undefined') {
                console.log('MetaMask is installed!');

                // Connect to the user's wallet
                await window.ethereum.enable();

                // Create a provider connected to the user's wallet
                const provider = new ethers.BrowserProvider(window.ethereum);
                const signer = await provider.getSigner();
                const contract = new ethers.Contract(contractAddress, contractABI, signer);

                setProvider(provider);
                setSigner(signer);
                setContract(contract);
            } else {
                console.log('Please install MetaMask!');
            }
        };

        init();
    }, []);

    return (
        <div>
            {children({provider,signer,contract})}
        </div>
    );
};

export default Provider;