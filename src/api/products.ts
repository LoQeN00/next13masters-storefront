import { type ProductItemType } from "@/ui/types";

type ProductResponseItem = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
  image: string;
  longDescription: string;
};

export const getProductsList = async (take?: number, offset?: number) => {

  const url = new URL('https://naszsklep-api.vercel.app/api/products');

  const params = new URLSearchParams();

  if (take) params.append('take', take.toString())

  if (offset) params.append('offset', offset.toString())

  url.search = params.toString();


  const res = await fetch(url);
  const productsResponse = (await res.json()) as ProductResponseItem[];


  const products = productsResponse.map((product) =>
    ProductResponseItemToProductItemType(product),
  );

  return products;
};

export const getProductById = async (id: ProductResponseItem["id"]) => {
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products/${id}`,
  );
  const productResponse = (await res.json()) as ProductResponseItem;

  const product = ProductResponseItemToProductItemType(productResponse);

  return product;
};

const ProductResponseItemToProductItemType = (
  product: ProductResponseItem,
): ProductItemType => ({
  id: product.id,
  name: product.title,
  category: product.category,
  price: product.price,
  coverImage: {
    alt: product.title,
    src: product.image,
  },
  description: product.description,
});
