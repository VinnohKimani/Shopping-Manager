import React from "react";

export function Wallet({ budget }) {
    // console.log(budget)
  return (
    <div className="h-40 border col-span-3 rounded-xl p-4 bg-indigo-200">
      <h3 className="font-bold">Wallet Summary</h3>
      {budget && <p>Current Budget: ${budget}</p>}
      {/* incase no budget */}
      {!budget && <p>No budget set!</p>}
    </div>
  );
}
