import axios from "axios"

const app_id = "c0f59f00";
const app_key = "a733c1babf786123172c50cd769f573a";


  


  export const fetchPosts = (product) => {
    console.log("REQUEST TO SERVER");
    return axios.get(`https://api.edamam.com/search?q="${product}"&app_id=${app_id}&app_key=${app_key}`)
      .then(response => response.data)
      .catch(error => {
        console.error("Error fetching data:", error);
        throw error; // Re-throw the error to handle it in the component
      });
  };