import { FETCH_SERVICES } from "./actionTypes";
import { getAllServices as apiGetServices } from "../api/services";

export const fetchServices = () => async dispatch => {
  const response = await apiGetServices.get();
  dispatch({ type: FETCH_SERVICES, payload: response });
};
