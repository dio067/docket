import { useState, useEffect } from "react";
import useDocket from "./hooks/use-docket";
import ItemList from "./components/ItemList";
import AddItem from "./components/AddItem";
import type item from "./types/item";
import Header from "./components/Header";
import { getItems } from "./api/docket";

export default function App() {
  const [items, setItems] = useState<item[]>([]);
  const [newItem, setNewItem] = useState<item>({
    id: "",
    title: "",
    description: "",
    completed: false,
  });

  const { handleAdd, handleRemove } = useDocket(setItems, setNewItem);

  useEffect(() => {
    getItems()
      .then((res) => {
        setItems(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='bg-[#0f0f0f] w-full min-h-screen m-0 p-0'>
      <Header />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        setItems={setItems}
        handleAdd={handleAdd}
      />
      <ItemList items={items} handleRemove={handleRemove} />
    </div>
  );
}
