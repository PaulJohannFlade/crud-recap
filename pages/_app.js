import GlobalStyle from "../styles";
import { initialPlaces } from "@/lib/db.js";
import { uid } from "uid";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [places, setPlaces] = useLocalStorageState("places", {
    defaultValue: [...initialPlaces],
  });

  const router = useRouter();

  function handleAddPlace(newPlace) {
    setPlaces([...places, { ...newPlace, id: uid() }]);
    router.push("/");
  }
  function handleEditPlace(updatedPlace) {
    setPlaces(
      places.map((place) =>
        place.id === updatedPlace.id ? updatedPlace : place
      )
    );
    router.push("/");
  }

  function handleDeletePlace(id) {
    setPlaces(places.filter((place) => place.id !== id));
    router.push("/");
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        places={places}
        onDeletePlace={handleDeletePlace}
        onEditPlace={handleEditPlace}
        onAddPlace={handleAddPlace}
      />
    </>
  );
}
