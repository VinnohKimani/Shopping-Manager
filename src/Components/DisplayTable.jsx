import React from "react";

const DisplayTable = ({ formInputFields }) => {
  //console.log(formInputFields);
  return (
    <div>
      <table className="h-47 w-full bg-slate-100 border">
        <caption className="text-lg font-bold p-2 border bg-stone-100">
          My Items
        </caption>
        <thead className="bg-green-50">
          <tr>
            {/* <th>&nbsp;</th>  */}
            <th scope="col">Item Name</th>
            <th scope="col">Item Price</th>
            <th scope="col">Category</th>
          </tr>
        </thead>
        <tbody>
          {formInputFields.map((inputField, index) => (
            <tr key={index} className="border-1 h-10 ">
              <td className="px-4 py-2">{inputField.itemName}</td>
              <td className="px-4 py-2">{inputField.itemPrice}</td>
              <td className="px-4 py-2">{inputField.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayTable;
