import Link from 'next/link';
import { getProductsList } from '@/api/products';
import { ProductList } from '@/ui/organisms/ProductList';

const ProductsPage = async () => {
  const take = 20;
  const offset = 0;

  const products = (await getProductsList(take, offset)).slice(0, 4);

  return (
    <>
      <ProductList products={products} />
      <Link href="/products/1">See more products</Link>
    </>
  );
};

export default ProductsPage;
