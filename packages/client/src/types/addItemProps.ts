import type item from "./item";

export default interface addItemProps {
  newItem: item;
  setNewItem: React.Dispatch<React.SetStateAction<item>>;
  setItems: React.Dispatch<React.SetStateAction<item[]>>;
  handleAdd: React.Dispatch<React.SetStateAction<item>>;
}
