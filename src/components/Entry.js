import styled from 'styled-components';
import dayjs from 'dayjs';

export default function Entry({ text, author, color, createdAt, onDelete }) {
  return (
    <Card>
      <DeleteButton type="button" onClick={onDelete}>
        <svg
          id="ewYHBnJoTsh1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
        >
          <path
            d="M0,0L20,20"
            transform="matrix(.93704 0 0 0.93704 0.6296 0.6296)"
            fill="none"
            stroke="#101010"
            stroke-width="1"
          />
          <path
            d="M0,20L20,0"
            transform="matrix(.937039 0 0 0.937039 0.62961 0.62961)"
            fill="none"
            stroke="#101010"
            stroke-width="1"
          />
        </svg>
      </DeleteButton>
      <CardHeader>
        <Author inputColor={color}>{author}</Author>
        <DateTime>{dayjs(createdAt).format('DD.MM.YYYY HH:mm')}</DateTime>
      </CardHeader>

      {text}
    </Card>
  );
}

const Card = styled.section`
  padding: 20px;
  width: 300px;
  height: 150px;
  border-radius: 5px;
  background-color: #fefefe;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px -1px;

  display: grid;
  position: relative;
`;
const CardHeader = styled.div`
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
`;

const Author = styled.span`
  color: ${props => props.inputColor};
  font-weight: 900;
  font-size: 100%;
`;

const DateTime = styled.span`
  font-weight: 300;
  font-size: 80%;
`;

const DeleteButton = styled.button`
  width: 25px;
  height: 25px;
  padding: 7px;
  display: grid;
  justify-items: center;
  align-items: center;
  background: #ededed;
  border: none;
  border-radius: 50%;
  position: absolute;
  right: 5px;
  top: 5px;
`;
