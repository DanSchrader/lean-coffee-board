import styled from 'styled-components';
import dayjs from 'dayjs';
import { AiOutlineDelete } from 'react-icons/ai';
import ScreenReaderOnly from './ScreenReaderOnly';

export default function Entry({
  text,
  author,
  color,
  createdAt,
  onDelete,
  onCheck,
  isChecked,
  _id,
}) {
  return (
    <Card>
      <DeleteButton onClick={onDelete}></DeleteButton>
      <CheckBox>
        <label htmlFor={'mark-done' + _id}>
          <ScreenReaderOnly>Mark as done</ScreenReaderOnly>
        </label>
        <input
          checked={isChecked}
          onChange={onCheck}
          id={'mark-done' + _id}
          type="checkbox"
        ></input>
      </CheckBox>
      <CardHeader>
        <Author inputColor={color}>{author}</Author>
        <DateTime>{dayjs(createdAt).format('DD.MM.YYYY hh:mm')}</DateTime>
      </CardHeader>
      {text}
    </Card>
  );
}

const Card = styled.section`
  padding: 10px;
  width: 300px;
  height: 150px;
  border-radius: 5px;
  background-color: #fefefe;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px -1px;

  display: grid;
  grid-template-rows: 48px auto;
  position: relative;
`;
const CardHeader = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  margin-bottom: 10px;
  border-bottom: solid #bababa 1px;
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

const CheckBox = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
`;

const DeleteButton = styled.button.attrs(() => ({
  children: (
    <>
      <ScreenReaderOnly>Delete</ScreenReaderOnly>
      <AiOutlineDelete />
    </>
  ),
}))`
  width: 25px;
  height: 25px;
  background: none;
  border: none;
  border-radius: 50%;
  position: absolute;
  right: 5px;
  bottom: 5px;
`;
