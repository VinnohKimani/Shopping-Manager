import React from "react";

export function Wallet({ budget }) {
    // console.log(budget)
  return (
    <div className="border col-span-3">
      <h3 className="font-bold">Wallet Summary</h3>
          {budget && <p>Current Budget: ${budget}</p>}
          {/* incase no budget */}
      {!budget && <p>No budget set</p>}
    </div>
  );
}
