import React from "react";
import {FaTrash} from "react-icons/fa";
const DeleteButton = () => {
  return (
    <div className="text-blue-500 hover:text-red-500 py-0.5 mt-0.4 pl-3">
        <FaTrash />
    </div>
  );
};

export default DeleteButton;
