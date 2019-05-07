import axios from "axios";

export const getAllServices = () => {
  axios
    .get("/api/v1/services")
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
};
