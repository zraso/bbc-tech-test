import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axiosInstance from "../../libs/axios";
import { countriesList } from './countriesList';

const Button = styled.button`
  margin-top: 10px;
  padding: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Countries = () => {
  const [country, setCountry] = useState<string>();

  const onSubmit = async (countryItem: string) => {
    if(countryItem) {
      setCountry(countryItem)
    }

    axiosInstance.post("/countries", {
      country,
    });


  };

  return (
    <Container>
      {
        countriesList.map((countryItem: string) => (
          <Link to="/headlines">
            <Button aria-label="submit-button" disabled={false} onClick={() => onSubmit(countryItem)}>
              {countryItem}
            </Button>
          </Link>
        ))
      }
    </Container>
  );
};

export default Countries;
