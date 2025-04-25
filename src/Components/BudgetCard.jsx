import React, { useState } from "react";

export function Budget({ setBudget, onAddBudget }) {
  const [inputBudget, setInputBudget] = useState("");
  return (
    <div className="border rounded-xl p-3">
      <label htmlFor="">Budget</label>
      <input
        type="number"
        id="budget"
        name="budget"
        value={inputBudget}
        placeholder="Add Budget"
        onChange={(e) => setInputBudget(e.target.value)}
        className="bg-amber-100 rounded-lg min-h-[48px] w-full"
        required
      />
      <button
        onClick={() => {
          setBudget(inputBudget);
          onAddBudget(inputBudget);
        }}
        className="border mt-4 rounded-sm bg-indigo-200 hover:bg-[#4F46E5] text-xl font-bold w-full"
      >
        Add Budget
      </button>
    </div>
  );
}
