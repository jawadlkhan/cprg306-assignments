"use client";

import { useState } from "react";
import Item from "./item";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
  // Initialize state with items from items.json
  const [items, setItems] = useState(itemsData);

  // Event handler to add a new item to the list
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="bg-slate-950 min-h-screen p-4">
      <h1 className="text-3xl font-bold m-2 text-slate-100">Shopping List</h1>
      
      {/* Render the NewItem component with handleAddItem as onAddItem prop */}
      <NewItem onAddItem={handleAddItem} />

      {/* Render the ItemList component with items as a prop */}
      <ItemList items={items} />
    </main>
  );
}
