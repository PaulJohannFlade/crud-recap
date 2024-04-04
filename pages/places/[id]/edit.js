import { useRouter } from "next/router";
import Form from "@/Components/Form";
import { StyledLinkWrapper } from ".";

export default function EditPage({ places, onEditPlace }) {
  const router = useRouter();
  const { id } = router.query;
  const foundPlace = places.find((place) => place.id === id);

  if (!foundPlace) return <h2>Page not found</h2>;

  return (
    <>
      <StyledLinkWrapper href="/">&larr; Back</StyledLinkWrapper>
      <Form value={foundPlace} isEdit={true} onSubmit={onEditPlace} />;
    </>
  );
}
