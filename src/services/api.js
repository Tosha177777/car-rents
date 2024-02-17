import axios from "axios";

const instance = axios.create({
  baseURL: "https://65ce2c89c715428e8b4020f3.mockapi.io/",
});

const fetchCars = async (page, limit) => {
  try {
    const response = await instance.get("adverts", {
      params: {
        page: page,
        limit: limit,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error;
  }
};

export default fetchCars;
