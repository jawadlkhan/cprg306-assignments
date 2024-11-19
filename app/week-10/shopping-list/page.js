"use client";
import { useState, useEffect } from "react";
import { getItems, addItem } from "../_services/shopping_list-service";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import NewItem from "./new-item";
import { useUserAuth } from "../_utils/auth-context"; // Assuming authentication context is available

const Page = () => {
  const { user } = useUserAuth(); // Get the user from authentication context
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Function to load items from the database
  const loadItems = async () => {
    if (user?.uid) {
      try {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems || []); // Safely handle empty or null responses
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    }
  };

  // Fetch items when the component mounts or when the user changes
  useEffect(() => {
    loadItems();
  }, [user]);

  // Handle adding a new item
  const handleAddItem = async (item) => {
    if (user?.uid) {
      try {
        const newItemId = await addItem(user.uid, item);
        setItems((prevItems) => [...prevItems, { id: newItemId, ...item }]);
      } catch (error) {
        console.error("Error adding item:", error);
      }
    }
  };

  // Handle selecting an item
  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, "")
      .trim();
    setSelectedItemName(cleanedName);
  };

  // Render a login prompt if the user is not authenticated
  if (!user) {
    return (
      <main className="min-h-screen bg-gray-900 text-white p-8">
        <h1 className="text-4xl font-bold mb-6">Shopping List</h1>
        <p className="text-xl">Please login to view this page</p>
      </main>
    );
  }

  return (
    <main className="p-4 bg-gray-900">
      <h1 className="text-3xl font-bold text-white mb-4">Shopping List</h1>
      <div className="flex">
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="ml-4 mt-6">
          <h1 className="text-3xl font-bold text-white">Meal Ideas</h1>
          {selectedItemName ? (
            <MealIdeas ingredient={selectedItemName} />
          ) : (
            <h2 className="text-xl text-white">
              Select an item to see meal ideas
            </h2>
          )}
        </div>
      </div>
    </main>
  );
};

export default Page;