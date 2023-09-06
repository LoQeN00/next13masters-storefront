import { ProductList } from '@/ui/organisms/ProductList';
import { type ProductItemType } from '@/ui/types';

export default function Home() {
  const DUMMY_PRODUCTS: ProductItemType[] = [
    {
      category: 'Electronics',
      coverImage: {
        src: '/headphones.jpg',
        alt: 'Headphones',
      },
      name: 'Headphones',
      price: 9900,
    },
    {
      category: 'Electronics',
      coverImage: {
        src: '/headphones.jpg',
        alt: 'Headphones',
      },
      name: 'Headphones',
      price: 9900,
    },
    {
      category: 'Electronics',
      coverImage: {
        src: '/headphones.jpg',
        alt: 'Headphones',
      },
      name: 'Headphones',
      price: 9900,
    },
    {
      category: 'Electronics',
      coverImage: {
        src: '/headphones.jpg',
        alt: 'Headphones',
      },
      name: 'Headphones',
      price: 9900,
    },
  ];

  return (
    <section className="max-w-8xl mx-auto p-12 min-h-screen">
      <ProductList products={DUMMY_PRODUCTS} />
    </section>
  );
}
