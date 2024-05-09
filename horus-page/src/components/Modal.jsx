import React from "react";

const Modal = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 max-w-xl">
        <img src={image} alt="Bigger Image" className="w-full" />
        <button onClick={onClose} className="absolute top-0 right-0 m-4">
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
