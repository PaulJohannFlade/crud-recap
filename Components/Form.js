import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 80vw;
  margin: 50px auto;
`;

const StyledInput = styled.input`
  width: 80%;
`;

const StyledLabel = styled.label`
  width: 80%;
  text-align: left;
`;

const StyledButton = styled.button`
  border-radius: 50%;
  border: 2px dashed red;
  background-color: yellow;
  padding: 10px;
  cursor: pointer;
`;

export default function Form({ onSubmit }) {
  return (
    <StyledForm onSubmit={onSubmit}>
      <h1>Add Place</h1>
      <StyledLabel htmlFor="name">Name:</StyledLabel>
      <StyledInput
        required
        id="name"
        name="name"
        defaultValue={""}></StyledInput>

      <StyledLabel htmlFor="location">Location:</StyledLabel>
      <StyledInput
        id="location"
        name="location"
        defaultValue={""}></StyledInput>

      <StyledLabel htmlFor="mapURL">Map:</StyledLabel>
      <StyledInput id="mapURL" name="mapURL" defaultValue={""}></StyledInput>

      <StyledLabel htmlFor="image">Image:</StyledLabel>
      <StyledInput id="image" name="image" defaultValue={""}></StyledInput>

      <StyledLabel htmlFor="description">Description:</StyledLabel>
      <StyledInput
        id="description"
        name="description"
        defaultValue={""}></StyledInput>

      <StyledButton>Submit</StyledButton>
    </StyledForm>
  );
}
