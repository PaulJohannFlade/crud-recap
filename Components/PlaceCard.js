import Image from "next/image";
import styled from "styled-components";

const StyledImage = styled(Image)`
  width: 80%;
  height: auto;
`;

const StyledSection = styled.section`
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  align-items: center;
  padding: 1rem;
`;
export default function PlaceCard({ image, name, location }) {
  return (
    <StyledSection>
      <StyledImage src={image} width={400} height={300} alt={name} />
      <h2>{name}</h2>
      <p>{location}</p>
    </StyledSection>
  );
}
export { StyledImage, StyledSection };
