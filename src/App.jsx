import React, { useState, useEffect } from "react";
import { Header } from "./Components/Header";
import { ItemInput } from "./Components/ItemInput";
import { ItemTable } from "./Components/ItemTable";
import { Notification } from "./Components/Notification";
import { Footer } from "./Components/Footer";

function App() {
  const [items, setItems] = useState([]);
  const [budget, setBudget] = useState("");

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
        />
        <ItemTable
          handleFetch={handleFetch}
          formInputFields={items}
          items={items}
          setItems={setItems}
          budget={budget}
        />
        <Notification />
      </div>
      <Footer />
    </div>
  );
}

export default App;
