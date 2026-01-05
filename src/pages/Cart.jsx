import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { removeFromCart, updateQuantity } from "../features/cart/cartSlice";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 1rem;
`;

const Item = styled.div`
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid #e5e7eb;
  padding: 1rem 0;
  align-items: center;
  flex-wrap: wrap;
`;

const Image = styled.img`
  width: 100px;
  object-fit: contain;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 0.25rem;
`;

const Title = styled.h3`
  flex: 2;
  min-width: 180px;
`;

const Price = styled.p`
  flex: 1;
  font-weight: 600;
  min-width: 80px;
`;

const Quantity = styled.input`
  width: 60px;
  padding: 0.25rem;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
`;

const Remove = styled.button`
  padding: 0.25rem 0.5rem;
  background: #dc2626;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #b91c1c;
  }
`;

const Total = styled.p`
  font-weight: 700;
  text-align: right;
  margin-top: 1rem;
  font-size: 1.2rem;
`;

const CheckoutButton = styled.button`
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;

  &:hover {
    background: #1d4ed8;
  }
`;

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0)
    return (
      <Container>
        <p>
          Your cart is empty. <Link to="/">Go shopping</Link>
        </p>
      </Container>
    );

  return (
    <Container>
      {cartItems.map((item) => (
        <Item key={item.id}>
          <Image src={item.image} alt={item.title} />
          <Title>{item.title}</Title>
          <Price>${item.price}</Price>
          <Quantity
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) =>
              dispatch(
                updateQuantity({ id: item.id, quantity: Number(e.target.value) })
              )
            }
          />
          <Remove onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </Remove>
        </Item>
      ))}
      <Total>Total: ${total.toFixed(2)}</Total>
      <CheckoutButton onClick={() => navigate("/checkout")}>
        Proceed to Checkout
      </CheckoutButton>
    </Container>
  );
}
