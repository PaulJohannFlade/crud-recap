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
  const router = useRouter();
  // if (isEdit) {
  //   return ({ name, location, mapURL, image, description } = value);
  // }
  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = Object.fromEntries(form);
    console.log(value);
    const dataPlace = { ...data, id: value.id };
    onSubmit(dataPlace);
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <h1>Add Place</h1>
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
        defaultValue={isEdit ? value.image : ""}
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
