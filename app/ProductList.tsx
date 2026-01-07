"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "./product-data";

export default function ProductList({
  products,
  initialCartProducts = [],
}: {
  products: Product[];
  initialCartProducts: Product[];
}) {
  const [cartProducts, setCartProducts] = useState(initialCartProducts);

  const addToCart = async (productId: string) => {
    const response = await fetch("/api/users/1/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId }),
    });

    const updatedCartProducts = await response.json();

    setCartProducts(updatedCartProducts);
  };

  const removeFromCart = async (productId: string) => {
    const response = await fetch("/api/users/1/cart", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId }),
    });

    const updatedCartProducts = await response.json();

    setCartProducts(updatedCartProducts);
  };

  const productIsInCart = (productId: string) => {
    return cartProducts.some((cp) => cp.id === productId);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
          >
            <div className="flex justify-center mb-4 h-48 relative">
              <Image
                src={product.imageUrl}
                alt="Product image"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            {productIsInCart(product.id) ? (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                onClick={(e) => {
                  e.preventDefault();
                  removeFromCart(product.id);
                }}
              >
                Remove from Cart
              </button>
            ) : (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(product.id);
                }}
              >
                Add to Cart
              </button>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
