"use client"

import {useState} from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./item.json";

export default function Page(){
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems(prevItems => {
            return [...prevItems, newItem];
        });
    };

    return(
    <main class="bg-slate-950">
        <h1 className="text-3xl font-bold m-2 text-slate-100">Shopping List</h1>
        <NewItem onAddItem={handleAddItem}/>//passing the function to the NewItem component
        <ItemList items={items}/>
    </main>
    );
}