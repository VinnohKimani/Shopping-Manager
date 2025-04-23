import React from "react";

function BudgetCard({ budget, items }) {
  // Add up all item prices
  const totalSpent = items.reduce((sum, item) => sum + Number(item.price), 0);

  // Check if we are still within the budget
  const withinBudget = totalSpent <= budget;

  // Set the card style based on whether we're within budget or not
  const cardStyle = {
    border: "2px solid",
    borderColor: withinBudget ? "green" : "red",
    padding: "1rem",
    borderRadius: "10px",
    marginTop: "1rem",
    backgroundColor: withinBudget ? "#e6ffe6" : "#ffe6e6",
    color: withinBudget ? "green" : "red",
  };

  // When the "Good to Purchase" button is clicked
  const handlePurchaseClick = () => {
    alert("You're good to purchase!");
  };

  return (
    <div style={cardStyle}>
      <h2>Budget Summary</h2>
      <p>
        <strong>Budget:</strong> ${budget}
      </p>
      <p>
        <strong>Total Spent:</strong> ${totalSpent.toFixed(2)}
      </p>
      <p>
        <strong>Status:</strong>{" "}
        {withinBudget ? "Within Budget ✅" : "Over Budget ❌"}
      </p>
      <button onClick={handlePurchaseClick}>Good to Purchase</button>
    </div>
  );
}

export default BudgetCard;
