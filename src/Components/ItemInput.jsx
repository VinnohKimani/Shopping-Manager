import React from "react";

export function ItemInput() {
  return (
    <div>
      <form
        action=""
        className="pl-5 border-2 rounded-xl w-2xs"
        onSubmit={(e) => {
          e.preventDefault
        console.log("submitted")
        }}
      >
        <div className="grid grid-cols-1 pb-2.5">
          <label htmlFor="">Budget</label>
          <input
            type="number"
            placeholder="Add Budget"
            className="bg-amber-100 rounded-lg"
          />
          <label htmlFor="">Item name</label>
          <input
            type="text"
            placeholder="Enter item"
            className="bg-amber-100 rounded-lg"
          />
          <label htmlFor="">Item Price</label>
          <input
            type="text"
            placeholder="Enter Price"
            className="bg-amber-100 rounded-lg"
          />
          <label htmlFor="">Category</label>
          <input
            type="text"
            placeholder="Enter Category"
            className="bg-amber-100 rounded-lg"
          />
          <div>
            <button
              className="bg-blue-400  mt-2 rounded-lg w-full"
              onClick={(e) => {
                e.preventDefault;
                console.log("button Clicked");
              }}
            >
              Add Item
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
