"use client";

import { useState } from "react";

const generateRandomId = () => {
  return Math.random().toString(36).substr(2, 9);
}

export default function NewItem({onAddItem}) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      id: generateRandomId(),
      name,
      quantity,
      category,
    };
    onAddItem(item);
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-800">
      <form onSubmit={handleSubmit} className="mt-8 max-w-md w-full p-6 bg-grey-800 text-white rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="name"></label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 p-2 border rounded w-full bg-slate-50 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Item name"
          />
        </div>

        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <label className="block text-sm font-medium mr-4" htmlFor="quantity"></label>
            <button
              type="button"
              onClick={decrement}
              className="bg-blue-600 px-3 py-1 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              -
            </button>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              required
              className="text-center border-t border-b bg-slate-50 w-16 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={increment}
              className="bg-blue-600 px-3 py-1 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              +
            </button>
          </div>

          <div className="ml-4 w-1/2">
            <label className="block text-sm font-medium" htmlFor="category"></label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 p-2 border rounded w-full bg-slate-50 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="category" disabled>
                Category
              </option>
              <option value="Produce">Produce</option>
              <option value="Dairy">Dairy</option>
              <option value="Bakery">Bakery</option>
              <option value="Meat">Meat</option>
              <option value="Frozen Foods">Frozen Foods</option>
              <option value="Canned Goods">Canned Goods</option>
              <option value="Dry Goods">Dry Goods</option>
              <option value="Beverages">Beverages</option>
              <option value="Snacks">Snacks</option>
              <option value="Household">Household</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}