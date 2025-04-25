import React, { useState, useEffect } from "react";
import { Header } from "./Components/Header";
import { ItemInput } from "./Components/ItemInput";
import { ItemTable } from "./Components/ItemTable";
import { Wallet } from "./Components/Wallet";
import { Footer } from "./Components/Footer";
import Contacts from "./Components/Contacts";
import Page  from "./Components/Page.jsx";

function App() {
  const [items, setItems] = useState([]);
  const [budget, setBudget] = useState(() => {
  //  here i'm getting the budget from the local storage 
    const stored = localStorage.getItem("budget");
    // and also  this is a conditon that when no budget is added the retrieval falls into an empty string 
    // thats why we have empty qoutes
   return stored ? JSON.parse(stored) : "";
 });

  // here when a new budget is added it is updated into the local storage
  const handleAddBudget = (newBudget) => {
    setBudget(newBudget);
    localStorage.setItem("budget", JSON.stringify(newBudget))
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
        //console.log(fetchedItems);
        setItems(fetchedItems);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    handleFetch();
  }, []);
  
  // here we retrieve the budget from the localStorage and puts it into state
  // the handle fetch fetches the item data
  useEffect(() => {
    const storedBudget = localStorage.getItem("budget");
    if (storedBudget) {
      setBudget(storedBudget);
    }
      handleFetch();
  }, []);

  useEffect(() => {
    if (budget !== "") {
      localStorage.setItem("budget", budget);
    }
  }, [budget]);// this useEffect runs every time the budget value changes and that's why are able to get the
  // the good to buy to change color when the you are within budget and when you are not


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
      <div className="grid grid-cols-12 gap-[10px] mx-18">
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
