import { useState } from "react";
import ItemList from "./components/ItemList";
import AddItem from "./components/AddItem";
import type item from "./types/item";
import Header from "./components/Header";

export default function App() {
  const [items, setItems] = useState<item[]>([]);
  const [newItem, setNewItem] = useState<item>({
    id: "",
    title: "",
    description: "",
    completed: false,
  });
  return (
    <div className='bg-[#0f0f0f] w-full min-h-screen m-0 p-0'>
      <Header />
      <AddItem newItem={newItem} setNewItem={setNewItem} setItems={setItems} />
      <ItemList items={items} setItems={setItems} />
    </div>
  );
}
