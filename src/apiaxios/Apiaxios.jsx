import axios from "axios";

export const axiosinstance = axios.create({
    "baseURL":"https://newsapi.org/v2/",
    "method":"GET",
    "params": {
        "apiKey": "9431564532014a098939f9e0305a4984"  
    }
})
