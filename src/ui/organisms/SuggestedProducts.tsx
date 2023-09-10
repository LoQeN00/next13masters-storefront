import React from "react";
import { ProductList } from "./ProductList";
import { getProductsList } from "@/api/products";


export const SuggestedProducts = async () => {
  const products = await getProductsList();

  return <ProductList products={products.slice(-4)} />;
};
