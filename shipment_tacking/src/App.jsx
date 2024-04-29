// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

import React from 'react';
import Provider from './Providers';
import Shipment from './Shipment';
import AllTransactions from './AllTransactions';
import ShipmentCount from './ShipmentCount';
import SingleShipment from './SingleShipment';
import StartShipment from './StartShipment';
import CompleteShipment from './CompleteShipment';

function App(){
  return(
    <Provider>
      {({ contract }) => (
        <div className="App">
          <h1>Ethereum Tracking App</h1>
          <Shipment contract={contract}></Shipment>
          <AllTransactions contract={contract} />
          <ShipmentCount contract={contract} />
          <SingleShipment contract={contract} />
          <StartShipment contract={contract} />
          <CompleteShipment contract={contract} />
        </div>
      )}
    </Provider>
  );
}
export default App;
