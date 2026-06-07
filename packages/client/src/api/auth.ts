import axios from "axios";

function login(username, password) {
  return axios.post("/api/token/", { username, password });
}

function isLoggedIn() {
  return !!localStorage.getItem("access_token");
}

export { isLoggedIn, login };
