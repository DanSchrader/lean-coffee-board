import { useState } from 'react';
import styled from 'styled-components';

export default function NewEntry({ onEntry }) {
  const [newEntry, setNewEntry] = useState('');

  return (
    <NewEntryForm onSubmit={handleSubmit}>
      <NewEntryFormLabel htmlFor="entry-form">
        Make a new comment:
      </NewEntryFormLabel>
      <NewEntryFormInput
        name="entry-form"
        id="entry-form"
        placeholder="Type your comment here..."
        onChange={event => setNewEntry(event.target.value)}
        value={newEntry}
      ></NewEntryFormInput>
      <NewEntryFormButton>Submit</NewEntryFormButton>
    </NewEntryForm>
  );

  function handleSubmit(event) {
    event.preventDefault();
    onEntry(newEntry);
    setNewEntry('');
  }
}

const NewEntryForm = styled.form``;

const NewEntryFormLabel = styled.label``;

const NewEntryFormInput = styled.input``;

const NewEntryFormButton = styled.button``;
