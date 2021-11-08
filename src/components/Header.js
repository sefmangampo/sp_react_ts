
import { StyledHeader, Container, Nav, Logo, Button } from "./styles"

export default function Header() {
    return (<StyledHeader>
        <Container>
            <Nav>
                <Logo src="./images/logo.svg" alt="" />
                <Button>Try it Free</Button>
            </Nav>
        </Container>
    </StyledHeader>);
}
