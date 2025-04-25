import React from "react";
import { FaTrash } from "react-icons/fa";

const DisplayTable = ({ formInputFields, onDelete }) => {
  //console.log(formInputFields);
  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <div>
      <table className="h-47 w-full bg-slate-100 border rounded-2xl">
        <caption className="text-xl font-bold p-2 border bg-stone-100 rounded-sm">
          My Items
        </caption>
        <thead className="bg-green-200">
          <tr>
            {/* <th>&nbsp;</th>  */}
            <th scope="col">Item Name</th>
            <th scope="col">Item Price</th>
            <th scope="col">Category</th>
            <th scope="col">Keep/Remove</th>
          </tr>
        </thead>
        <tbody>
          {formInputFields.map((inputField) => (
            <tr key={inputField.id} className="border-1 h-10 ">
              <td className="border px-4 py-2">{inputField.itemName}</td>
              <td className="border px-4 py-2">{inputField.itemPrice}</td>
              <td className="border px-4 py-2">{inputField.category}</td>
              <td className="px-4 py-2">
                <FaTrash
                  onClick={() => handleDelete(inputField.id)}
                  className="text-[#F59E0B] hover:text-red-500"
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
