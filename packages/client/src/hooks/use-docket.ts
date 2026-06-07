import { addItem, deleteItem, getItems } from "../api/docket";

function useDocket(setItems, setNewItem) {
  function handleAdd(newItem) {
    addItem(newItem).then(() => {
      getItems().then((res) => {
        setItems(res.data);
        setNewItem({
          title: "",
          description: "",
          completed: false,
        });
      });
    });
  }
  function handleRemove(id) {
    deleteItem(id).then(() => {
      getItems().then((res) => {
        setItems(res.data);
      });
    });
  }
  return { handleAdd, handleRemove };
}

export default useDocket;
