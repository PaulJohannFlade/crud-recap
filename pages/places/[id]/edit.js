import { useRouter } from "next/router";
import Form from "@/Components/Form";

export default function EditPage({ places, onEditPlace }) {
  const router = useRouter();
  const { isReady } = router;
  console.log(router);
  console.log(places);
  const { id } = router.query;
  const foundPlace = places.find((place) => place.id === id);

  if (!foundPlace) return <h2>Page not found</h2>;

  return <Form value={foundPlace} isEdit={true} onSubmit={onEditPlace} />;
  //<h1>Test Edit</h1>;
}
