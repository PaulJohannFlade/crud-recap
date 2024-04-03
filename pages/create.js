import Form from "@/Components/Form";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  margin-left: 50px;
`;

export default function AddPage({ onSubmit }) {
  return (
    <>
      <Form onSubmit={onSubmit} />
      <StyledLink href="/">&larr; Back</StyledLink>
    </>
  );
}
