import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imgSrc: string;
  title: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imgSrc, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      {" "}
      <div className="bg-white p-4 rounded-lg max-w-3xl w-full max-h-[80vh] overflow-y-auto">
        {" "}
        <div className="flex justify-between items-center mb-4">
          {" "}
          <h2 className="text-xl font-semibold">{title}</h2>{" "}
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            {" "}
            &times;{" "}
          </button>{" "}
        </div>{" "}
        <div className="flex justify-center items-center">
          {" "}
          <img
            src={imgSrc}
            alt={title}
            className="max-w-full max-h-[70vh] object-contain"
          />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Modal;
