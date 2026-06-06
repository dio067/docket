import axios from "axios";

function getItems() {
  return axios.get("/api/docket/");
}

function addItem(item) {
  return axios.post(`/api/docket/`, item);
}

function deleteItem(id) {
  return axios.delete(`/api/docket/${id}/`);
}

export { getItems, addItem, deleteItem };
