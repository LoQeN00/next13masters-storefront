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
      <div className="flex justify-center mt-10">
        <Link href="/products/1" className="bg-blue-400 text-white p-4 rounded-2xl text-md">
          See more products
        </Link>
      </div>
    </>
  );
};

export default ProductsPage;
