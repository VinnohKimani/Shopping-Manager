import React, { useState, useEffect } from "react";
import { Header } from "./Components/Header";
import { ItemInput } from "./Components/ItemInput";
import { ItemTable } from "./Components/ItemTable";
import { Wallet } from "./Components/Wallet";
import { Footer } from "./Components/Footer";
import Contacts from "./Components/Contacts";

function App() {
  const [items, setItems] = useState([]);
  const [budget, setBudget] = useState("");

  const handleAddBudget = (newBudget) => {
    setBudget(newBudget);
  };

  //function to receive data from child itemInput
  //data is refreshed via handlefetch
  /*  const handleFormSubmitted = (newData) => {
    setItems((prev) => [...prev, newData]);
  }; */
  //here we are fetching initial data from server (for component mount)
  const handleFetch = () => {
    fetch("http://localhost:3004/shoppingitems")
      .then((response) => response.json())
      .then((fetchedItems) => {
        console.log(fetchedItems);
        setItems(fetchedItems);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3004/shoppingitems/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        // Update state after successful deletion
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
      })
      .catch((error) => console.error("Error deleting item:", error));
  };

  return (
    <div className="bg-slate-50">
      <Header />
      <div className="grid grid-cols-12 gap-[10px] mx-2">
        <ItemInput
          handleFetch={handleFetch}
          items={items}
          setItems={setItems}
          budget={budget}
          setBudget={setBudget}
          onAddBudget={handleAddBudget}
        />
        <ItemTable
          handleFetch={handleFetch}
          formInputFields={items}
          items={items}
          setItems={setItems}
          budget={budget}
          onDelete={handleDelete}
        />
        <Wallet budget={budget} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
