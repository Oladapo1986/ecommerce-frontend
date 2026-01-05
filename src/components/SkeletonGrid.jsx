import styled from "styled-components";

const Skeleton = styled.div`
  height: 300px;
  background: #e5e7eb;
  border-radius: 10px;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.4; }
    100% { opacity: 1; }
  }
`;

export default function SkeletonGrid() {
  return (
    <>
      {Array.from({ length: 8 }).map((_, i) => (
        <Skeleton key={i} />
      ))}
    </>
  );
}
