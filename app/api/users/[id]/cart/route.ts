import { NextRequest } from "next/server";
import { products } from "@/app/product-data";

type Params = { id: string };
type ShoppingCart = Record<string, string[]>;

const carts: ShoppingCart = {
  user1: ["123", "234"],
  user2: ["345"],
};

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  const { id: userId } = await params;
  const productIds = carts[userId];

  if (!productIds) {
    return new Response(JSON.stringify({ message: "Cart not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  const cartItems = productIds
    ? productIds.map((productId) => products.find((p) => p.id === productId))
    : [];

  return new Response(JSON.stringify({ message: "Cart endpoint", cartItems }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(
  request: NextRequest,
  { params }: { params: Params }
) {
  const { id: userId } = await params;
  const { productId } = await request.json();

  if (!carts[userId]) {
    carts[userId] = [];
  }

  carts[userId].push(productId);

  return new Response(JSON.stringify(carts[userId]), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Params }
) {
  const { id: userId } = await params;
  const { productId } = await request.json();

  if (!carts[userId]) {
    return new Response(JSON.stringify({ message: "Cart not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  carts[userId] = carts[userId].filter((id) => id !== productId);

  return new Response(JSON.stringify(carts[userId]), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
