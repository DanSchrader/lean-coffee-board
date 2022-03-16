import styled from 'styled-components';

export default function Entry({ text, author }) {
  return (
    <Card>
      {text} ({author})
    </Card>
  );
}

const Card = styled.section`
  padding: 20px;
  max-width: 400px;
  border-radius: 5px;
  background-color: #fefefe;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;
