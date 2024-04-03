import PlaceCard from "@/Components/PlaceCard";
import styled from "styled-components";
import Link from "next/link";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style-type: none;
  margin: 50px 0;
  padding: 0;
`;

const StyledLink = styled(Link)`
  position: fixed;
  bottom: 20px;
  left: 20px;
  border: 2px solid black;
  border-radius: 5px;
  background-color: aqua;
  text-decoration: none;
  color: black;
  padding: 5px;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function HomePage({ places }) {
  // const [places, setPlaces] = useState(initialPlaces);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Places in Hamburg</h1>
      <StyledDiv>
        <StyledList>
          {places.map((place) => (
            <li key={place.id}>
              <Link href={`/places/${place.id}`}>
                <PlaceCard
                  name={place.name}
                  location={place.location}
                  image={place.image}
                />
              </Link>
            </li>
          ))}
        </StyledList>
        <StyledLink href="/create">+ Place</StyledLink>
      </StyledDiv>
    </>
  );
}

export { StyledDiv };
