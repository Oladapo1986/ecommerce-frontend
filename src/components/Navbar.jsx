import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled(Link)`
  font-weight: 700;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
`;

const CartLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`;

const Badge = styled.span`
  position: absolute;
  top: -6px;
  right: -10px;
  background: ${({ theme }) => theme.colors.accent};
  color: white;
  border-radius: 999px;
  padding: 2px 6px;
  font-size: 0.75rem;
`;

export default function Navbar() {
  const count = useSelector(state =>
    state.cart.items.reduce((sum, i) => sum + i.quantity, 0)
  );

  return (
    <Nav>
      <Brand to="/">Shop</Brand>
      <CartLink to="/cart">
        Cart {count > 0 && <Badge>{count}</Badge>}
      </CartLink>
    </Nav>
  );
}
