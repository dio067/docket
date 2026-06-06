import { addItem, getItems } from "../api/docket";

function useDocket(setItems, setNewItem) {
  function handleAdd(newItem) {
    addItem(newItem).then(() => {
      getItems().then((res) => {
        setItems(res.data);
        setNewItem({
          id: "",
          title: "",
          description: "",
          completed: false,
        });
      });
    });
  }
  return handleAdd;
}

export default useDocket;
