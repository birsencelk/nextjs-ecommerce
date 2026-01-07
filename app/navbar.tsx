import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="text-gray-700 hover:text-black">
              Home Page
            </Link>
          </li>
          <li>
            <Link href="/cart" className="text-gray-700 hover:text-black">
              Shopping Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
