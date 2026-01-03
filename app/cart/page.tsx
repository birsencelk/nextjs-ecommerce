"use client";
import { useState } from "react";
import Link from "next/link";
import { products } from "../product-data";

export default function CartPage() {
  const [cartId, setCartIds] = useState(["123", "456"]);
  const cartProducts = cartId.map((id) => products.find((p) => p.id === id)!);
  return (
    <div>
      <h1>Cart</h1>
      {cartProducts.map((product) => (
        <Link key={product.id} href={`/product/${product.id}`}>
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
