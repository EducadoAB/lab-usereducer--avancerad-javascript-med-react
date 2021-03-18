// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const products = [
  { id: 1, name: "Black T-Shirt", price: 249, imageUrl: "https://via.placeholder.com/220x320.png?text=Black+T-Shirt" },
  { id: 2, name: "Green T-Shirt", price: 249, imageUrl: "https://via.placeholder.com/220x320.png?text=Green+T-Shirt" },
  { id: 3, name: "Yellow T-Shirt", price: 249, imageUrl: "https://via.placeholder.com/220x320.png?text=Yellow+T-Shirt" },
  { id: 4, name: "Blue T-Shirt", price: 249, imageUrl: "https://via.placeholder.com/220x320.png?text=Blue+T-Shirt" },
  { id: 5, name: "Purple T-Shirt", price: 249, imageUrl: "https://via.placeholder.com/220x320.png?text=Purple+T-Shirt" },
  { id: 6, name: "Lime T-Shirt", price: 249, imageUrl: "https://via.placeholder.com/220x320.png?text=Lime+T-Shirt" },
  { id: 7, name: "Pink T-Shirt", price: 249, imageUrl: "https://via.placeholder.com/220x320.png?text=Pink+T-Shirt" },
  { id: 8, name: "Magenta T-Shirt", price: 249, imageUrl: "https://via.placeholder.com/220x320.png?text=Magenta+T-Shirt" },
];

// GET /api/products
export default (req, res) => {
  res.status(200).json(products);
}
