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

// import React from 'react';
// import Provider from './Providers';
// import Shipment from './Shipment';
// import AllTransactions from './AllTransactions';
// import ShipmentCount from './ShipmentCount';
// import SingleShipment from './SingleShipment';
// import StartShipment from './StartShipment';
// import CompleteShipment from './CompleteShipment';

// function App(){
//   return(
//     <Provider>
//       {({ contract }) => (
//         <div className="App">
//           <h1>Ethereum Tracking App</h1>
//           <Shipment contract={contract}></Shipment>
//           <AllTransactions contract={contract} />
//           <ShipmentCount contract={contract} />
//           <SingleShipment contract={contract} />
//           <StartShipment contract={contract} />
//           <CompleteShipment contract={contract} />
//         </div>
//       )}
//     </Provider>
//   );
// }
// export default App;
import React, { useState } from "react";
import Provider from "./Providers";
import Shipment from "./Shipment";
import AllTransactions from "./AllTransactions";
import ShipmentCount from "./ShipmentCount";
import SingleShipment from "./SingleShipment";
import StartShipment from "./StartShipment";
import CompleteShipment from "./CompleteShipment";

function App() {
  const [popupComponent, setPopupComponent] = useState(null);

  const openPopup = (Component) => {
    setPopupComponent(Component);
  };

  const closePopup = () => {
    setPopupComponent(null);
  };

  return (
    <Provider>
      {({ contract }) => (
        <div
          className="flex App m-0 p-0 bg-black h-screen flex-col">
          {/* Title Bar */}
          <div className="flex items-center justify-center h-14 bg-white border-gray-200 dark:bg-gray-900 font-semibold text-white">
            <h1 className="text-3xl font-bold">Exact Shipment Location</h1>
          </div>

          {/* Main Content */}
          <div   
            className="flex flex-wrap flex-1 justify-around p-5 w-full"
          >
            <div
              className="flex justify-center items-center p-5 rounded-xl bg-gray-800 w-[calc(33%-100px)] m-8 cursor-pointer hover:bg-gray-700  border border-gray-200"
              onClick={() => openPopup(<Shipment contract={contract} />)}
            >
              <div className="text-4xl font-bold text-white">
                Create Shipment
              </div>
            </div>

            <div
              className="flex justify-center items-center p-5 rounded-xl bg-gray-800 w-[calc(33%-100px)] m-8 cursor-pointer hover:bg-gray-700  border border-gray-200"
              onClick={() => openPopup(<AllTransactions contract={contract} />)}
            >
              <div className="text-4xl font-bold text-white">
                All Transactions
              </div>
            </div>

            <div
              className="flex justify-center items-center p-5 rounded-xl bg-gray-800 w-[calc(33%-100px)] m-8 cursor-pointer hover:bg-gray-700  border border-gray-200"
              onClick={() => openPopup(<ShipmentCount contract={contract} />)}
            >
              <div className="text-4xl font-bold text-white">
                Shipment Count
              </div>
            </div>

            <div
              className="flex justify-center items-center p-5 rounded-xl bg-gray-800 w-[calc(33%-100px)] m-8 cursor-pointer hover:bg-gray-700  border border-gray-200"
              onClick={() => openPopup(<SingleShipment contract={contract} />)}
            >
             <div className="text-4xl font-bold text-white">
                Shipment Status
              </div>
            </div>

            <div
              className="flex justify-center items-center p-5 rounded-xl bg-gray-800 w-[calc(33%-100px)] m-8 cursor-pointer hover:bg-gray-700  border border-gray-200"
              onClick={() => openPopup(<StartShipment contract={contract} />)}
            >
              <div className="text-4xl font-bold text-white">
                Start Shipment
              </div>
            </div>

            <div
              className="flex justify-center items-center p-5 rounded-xl bg-gray-800 w-[calc(33%-100px)] m-8 cursor-pointer hover:bg-gray-700  border border-gray-200"
              onClick={() =>
                openPopup(<CompleteShipment contract={contract} />)
              }
            >
              <div className="text-4xl font-bold text-white">
                Complete Shipment
              </div>
            </div>

          </div>

          {/* Popup */}
          {popupComponent && (
            <div
              className="popup bg-gray-900"
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                padding: "20px",
                // backgroundColor: "gray[800]",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                // zIndex: "999",
              }}
            >
              {popupComponent}
              <button className="bg-red-600 rounded-md text-white cursor-pointer font-bold h-9 w-9 absolute top-3 right-3"
                onClick={closePopup}
              >
                X
              </button>
            </div>
          )}
        </div>
      )}
    </Provider>
  );
}

export default App;
