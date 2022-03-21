import { useEffect, useState } from "react";
import styled from "styled-components";
import axiosInstance from "../../libs/axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Headlines = () => {

  const [topHeadlines, setTopHeadlines] = useState<[string]>()

  const country = 'us'

  useEffect(() => {
    axiosInstance.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=7ec1b6572dde4dd2b1ccadbb293a1ac0`).then((response) => {
      setTopHeadlines(response.data.articles.slice(0,3))
    });
  }, [])

  if(!topHeadlines) return null;

  return (
    <Container>
      {topHeadlines.map((headline: any) => (
        <Text>{headline.title}</Text>
      ))}
    </Container>
  );
};

export default Headlines;
