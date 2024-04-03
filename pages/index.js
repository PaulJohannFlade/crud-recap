import { initialPlaces } from "@/lib/db.js";
import { useState } from "react";
import PlaceCard from "@/Components/PlaceCard";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style-type: none;
`;

export default function HomePage() {
  const [places, setPlaces] = useState(initialPlaces);
  return (
    <div>
      <StyledList>
        {places.map((place) => (
          <li key={place.id}>
            <PlaceCard
              name={place.name}
              location={place.location}
              image={place.image}
            />
          </li>
        ))}
      </StyledList>
    </div>
  );
}
