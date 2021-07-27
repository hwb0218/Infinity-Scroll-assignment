import React from "react";
import styled from "styled-components";

const Card = ({ cardData }) => {
  return (
    cardData && (
      <CardItem>
        <div>
          <Title>Comment id</Title>
          <Content>{cardData.id}</Content>
        </div>
        <EmailWrapper>
          <Title>Email</Title>
          <Content>{cardData.email}</Content>
        </EmailWrapper>
        <div>
          <CommentTitle>Comment</CommentTitle>
          <div>{cardData.body}</div>
        </div>
      </CardItem>
    )
  );
};

const CardItem = styled.div`
  width: 500px;
  padding: 20px;
  border: 0.5px solid #ced4d4;
  border-radius: 20px;
  background: #f8f9fa;

  & + & {
    margin-top: 14px;
  }
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #212529;
`;

const Content = styled.span`
  margin-left: 12px;
`;

const CommentTitle = styled.p`
  margin-bottom: 2px;
  font-size: 18px;
  font-weight: bold;
  color: #212529;
`;

const EmailWrapper = styled.div`
  margin: 10px 0;
`;

export default Card;
