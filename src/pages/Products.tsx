import { useDispatch } from "react-redux";
import { addItem } from "../store/cart";
import Card from "../components/Card";
import { Product } from "../types";

const products: Product[] = [
  { id: "1", name: "iPhone", price: 999, image: "./img/iphone.jpg" },
  { id: "2", name: "MacBook", price: 1299, image: "./img/land.jpeg" },
  { id: "3", name: "Mobiles", price: 799, image: "./img/mobiles.webp" },
  { id: "4", name: "Samsung", price: 199, image: "./img/sum.jpeg" },
];

function Products() {
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(
      addItem({
        ...product,
        quantity: 1,
      })
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
