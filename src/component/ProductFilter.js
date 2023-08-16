import React from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const FilterTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 15px;
  color: #333;
`;

const FilterItem = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
`;

const FilterCheckbox = styled.input`
  margin-right: 10px;
`;

const FilterLabel = styled.span`
  font-size: 16px;
  color: #555;
`;

const ProductFilter = ({ filters, onChange }) => {
  return (
    <FilterContainer>
      <FilterTitle>Filtrer par type</FilterTitle>
      {filters.map((filter, index) => (
        <FilterItem key={index}>
          <FilterCheckbox
            type="checkbox"
            checked={filter.selected}
            onChange={() => onChange(index)}
          />
          <FilterLabel>{filter.label}</FilterLabel>
        </FilterItem>
      ))}
    </FilterContainer>
  );
};

export default ProductFilter;
