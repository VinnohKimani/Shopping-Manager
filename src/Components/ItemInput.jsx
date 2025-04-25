import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Budget } from "./BudgetCard";

const initialValues = {
  itemName: "",
  itemPrice: "",
  category: "",
};

export function ItemInput({
  // onformSubmittedData,
  handleFetch,
  budget,
  setBudget,
  onAddBudget,
}) {
  const [formData, setFormData] = useState(initialValues);
  //console.log(formData);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);

    //stringyfy
    //console.log(JSON.stringify(formData))
    // loading toast notification

    // send the data to json server

    fetch("http://localhost:3004/shoppingitems", {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // will show toast success
        toast.success("Item Added Successfully!");
        //execute handle fetch
        handleFetch();

        //send to parent
        // onformSubmittedData(formData);
        //clear the form
        setFormData(initialValues);
      })
      .catch(() => {
        // show toast error
        // toast.error("Failed to add item!");
        // handle any errors that might occur
        console.log("Unable to publish blog");
      });

    /* const formData = {
      budget,
      itemName,
      itemPrice,
      category,
      

      
    };
    console.log(formData); */
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });

    /*  const key = event.target.id;
    setFormData({
      ...formData,
      [key]: event.target.value,
    });
     */
  }

  return (
    <div className="col-span-3 ">
      <Budget budget={budget} setBudget={setBudget} onAddBudget={onAddBudget} />
      <form action="" className="border rounded-xl p-3" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 pb-2.5">
          <label htmlFor="">Item name</label>
          <input
            type="text"
            id=""
            name="itemName"
            value={formData.itemName}
            placeholder="Item Name"
            onChange={handleChange}
            className="bg-amber-100 rounded-lg"
            required
          />
          <label htmlFor="">Item Price</label>
          <input
            type="text"
            id=""
            name="itemPrice"
            value={formData.itemPrice}
            placeholder="Enter Price"
            onChange={handleChange}
            className="bg-amber-100 rounded-lg"
            required
          />
          <label htmlFor="">Category</label>
          <input
            type="text"
            id=""
            name="category"
            value={formData.category}
            placeholder="Enter Category"
            onChange={handleChange}
            className="bg-amber-100 rounded-lg"
            required
          />
          <div>
            <input
              type="submit"
              value="Add Item"
              className="border mt-4 rounded-sm bg-green-400"
            />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              closeOnClick
              pauseOnHover
              draggable
              theme="colored"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
