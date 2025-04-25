import React from "react";
import { FaTrash } from "react-icons/fa";

const DisplayTable = ({ formInputFields, onDelete }) => {
  //console.log(formInputFields);
  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <div>
      <table className="h-47 w-full bg-slate-100 border">
        <caption className="text-lg font-bold p-2 border bg-stone-100">
          My Items
        </caption>
<<<<<<< HEAD
        <thead className="bg-green-50">
=======
        <thead className="bg-green-200">
>>>>>>> main
          <tr>
            {/* <th>&nbsp;</th>  */}
            <th scope="col">Item Name</th>
            <th scope="col">Item Price</th>
            <th scope="col">Category</th>
            <th scope="col">Keep/Remove</th>
          </tr>
        </thead>
        <tbody>
          {formInputFields.map((inputField, id) => (
            <tr key={inputField.id} className="border-1 h-10 ">
              <td className="px-4 py-2">{inputField.itemName}</td>
              <td className="px-4 py-2">{inputField.itemPrice}</td>
              <td className="px-4 py-2">{inputField.category}</td>
              <td className="px-4 py-2">
                <FaTrash
                  onClick={() => handleDelete(inputField.id)}
                  className="text-blue-500 hover:text-red-500"
                ></FaTrash>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayTable;
