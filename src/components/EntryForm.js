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
  }
}

const NewEntryForm = styled.form`
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100vw;
`;

const NewEntryFormLabel = styled.label``;

const NewEntryFormInput = styled.input`
  flex-grow: 1;
`;

const NewEntryFormButton = styled.button`
  margin-right: 25px;
`;

const PlusButton = styled.div``;
