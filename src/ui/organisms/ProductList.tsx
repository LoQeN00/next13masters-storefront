import React from 'react';
import { ProductListItem } from '../molecules/ProductListItem';
import { type ProductItemType } from '../types';

type Props = {
  products: ProductItemType[];
};

export const ProductList = ({ products }: Props) => {
  return (
    <ul data-testid="products-list" className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductListItem key={product.name} product={product} />
      ))}
    </ul>
  );
};
