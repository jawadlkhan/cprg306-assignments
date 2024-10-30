"use client";

import Item from "./item";
import { useState } from "react";


export default function ItemList({items})
{
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
    });

    return(
        <main>
      <div className="mb-4 text-white">Sort By: 
        <button
          onClick={() => setSortBy("name")}
          style={{ backgroundColor: sortBy === "name" ? "orange" : "red" }}
          className="p-2 m-2"
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          style={{ backgroundColor: sortBy === "category" ? "orange" : "red" }}
          className="p-2 m-2"
        >
          Category
        </button>
      </div>

      {/* Render the sorted items */}
      {sortedItems.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}  
        </main>
    )
}