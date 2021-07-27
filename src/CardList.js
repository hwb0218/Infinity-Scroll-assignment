import { useState, useRef, useCallback, useEffect } from "react";
import styled from "styled-components";
import Card from "./components/Card";

function CardList() {
  const [cardData, setCardData] = useState([]);
  const [page, setPage] = useState(0);
  const target = useRef(null);

  const option = {
    root: null,
    rootMargin: "200px",
    threshold: 0.2,
  };

  const getCardData = async (page) => {
    const loadedCardData = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`
    );
    const response = await loadedCardData.json();
    setCardData(cardData.concat(response));
  };

  const onIntersect = useCallback(([entry]) => {
    if (entry.isIntersecting) {
      setPage((page) => page + 1);
    }
  }, []);

  useEffect(() => {
    getCardData(page);
  }, [page]);

  useEffect(() => {
    if (target.current) {
      const observer = new IntersectionObserver(onIntersect, option);
      observer.observe(target.current);
      return () => observer && observer.disconnect();
    }
  }, [onIntersect, target]);

  return (
    <CardContainer>
      {cardData.map((card, index) => {
        return <Card cardData={card} key={index} />;
      })}
      <div ref={target} />
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 33px;
`;

export default CardList;
