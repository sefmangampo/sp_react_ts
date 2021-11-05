import React from "react";
import { StyledHeader } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";

export default function Header() {
    return (<StyledHeader>
        <Container>
            <h1>Huddle</h1>
        </Container>
    </StyledHeader>);
}
