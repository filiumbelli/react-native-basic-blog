import axios from "axios";

const baseUrl = "http://ccf2-176-88-72-210.ngrok.io";



export default axios.create({
    baseURL: baseUrl,
});