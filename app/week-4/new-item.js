"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

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
    <div className="flex flex-col items-center">
      <h2 className="mb-4">Set Quantity</h2>
      <div className="flex items-center space-x-4">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`p-2 bg-gray-500 text-white rounded ${quantity === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          -
        </button>
        <span className="text-lg font-semibold">{quantity}</span>
        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`p-2 bg-blue-500 text-white rounded ${quantity === 20 ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          +
        </button>
      </div>
    </div>
  );
}
