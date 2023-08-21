import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import ProductFilter from "../component/ProductFilter";

const ProductListContainer = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  flex: 0 0 300px;
  padding: 10px;
  border-radius: 10px;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
`;

const MainContent = styled.div`
  flex: 1;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const ProductCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 5px;
`;

const ProductTitle = styled.h3`
  font-size: 18px;
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  color: #fd8d14;
`;

const BuyButton = styled.button`
  background-color: #fd8d14;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #c51605;
  }
`;

const LoadingMessage = styled.p`
  text-align: center;
  margin-top: 20px;
  font-style: italic;
  color: #aaa;
`;

const ProductListPage = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    setSelectedFilters(filterOptions);
  }, []);
  useEffect(() => {
    // Fetch data from the API
    axios
      .get("http://localhost:3000/product")
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  const handleFilterChange = (index) => {
    const updatedFilters = [...selectedFilters];
    updatedFilters[index].selected = !updatedFilters[index].selected;
    setSelectedFilters(updatedFilters);
  };

  const filteredProducts =
    selectedFilters.length > 0
      ? products.filter((product) =>
          selectedFilters.some(
            (filter) => filter.selected && filter.label === product.productType
          )
        )
      : products;

  const filterOptions = [
    { label: "Petit Déjeuner", selected: true },
    { label: "Epécerie Sucré", selected: true },
    { label: "Epécerie Salée", selected: true },
  ];
  const handlePurchase = (product) => {
    console.log("adding to card", product);
    console.log(props.addToCart);
    props.addToCart(product);
  };
  return (
    <ProductListContainer>
      <Sidebar>
        <ProductFilter
          filters={selectedFilters}
          onChange={handleFilterChange}
        />
      </Sidebar>
      <MainContent>
        <h1>Nos Produits</h1>
        {isLoading ? (
          <LoadingMessage>Loading...</LoadingMessage>
        ) : (
          <ProductGrid>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id}>
                <ProductImage
                  src={product.productPicture}
                  alt={product.productName}
                />
                <ProductTitle>{product.productName}</ProductTitle>
                <ProductPrice>TND {product.productPrice}</ProductPrice>
                <BuyButton onClick={() => handlePurchase(product)}>
                  Acheter{" "}
                  <span role="img" aria-label="cart">
                    🛒
                  </span>
                </BuyButton>
              </ProductCard>
            ))}
          </ProductGrid>
        )}
      </MainContent>
    </ProductListContainer>
  );
};

export default ProductListPage;
