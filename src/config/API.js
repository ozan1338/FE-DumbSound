import axios from "axios";

const token = JSON.parse(localStorage.getItem("currentUser"))
console.log(token);

export const API = axios.create({
    baseURL: "http://localhost:8080/api/v1",
    headers: {
        Authorization: `Bearer ${token}`
    }
});