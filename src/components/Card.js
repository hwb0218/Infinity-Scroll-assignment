import styled from "styled-components";

const Card = () => {
  return (
    <CardItem>
      <div>
        <span>Comment id</span>
        {/* id */}
        <span>This is id</span>
      </div>
      <EmailWrapper>
        <span>Email</span>
        {/* email */}
        <span>This is email</span>
      </EmailWrapper>
      <div>
        <p>Comment</p>
        {/* comment */}
        <div>This is comment</div>
      </div>
    </CardItem>
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

const EmailWrapper = styled.div`
  margin: 10px 0;
`;

export default Card;
