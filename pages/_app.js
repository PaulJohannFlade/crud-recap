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

  function handleAddPlace(event) {
    event.preventDefault();

    const form = new FormData(event.target);
    const data = Object.fromEntries(form);

    setPlaces([...places, { ...data, id: uid() }]);

    router.push("/");
  }
  function handleEditPlace(data) {
    console.log("handleEditPlace");
    setPlaces(places.map((place) => (place.id === data.id ? data : place)));
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
      />
    </>
  );
}
