import { useRouter } from "next/router";
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
  border: none;
  border-radius: 5px;
  background-color: #00ffff7d;
  text-decoration: none;
  color: black;
  padding: 1rem;
  font-size: medium;
  cursor: pointer;

  &:hover {
    background-color: aqua;
  }
`;

export default function Form({ onSubmit, value, isEdit }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = Object.fromEntries(form);
    if (isEdit) {
      onSubmit({ ...data, id: value.id });
    } else {
      onSubmit(data);
    }
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <h1>{isEdit ? "Edit Place" : "Add Place"}</h1>
      <StyledLabel htmlFor="name">Name:</StyledLabel>
      <StyledInput
        required
        id="name"
        name="name"
        defaultValue={isEdit ? value.name : ""}
      ></StyledInput>

      <StyledLabel htmlFor="location">Location:</StyledLabel>
      <StyledInput
        id="location"
        name="location"
        defaultValue={isEdit ? value.location : ""}
      ></StyledInput>

      <StyledLabel htmlFor="mapURL">Map:</StyledLabel>
      <StyledInput
        id="mapURL"
        name="mapURL"
        defaultValue={isEdit ? value.mapURL : ""}
      ></StyledInput>

      <StyledLabel htmlFor="image">Image:</StyledLabel>
      <StyledInput
        id="image"
        name="image"
        defaultValue={
          isEdit
            ? value.image
            : "https://images.unsplash.com/photo-1712079679970-bb45e9ef5b2a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"
        }
      ></StyledInput>

      <StyledLabel htmlFor="description">Description:</StyledLabel>
      <StyledInput
        id="description"
        name="description"
        defaultValue={isEdit ? value.description : ""}
      ></StyledInput>

      <StyledButton>Submit</StyledButton>
    </StyledForm>
  );
}
