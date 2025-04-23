import React from "react";

function BudgetCard({ budget, items }) { /* creates a component that expects two pieces of info from the parent */
  const totalSpent = items.reduce((sum, item) => sum + item.price, 0); /* This adds up all the prices of the items to see how much you’ve spent in total */
  const isWithinBudget = totalSpent <= budget; /* checks if you are still within your budget */

  /* This part sets the card’s background and text colors:
Green if you’re good
Red if you’re over budget */
  const cardStyle = {
    padding: "1rem",
    borderRadius: "8px",
    backgroundColor: isWithinBudget ? "#d4edda" : "#f8d7da",
    color: isWithinBudget ? "#155724" : "#721c24",
    border: `1px solid ${isWithinBudget ? "#c3e6cb" : "#f5c6cb"}`,
    marginTop: "1rem",
    textAlign: "center",
  };

  const handleClick = () => {
    alert("This purchase is good to go! ✅");
  };

  return (
    <div style={cardStyle}>
      <h3>Budget: ${budget.toFixed(2)}</h3>
      <h4>Total Spent: ${totalSpent.toFixed(2)}</h4>
      <p>
        Status:{" "}
        <strong>{isWithinBudget ? "Within Budget" : "Over Budget"}</strong> {/* indicates that the text is important and renders text in bold */}
      </p>
      <button onClick={handleClick}>Good to Purchase</button>
    </div>
  );
}

export default BudgetCard;
