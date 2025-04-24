import React, { useState } from "react";


export function Budget({ setBudget, onAddBudget }) {
    const [inputBudget, setInputBudget] = useState("");
  return (
    <div className="grid border rounded-xl mb-2.5 px-4">
      <label htmlFor="">Budget</label>
      <input
        type="number"
        id="budget"
        name="budget"
        value={inputBudget}
        placeholder="Add Budget"
        onChange={(e) => setInputBudget(e.target.value)}
        className="bg-amber-100 rounded-lg"
        required
      />
      <button
        onClick={() => {
          setBudget(inputBudget);
          onAddBudget(inputBudget);
        }}
        className="border mt-4 rounded-sm bg-blue-400"
      >
        Add Budget
      </button>
    </div>
  );
}
