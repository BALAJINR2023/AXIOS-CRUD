import axios from "axios";

const instance = axios.create({
  baseURL: "https://66b9dd8bfa763ff550f9e4eb.mockapi.io/products",
  timeout: 10000,
  headers: {
    "X-Custom-Header": "foobar",
  },
});

const readAllData = async () => {
  try {
    const response = await instance.get("/");
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching all data:", error);
    throw error;
  }
};

const readSingleProduct = async (prodId) => {
  try {
    const response = await instance.get(`/${prodId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching single product:", error);
    throw error;
  }
};

const editProd = async (id, data) => {
  try {
    const response = await instance.put(`/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error editing product:", error);
    throw error;
  }
};

const createProd = async (prodData) => {
  try {
    const response = await instance.post("/", prodData);
    return response.data;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};

const deleteProduct = async (prodId) => {
  try {
    const response = await instance.delete(`/${prodId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting product:", error.response ? error.response.data : error.message);
    throw error;
  }
};



export { readAllData, readSingleProduct, editProd, deleteProduct, createProd };
