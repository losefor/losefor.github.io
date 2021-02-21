import { useState } from "react/cjs/react.development";
import client from "./client";

const getCartItems = async () => {
  const response = await client.get("/cart");
  if (!response.ok) return;
  return response.data;
};

const addCartItem = async (productId, count) => {
  const response = await client.post("/cart" , { productId, count } );
  if (!response.ok) return;
  return response.data;
};

const removeCartItem = async (productId) => {
  console.log(productId);
  const response = await client.delete(`/cart/${productId}`);
  if (!response.ok) return;
  return response.data;
};

const patchCartItem = async (productId, count) => {
  console.log(productId)
  const response = await client.delete(`/cart/${productId}/${count}`);
  if (!response.ok) return;
  return response.data;
};

export default {
  getCartItems,
  addCartItem,
  removeCartItem,
  patchCartItem,
};
