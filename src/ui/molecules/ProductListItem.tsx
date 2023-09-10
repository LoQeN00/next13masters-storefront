import React from "react";
import Link from "next/link";
import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";
import { type ProductItemType } from "../types";

type Props = {
  product: ProductItemType;
};

export const ProductListItem = ({ product }: Props) => {
  return (
    <li>
      <Link href={`/product/${product.id}`}>
        <article>
          <ProductCoverImage {...product.coverImage} />
          <ProductListItemDescription product={product} />
        </article>
      </Link>
    </li>
  );
};
