import { useCart } from "../context/CartContext";
import { CartCard } from "../components";
import { useTitle } from "../hooks/useTitle";
export const Cart = () => {
  useTitle("Cart");
  const { total, cartList } = useCart();

  return (
    <main>
      <section className="cart">
        <h1>
          Cart Items: {cartList.length}/${total}
        </h1>
        {cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
