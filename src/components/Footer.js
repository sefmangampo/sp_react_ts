import { Container, Flex, StyledFooter } from "./styles"
import { SocialIcons } from "."

export default function Footer() {
    return (
        <StyledFooter>
            <Container>
                <img src="./images/logo_white.svg" alt="" />

                <Flex>
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis hic nemo cum voluptate modi quaerat
                        </li>
                        <li>+1-543-123-4568</li>
                        <li>example@huddle.com</li>
                    </ul>
                    <ul>
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>FAQ</li>
                    </ul>

                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>

                    <SocialIcons />


                </Flex>
                <p>&copy; 2021 Huddle. All rights reserved</p>
            </Container>
        </StyledFooter>
    )
}
