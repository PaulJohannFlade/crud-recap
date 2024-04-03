import GlobalStyle from "../styles";
import { useState } from "react";
import { initialPlaces } from "@/lib/db.js";
import { uid } from "uid";
import Router, { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [places, setPlaces] = useState(initialPlaces);

  const router = useRouter();

  function handleAddPlace(event) {
    event.preventDefault();

    const form = new FormData(event.target);
    const data = Object.fromEntries(form);

    console.log(data);

    setPlaces([...places, { ...data, id: uid() }]);

    router.push("/");
  }

  console.log(places);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} onSubmit={handleAddPlace} places={places} />
    </>
  );
}
