import React, { useState } from "react";
const initialValues = {
  budget: " ",
  itemName: " ",
  itemPrice: " ",
  category: " ",
};

export function ItemInput() {
  const [formData, setFormData] = useState(initialValues);
  console.log(formData);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("form submitted");
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
      console.log(prev);
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
            name="budget"
            value={formData.budget}
            placeholder="Add Budget"
            onChange={handleChange}
            className="bg-amber-100 rounded-lg"
          />
          <label htmlFor="">Item name</label>
          <input
            type="text"
            name="itemName"
            value={formData.itemName}
            placeholder="Enter item"
            onChange={handleChange}
            className="bg-amber-100 rounded-lg"
          />
          <label htmlFor="">Item Price</label>
          <input
            type="number"
            name="itemPrice"
            value={formData.itemPrice}
            placeholder="Enter Price"
            onChange={handleChange}
            className="bg-amber-100 rounded-lg"
          />
          <label htmlFor="">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            placeholder="Enter Category"
            onChange={handleChange}
            className="bg-amber-100 rounded-lg"
          />
          <input type="submit" value="Add Item" />
        </div>
      </form>
    </div>
  );
}
