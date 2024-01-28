import axios from "axios"
const instance = axios.create({
    baseUrl:"http://localhost",
    params:{
        language: "ko-KR"
    }
})
export default instance;