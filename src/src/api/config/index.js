import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://41.76.111.191:8080/api/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  // baseURL: "https://dummyjson.com/auth",
  // headers: {
  //   "Content-Type": "application/json",
  //   // "Content-Length": "3495",
  //   // host: "www.dummyjson.com/",
  // },
});

// Username: test@testexample.com, Password: Password1! 
//Can create them using the swagger link
 
// 0 - Admin
// 1 - Director/manager 
// 2 - Coach
// 3 - Coachee

// Username and email must be the same
// Password can do Password1! (Uppercase lowercase number special)