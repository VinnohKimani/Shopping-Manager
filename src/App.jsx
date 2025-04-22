import React from "react";
import { Header } from "./Components/Header";
import { ItemInput } from "./Components/ItemInput";
import { ItemTable } from "./Components/ItemTable";
import { Notification } from "./Components/Notification";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <ItemInput />
      <ItemTable />
      <Notification />
      <Footer />
    </>
  );
}

export default App;
