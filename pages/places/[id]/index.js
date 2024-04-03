import { useRouter } from "next/router";
import { styled } from "styled-components";
import { StyledImage, StyledSection } from "@/Components/PlaceCard";
import { StyledDiv } from "@/pages";
import { StyledLink } from "@/pages/create";

const StyledWrapper = styled(StyledDiv)`
  margin: 2rem;
  padding: 2rem;
`;

const StyledAnchor = styled.a`
  background-color: aqua;
  padding: 1rem;
  text-decoration: none;
  cursor: pointer;
  border-radius: 1rem;
  width: 80%;
  text-align: center;
  margin-bottom: 1rem;
`;

const StyledLinkWrapper = styled(StyledLink)`
  //padding-bottom: 2rem;
`;

export default function DetailsPage({ places }) {
  const router = useRouter();
  const { id } = router.query;

  const place = places.find((place) => place.id === id);
  if (!place) {
    return <h1>Page not found!</h1>;
  }
  const { name, location, description, mapURL, image } = place;
  return (
    <>
      <StyledWrapper>
        <StyledSection>
          <h1>{location}</h1>
          <StyledImage src={image} width={400} height={300} alt={name} />
          <h2>{name}</h2>
          <p>{description}</p>
          <StyledAnchor href={mapURL} target="_blank">
            Loaction
          </StyledAnchor>
        </StyledSection>
      </StyledWrapper>
      <StyledLinkWrapper href="/">&larr; Back</StyledLinkWrapper>
    </>
  );
}
