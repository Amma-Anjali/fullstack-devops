import ProductCard from "./ProductCard";

function ProductList() {
  const products = [
    { id: 1, name: "iPhone 15", price: 79999 },
    { id: 2, name: "Samsung Galaxy S24", price: 69999 },
    { id: 3, name: "OnePlus 12", price: 64999 }
  ];

  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default ProductList;
