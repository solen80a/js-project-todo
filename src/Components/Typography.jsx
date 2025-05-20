import styled from "styled-components";
import { Media } from "./Media";

export const H1 = styled.h1`

`
export const H2 = styled.h2`

`

export const Body = styled.p`
font-size: 16px;

@media ${Media.desktop} {
    font-size: 24px;
  }
`


