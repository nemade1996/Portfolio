// Popup.js
import React from 'react';
import quote from "../images/quote.jpg"

const Popup = ({onClose}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/2 relative">
        <h2 className="text-2xl font-bold mb-4 text-center">Inspiring Quote</h2>
        <img src={quote} className='w-100'/>
        <button onClick={onClose} className="mt-4 bg-[#fa5252] hover:bg-black text-white py-2 px-4 rounded absolute top-1 right-4">X</button>
      </div>
    </div>
  );
};

export default Popup;