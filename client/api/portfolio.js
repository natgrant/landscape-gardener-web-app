import axios from "axios";

export const getAllProjects = () => {
  axios
    .get("/api/v1/gardens")
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
};
