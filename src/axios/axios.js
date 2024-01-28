import axios from "axios"
const instance = axios.create({
    baseUrl:"http://localhost",
    params:{
    }
})
export default instance;