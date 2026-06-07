import axios from "axios";

function getItems() {
  const token = localStorage.getItem("access_token");
  return axios.get("/api/docket/", {
    headers: { Authorization: `Bearer ${token}` },
  });
}

function addItem(item) {
  const token = localStorage.getItem("access_token");
  return axios.post(`/api/docket/`, item, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

function deleteItem(id) {
  const token = localStorage.getItem("access_token");
  return axios.delete(`/api/docket/${id}/`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export { getItems, addItem, deleteItem };
