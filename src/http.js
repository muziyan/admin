import axios from "axios";

const http = axios.create({
    baseURL:"http://localhost:30001/admin/api/"
});

export default http;