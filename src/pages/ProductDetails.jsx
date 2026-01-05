import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 2rem;
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem;
  align-items: flex-start;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  flex: 1;
  max-width: 350px;
  object-fit: contain;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 1rem;
  background: #ffffff;
`;

const Info = styled.div`
  flex: 1;
  min-width: 250px;
`;

const Title = styled.h2`
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  margin-bottom: 1rem;
  line-height: 1.4;
  color: #666;
`;

const Price = styled.h3`
  font-weight: 700;
  margin-bottom: 1rem;
`;

const AddButton = styled.button`
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

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${id}`
        );

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <Container>Loading product...</Container>;
  if (error) return <Container>Error: {error}</Container>;
  if (!product) return <Container>No product data available.</Container>;

  return (
    <Container>
      <Image src={product.image} alt={product.title} />
      <Info>
        <Title>{product.title}</Title>
        <Description>{product.description}</Description>
        <Price>${product.price}</Price>
        <AddButton>Add to Cart</AddButton>
      </Info>
    </Container>
  );
};

export default ProductDetails;
