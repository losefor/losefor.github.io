import client from "./client";

const getNearStores = async (lng, lat) => {
  console.log(lng, lat);
  try {
    return await client.get(`/store/near?lng=${lng}&lat=${lat}&distance=10000000`, {
    });
  } catch (error) {
    console.log(error);
  }
};

///product/store/5fd253426101440017b9fab5

const getStoreProductsById = async (storeId) => {
  try {
    return await client.get(`/product/store/${storeId}`);
  } catch (error) {
    console.log(error);
  }
};

export default {
  getNearStores,
  getStoreProductsById
};
