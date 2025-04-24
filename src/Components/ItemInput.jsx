import React, { useState } from "react";

const initialValues = {
  budget: "",
  itemName: "",
  itemPrice: "",
  category: "",
};

export function ItemInput({ onformSubmittedData, handleFetch }) {
  const [formData, setFormData] = useState(initialValues);
  //console.log(formData);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);

    //stringyfy
    //console.log(JSON.stringify(formData))

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
        //execute handle fetch
        handleFetch();

        //send to parent
        onformSubmittedData(formData);
        //clear the form
        setFormData(initialValues);
      })
      .catch(() => {
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
      <form action="" className="border rounded-xl p-3" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 pb-2.5">
          <label htmlFor="">Budget</label>
          <input
            type="number"
            id=""
            name="budget"
            value={formData.budget}
            placeholder="Add Budget"
            onChange={handleChange}
            className="bg-amber-100 rounded-lg"
          />
          <label htmlFor="">Item name</label>
          <input
            type="text"
            id=""
            name="itemName"
            value={formData.itemName}
            placeholder="Item Name"
            onChange={handleChange}
            className="bg-amber-100 rounded-lg"
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
          />
          <input
            type="submit"
            value="Add Item"
            className="border mt-4 rounded-sm bg-green-400"
          />
        </div>
      </form>
    </div>
  );
}
