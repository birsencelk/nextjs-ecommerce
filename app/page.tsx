import { Product } from "./product-data";
import ProductList from "./ProductList";

export default async function Home() {
  const productsRes = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/products`
  );
  const products: Product[] = await productsRes.json();

  const cartRes = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/users/1/cart`,
    {
      cache: "no-cache",
    }
  );
  const initialCartProducts: Product[] = await cartRes.json();

  return (
    <ProductList
      products={products}
      initialCartProducts={initialCartProducts}
    />
  );
}
