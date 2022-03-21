import styled from 'styled-components';
import ScreenReaderOnly from './ScreenReaderOnly.js';

export default function EntryForm({ onSubmit }) {
  return (
    <NewEntryForm aria-labelledby="entry-form" onSubmit={handleSubmit}>
      <NewEntryFormLabel htmlFor="text">
        <ScreenReaderOnly>Entry text</ScreenReaderOnly>
      </NewEntryFormLabel>
      <NewEntryFormInput
        name="text"
        id="text"
        placeholder="Type your comment here..."
        type="text"
      ></NewEntryFormInput>
      <NewEntryFormButton id="entry-form">
        <ScreenReaderOnly>Create a new entry</ScreenReaderOnly>
        <PlusButton aria-hidden="true">+</PlusButton>
      </NewEntryFormButton>
    </NewEntryForm>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const inputElement = form.elements.text;
    onSubmit(inputElement.value);
    form.reset();
  }
}

const NewEntryForm = styled.form`
  position: fixed;
  display: flex;
  bottom: 10px;
  width: 100vw;
  padding: 0 20px;
  gap: 10px;
`;

const NewEntryFormLabel = styled.label`
  position: absolute;
`;

const NewEntryFormInput = styled.input`
  flex-grow: 1;
  padding: 5px 50px 5px 10px;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: #fefefe;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px -1px;
`;

const NewEntryFormButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  position: absolute;
  right: 30px;
  bottom: 5px;
`;

const PlusButton = styled.div``;
