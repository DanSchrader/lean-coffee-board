import styled from 'styled-components';

export default function UserPage({ onCreateAuthor }) {
  return (
    <FormWrapper aria-labelledby="user-form" onSubmit={handleUserSubmit}>
      <UserNameLabel htmlFor="user-name">What's your name?</UserNameLabel>
      <UserNameInput
        name="userName"
        id="user-name"
        placeholder="Type your name here..."
      ></UserNameInput>
      <UserColorLabel htmlFor="user-color">Choose your color</UserColorLabel>
      <UserColorInput
        type="color"
        id="user-color"
        name="userColor"
      ></UserColorInput>
      <UserFormButton id="user-form">Remember me</UserFormButton>
    </FormWrapper>
  );

  function handleUserSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const nameElement = form.elements.userName;
    const colorElement = form.elements.userColor;
    onCreateAuthor(nameElement.value, colorElement.value);
    form.reset();
  }
}

const FormWrapper = styled.form`
  width: 50vw;
  height: 50vh;
  background-color: #fefefe;
  display: grid;
  justify-items: center;
  align-items: center;
  border-radius: 5px;
  position: relative;
  top: 20vh;
  left: 25vw;
`;

const UserNameLabel = styled.label``;

const UserNameInput = styled.input``;

const UserColorLabel = styled.label``;

const UserColorInput = styled.input``;

const UserFormButton = styled.button``;
