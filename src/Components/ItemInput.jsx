import React, { useState } from "react";

export function ItemInput() {
  const [formData, setFormData] = useState({
    budget: " ",
    itemName: " ",
    itemPrice: " ",
    category: " ",
  });

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      budget,
      itemName,
      itemPrice,
      category,
      

      
    };
    console.log(formData);
  }
  console.log(formData);

  function handleChange(event) {
    const key = event.target.id;
    setFormData({
      ...formData,
      [key]: event.target.value,
    });
  }

  return (
    <div className="col-span-3 ">
      <form
        action=""
        className="border-2 rounded-xl p-3"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 pb-2.5">
          <label htmlFor="">Budget</label>
          <input
            type="number"
            id="budget"
            value={formData.budget}
            placeholder="Add Budget"
            onChange={handleChange}
            className="bg-amber-100 rounded-lg"
          />
          <label htmlFor="">Item name</label>
          <input
            type="text"
            id="item-name"
            value={formData.itemName}
            placeholder="Enter item"
            onChange={handleChange}
            className="bg-amber-100 rounded-lg"
          />
          <label htmlFor="">Item Price</label>
          <input
            type="text"
            id="price"
            value={formData.itemPrice}
            placeholder="Enter Price"
            onChange={handleChange}
            className="bg-amber-100 rounded-lg"
          />
          <label htmlFor="">Category</label>
          <input
            type="text"
            id="category"
            value={formData.category}
            placeholder="Enter Category"
            onChange={handleChange}
            className="bg-amber-100 rounded-lg"
          />
          <button className="bg-green-600 px-4 rounded hover:bg-purple-700 cursor-pointer" >
            <input type="submit" value="Add Item" />
          </button>
        </div>
      </form>
    </div>
  );
}
