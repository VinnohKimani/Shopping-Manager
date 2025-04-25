import React, { useState } from "react";
import DisplayTable from "./DisplayTable";
import { FaTrash } from "react-icons/fa";

export function ItemTable({
  items = [],
  setItems,
  budget = 0,
  formInputFields,
  onDelete,
}) {
  const [filter, setFilter] = useState("all");

  const handleToggle = (index) => {
    const newItems = [...items];
    console.log(newItems)
    newItems[index].purchased = !newItems[index].purchased;
    setItems(newItems);
  };

  const handleDelete = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const filteredItems = items.filter((item) => {
    if (filter === "all") return true;
    if (filter === "purchased") return item.purchased;
    if (filter === "remaining") return !item.purchased;
    return true;
  });

  const totalSpent = items
    .filter((item) => item.purchased)
    .reduce((sum, item) => sum + (parseFloat(item.itemPrice) || 0), 0);

  const isWithinBudget = totalSpent <= parseFloat(budget || 0);

  return (
    <div className="col-span-6 border-2 rounded-xl p-4">
      <div className="flex justify-between mb-2">
        <button
          onClick={() => setFilter("all")}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          All
        </button>
        <button
          onClick={() => setFilter("purchased")}
          className="px-2 py-1 bg-green-200 rounded"
        >
          Purchased
        </button>
        <button
          onClick={() => setFilter("remaining")}
          className="px-2 py-1 bg-yellow-200 rounded"
        >
          Remaining
        </button>
      </div>

      {filteredItems.length === 0 ? (
        <p className="text-gray-500 italic">No items to display.</p>
      ) : (
        filteredItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between mb-2">
            <input
              type="checkbox"
              checked={item.purchased}
              onChange={() => handleToggle(index)}
            />
            <span
              className={item.purchased ? "line-through text-gray-500" : ""}
            >
              {item.itemName} - ${item.itemPrice}
            </span>
            <FaTrash
              onClick={() => handleDelete(index)}
              className="text-red-500 font-bold"
            ></FaTrash>
          </div>
        ))
      )}

      <div
        className={`mt-4 p-2 rounded-lg ${
          isWithinBudget ? "bg-green-200" : "bg-red-200"
        }`}
      >
        {isWithinBudget ? "Good to purchase" : "Over budget!"}
      </div>
      <DisplayTable formInputFields={formInputFields} onDelete={onDelete} />
    </div>
  );
}
