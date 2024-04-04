import { useRouter } from "next/router";
import { styled } from "styled-components";
import { StyledImage, StyledSection } from "@/Components/PlaceCard";
import { StyledDiv } from "@/pages";
import Link from "next/link";

const StyledWrapper = styled(StyledDiv)`
  margin: 2rem;
  padding: 2rem;
`;

const StyledAnchor = styled.a`
  background-color: #00ffff7d;
  padding: 1rem;
  text-decoration: none;
  cursor: pointer;
  border-radius: 1rem;
  width: 80%;
  text-align: center;
  margin-bottom: 1rem;
  color: black;

  &:hover {
    background-color: aqua;
  }
`;

const StyleButton = styled.button`
  background-color: #00ffff7d;
  border: none;
  padding: 1rem;
  width: 80%;
  cursor: pointer;
  border-radius: 1rem;
  text-align: center;
  margin-bottom: 1rem;
  font-size: medium;

  &:hover {
    background-color: red;
    color: white;
  }
`;

const StyledLinkWrapper = styled(Link)`
  position: absolute;
  top: 1rem;
  left: 0.5rem;
  font-size: 1.3rem;
  text-decoration: none;
  color: white;
  padding: 5px;
  border-radius: 5px;
  background-color: gray;

  &:hover {
    background-color: rgba(0, 0, 0, 0.582);
  }
`;

export default function DetailsPage({ places, onDeletePlace }) {
  const router = useRouter();
  const { id } = router.query;

  const place = places.find((place) => place.id === id);
  if (!place) {
    return <h1>Page not found!</h1>;
  }
  const { name, location, description, mapURL, image } = place;
  return (
    <>
      <StyledLinkWrapper href="/">&larr; Back</StyledLinkWrapper>
      <StyledWrapper>
        <StyledSection>
          <h1>{location}</h1>
          <StyledImage src={image} width={400} height={300} alt={name} />
          <h2>{name}</h2>
          <p>{description}</p>
          <StyledAnchor href={mapURL} target="_blank">
            Location
          </StyledAnchor>
          <StyleButton onClick={() => onDeletePlace(id)}>Delete</StyleButton>
        </StyledSection>
      </StyledWrapper>
    </>
  );
}

export { StyledLinkWrapper };
