import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  text-align: center;
  background: #f9fafb;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const Summary = styled.div`
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const Button = styled.button`
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

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ visible }) => (visible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  max-width: 400px;
`;

export default function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [showModal, setShowModal] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePayment = () => {
    setShowModal(true);
    dispatch(clearCart());
  };

  return (
    <Container>
      <Title>Checkout</Title>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <span style={{ color: "#2563eb", cursor: "pointer" }} onClick={() => navigate("/")}>Go shopping</span></p>
      ) : (
        <>
          <Summary>
            You have {cartItems.length} item(s) in your cart.<br />
            Total amount: <strong>${total.toFixed(2)}</strong>
          </Summary>
          <Button onClick={handlePayment}>Pay Now</Button>
        </>
      )}

      {/* --- Confirmation Modal --- */}
      <ModalOverlay visible={showModal}>
        <ModalContent>
          <h2>Payment Successful!</h2>
          <p>Thank you for your purchase.</p>
          <Button
            onClick={() => {
              setShowModal(false);
              navigate("/");
            }}
          >
            Back to Home
          </Button>
        </ModalContent>
      </ModalOverlay>
    </Container>
  );
}
