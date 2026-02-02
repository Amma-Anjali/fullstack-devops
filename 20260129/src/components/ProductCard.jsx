import { useState } from "react";

function ProductCard({ name, price }) {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
      <p>Items added: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
