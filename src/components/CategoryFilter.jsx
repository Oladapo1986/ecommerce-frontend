import styled from "styled-components";

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
`;

export default function CategoryFilter({ value, onChange, options }) {
  return (
    <Select value={value} onChange={e => onChange(e.target.value)}>
      {options.map(cat => (
        <option key={cat} value={cat}>
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </option>
      ))}
    </Select>
  );
}
