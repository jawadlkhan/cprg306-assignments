import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

const addItem = await addDoc(collection(db, "users", "userId", "item"), {
  name: "Milk 🥛",
  quantity: 1,
  category: "Dairy",
});
console.log("Item is created with ID: ", addItem.id);

const getItems = await getDoc(docRef);
if (getItems.exists()) {
  console.log("Item data:", docSnap.data());
} else {
  console.log("No such item!");
}

const q = query(
  collection(db, "users", "userId", "items"),
  where("quantity", ">", 1)
);
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  console.log(doc.id, " => ", doc.data());
});

export { getItems, addItem };