import React from 'react';
import { ProductCoverImage } from '../atoms/ProductCoverImage';
import { ProductListItemDescription } from '../atoms/ProductListItemDescription';
import { type ProductItemType } from '../types';

type Props = {
  product: ProductItemType;
};

export const ProductListItem = ({ product }: Props) => {
  return (
    <li>
      <article>
        <ProductCoverImage {...product.coverImage} />
        <ProductListItemDescription product={product} />
      </article>
    </li>
  );
};
