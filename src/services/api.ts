import { axiosRequest } from "../utils/axios";

export const queryDoctorData = async() => {
    const response = await axiosRequest('/'); 
    return response.data;
}