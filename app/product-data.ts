export interface Product {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
  price: number;
}

export const products: Product[] = [
  {
    id: "123",
    name: "Hat",
    imageUrl: "/hat.jpg",
    description:
      "Cheer the team on in style with our unstructured, low crown, six-panel baseball cap made of 100% organic cotton twill. Featuring our original Big Star Collectibles artwork, screen-printed with PVC- and phthalate-free inks. Complete with matching sewn ventilation eyelets, and adjustable fabric closure.",
    price: 29,
  },
  {
    id: "234",
    name: "Mug",
    imageUrl: "/mug.jpg",
    description:
      "Enjoy your morning coffee or tea in the company of your favorite Big Star Collectible character. Our strong ceramic mug, with its comfortable D-shaped handle, is microwave and dishwasher safe, and available in one size: 11 oz (3.2” diameter x 3.8” h).",
    price: 16,
  },
  {
    id: "345",
    name: "Shirt",
    imageUrl: "/shirt.jpg",
    description:
      "Our t-shirts are made from ring-spun, long-staple organic cotton that's ethically sourced from member farms of local organic cotton cooperatives. Original artwork is screen-printed using PVC- and phthalate-free inks. Features crew-neck styling, shoulder-to-shoulder taping, and a buttery soft feel. Machine-wash warm, tumble-dry low.",
    price: 26,
  },
  {
    id: "456",
    name: "Apron",
    imageUrl: "/apron.jpg",
    description:
      "Everyone’s a chef in our eco-friendly apron made from 55% organic cotton and 45% recycled polyester. Showcasing your favorite Big Star Collectibles design, the apron is screen-printed in PVC- and phthalate-free inks. Apron measures 24 inches wide by 30 inches long and is easily adjustable around the neck and waist with one continuous strap. Machine-wash warm, tumble-dry low.",
    price: 24,
  },
  {
    id: "005",
    name: "Hoodie",
    imageUrl: "/hoodie.jpg",
    price: 54,
    description:
      "Mid-weight hoodie with a soft interior, kangaroo pocket, and bold printed design.",
  },
  {
    id: "006",
    name: "Crewneck Sweatshirt",
    imageUrl: "/sweatshirt.jpg",
    price: 48,
    description:
      "Classic crewneck sweatshirt made from organic cotton blend with ribbed cuffs and hem.",
  },
  {
    id: "007",
    name: "Tote Bag",
    imageUrl: "/tote.jpg",
    price: 22,
    description:
      "Reusable canvas tote bag crafted from 100% organic cotton with reinforced handles.",
  },
  {
    id: "008",
    name: "Sticker Pack",
    imageUrl: "/stickers.jpg",
    price: 8,
    description:
      "Premium vinyl sticker pack featuring exclusive Big Star Collectibles artwork.",
  },
  {
    id: "009",
    name: "Notebook",
    imageUrl: "/notebook.jpg",
    price: 14,
    description:
      "A5 notebook with recycled paper pages and a soft-touch illustrated cover.",
  },
  {
    id: "010",
    name: "Water Bottle",
    imageUrl: "/water-bottle.jpg",
    price: 32,
    description:
      "Stainless steel insulated bottle keeps drinks cold for 24h or hot for 12h.",
  },

  {
    id: "011",
    name: "Beanie",
    imageUrl: "/beanie.jpg",
    price: 20,
    description:
      "Rib-knit beanie made from organic cotton with embroidered logo detail.",
  },
  {
    id: "012",
    name: "Poster",
    imageUrl: "/poster.jpg",
    price: 18,
    description: "High-quality art poster printed on FSC-certified paper.",
  },
  {
    id: "013",
    name: "Blanket",
    imageUrl: "/blanket.jpg",
    price: 60,
    description:
      "Soft woven blanket featuring a full-color Big Star Collectibles design.",
  },
  {
    id: "014",
    name: "Keychain",
    imageUrl: "/keychain.jpg",
    price: 10,
    description: "Durable metal keychain with enamel artwork.",
  },

  {
    id: "015",
    name: "Phone Case",
    imageUrl: "/phone-case.jpg",
    price: 28,
    description:
      "Protective phone case with shock-absorbing edges and printed artwork.",
  },
];
