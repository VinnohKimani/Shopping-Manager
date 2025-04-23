import React from "react";
import { Header } from "./Components/Header";
import { ItemInput } from "./Components/ItemInput";
import { ItemTable } from "./Components/ItemTable";
import { Notification } from "./Components/Notification";
import { Footer } from "./Components/Footer";


function App() {
  return (
    <div className="">
      <Header />
      <div className="grid grid-cols-12 gap-[10px] mx-2">
      <ItemInput />
      <ItemTable />
      <Notification />
      </div>
      <Footer />
    </div>
  );
}

export default App;
