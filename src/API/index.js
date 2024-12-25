//Axios code, we can change the URL if i want another data in another place
import axios from "axios";

const instance = axios.create({
    baseURL: "https://pets-react-query-backend.eapi.joincoded.com",
  });

  instance.interceptors.response.use((response)=>{return response.data;});
  
  export default instance;

