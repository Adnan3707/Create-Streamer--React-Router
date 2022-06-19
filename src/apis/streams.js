import axios from "axios";
import { useEffect } from "react";

export default   axios.create({
    baseURL : 'http://localhost:3001'
})
// useEffect(()=> {}, [])