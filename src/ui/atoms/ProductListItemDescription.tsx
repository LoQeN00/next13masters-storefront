import React from 'react';
import { formatMoney } from '@/utils';

type Props = {
  product: {
    name: string;
    category: string;
    price: number;
  };
};

export const ProductListItemDescription = ({ product: { name, category, price } }: Props) => {
  return (
    <div className="mt-2">
      <div>
        <h3 className="text-sm font-semibold text-gray-700">{name}</h3>
        <p className="text-sm text-gray-500">
          <span>Kategoria: {category}</span>
        </p>
      </div>
      <p className="text-sm font-medium text-gray-900">
        <span>Cena: {formatMoney(price / 100)}</span>
      </p>
    </div>
  );
};
