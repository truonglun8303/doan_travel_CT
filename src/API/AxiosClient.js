import axios from "axios";

/*
Thiết lập URL API, 
set thời gian chờ 5p cho yêu cầu thực hiện phiên bản,
sau 5p được coi là lỗi
*/
const instance = axios.create(
    {
        baseURL: process.env.REACT_APP_URL_API,
        timeout: 300000
    }
);
/* 
Hàm xử lý phản hồi
*/
instance.interceptors.response.use(
    (response) =>{
        return response.data
    },
    (error) =>{
        console.log(error);
    }
);
export default instance;