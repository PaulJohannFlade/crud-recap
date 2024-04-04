import Form from "@/Components/Form";
import { StyledLinkWrapper } from "./places/[id]";

export default function AddPage({ onSubmit }) {
  return (
    <>
      <StyledLinkWrapper href="/">&larr; Back</StyledLinkWrapper>
      <Form onSubmit={onSubmit} />
    </>
  );
}
