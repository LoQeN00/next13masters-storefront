export type ProductItemType = {
  id: string;
  categories: { name: string; id: string }[];
  name: string;
  price: number;
  coverImage: {
    src: string;
    alt: string;
  };
  description: string;
};
