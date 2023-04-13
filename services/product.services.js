import axios from "axios";
export const getListProducts = async () => {
  try {
    const resp = await axios.get("/api/list_products");
    return { success: true, data : resp.data };
  } catch (error) {
    return { success: false, data: [] };
  }
};


export const getProductById = async (id) => {
  try {
    const resp = await axios.get(`api/product/${id}`);
    return { success: true, data : resp.data };
  } catch (error) {
    return { success: false, data: [] };
  }
};

export const getStockAndPriceByCode = async (code) => {
  try {
    const resp = await axios.get(`api/stock-price/${code}`);
    return { success: true, data : resp.data };
  } catch (error) {
    return { success: false, data: [] };
  }
};

export const getProductBySku = async (sku) => {
  try {
    const resp = await axios.get(`api/sku/${sku}`);
    return { success: true, data : resp.data };
  } catch (error) {
    return { success: false, data: [] };
  }
};
