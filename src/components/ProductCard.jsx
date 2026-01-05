import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  height: 180px;
  object-fit: contain;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
`;

const Price = styled.p`
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const Actions = styled.div`
  margin-top: auto;
  display: flex;
  gap: 0.5rem;
`;

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <Card>
      <Image src={product.image} alt={product.title} />
      <Title>{product.title}</Title>
      <Price>${product.price}</Price>
      <Actions>
        <Link to={`/product/${product.id}`}>View</Link>
        <button onClick={() => dispatch(addToCart(product))}>
          Add
        </button>
      </Actions>
    </Card>
  );
}
