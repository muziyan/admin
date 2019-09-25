import axios from "axios";
import Vue from "vue";
import router from "./router";


const http = axios.create({
    baseURL:"http://localhost:10086/admin/api/"
});

//请求拦截
http.interceptors.request.use(config=>{
    if (localStorage.token){
        config.headers.Authorization = "Bearer " + localStorage.token;
    }
    return config
}, err =>{
    return Promise.reject(err);
});

//状态拦截
http.interceptors.response.use(res => {
    return res;
}, err => {
    if (err.response.data.message) {
        Vue.prototype.$message.error({
            type: "Error",
            message: err.response.data.message
        });

        if (err.response.status === 401){
            router.push("/login");
        }
    }

    return Promise.reject(err);
});


export default http;