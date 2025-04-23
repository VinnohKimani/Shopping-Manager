import React, { useState } from "react";
import { Header } from "./Components/Header";
import { ItemInput } from "./Components/ItemInput";
import { ItemTable } from "./Components/ItemTable";
import { Notification } from "./Components/Notification";
import { Footer } from "./Components/Footer";

function App() {
  const [items, setItems] = useState([]);
  const [budget, setBudget] = useState("");

  return (
    <div className="bg-slate-50">
      <Header />
      <div className="grid grid-cols-12 gap-[10px] mx-2">
        <ItemInput
          items={items}
          setItems={setItems}
          budget={budget}
          setBudget={setBudget}
        />
        <ItemTable items={items} setItems={setItems} budget={budget} />
        <Notification />
      </div>
      <Footer />
    </div>
  );
}

export default App;
