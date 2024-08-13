import axios from "axios";
import { baseUrl } from "./baseUrl";

export const productApi = async (data, success, failure) => {
  const url = `${baseUrl}/products/filter_data`;

  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    success(response);
  } catch (error) {
    // You might want to log the error or process it before calling failure
    console.error("API call failed:", error);
    failure(error);
  }
};

export const creatProductSetApi = async (data, success, failure) => {
    const url = `${baseUrl}/products/create_product_set`;
  
    try {
      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      success(response);
    } catch (error) {
      // You might want to log the error or process it before calling failure
      console.error("API call failed:", error);
      failure(error);
    }
  };


export const quadrantDataApi = async (data, success, failure) => {
  const url = `${baseUrl}/dashboard/quadrant`;

  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    success(response.data);
  } catch (error) {
    // You might want to log the error or process it before calling failure
    console.error("API call failed:", error);
    failure(error);
  }
}


export const getStopLoss = async (data,success, failure) => {
  const url = `${baseUrl}/dashboard/stoploss`;
  try{
    const response = await axios.post(url,data);
    success(response.data);

  }catch(error){
    console.error("API call failed:", error);
    failure(error);
  }
}