import { Heading, Slide, Link } from "spectacle";
import styled from "styled-components";
import { trygTheme } from "../theme";

export const TrygSlide = ({ children, title, readMoreLink } : any ) => {
    return (
        <Slide backgroundColor="white">
            {title &&
            <Heading>
                {title}
                {readMoreLink &&
                <StyledLink href={readMoreLink}>[Read More...]</StyledLink>}
            </Heading>}
            {children}
        </Slide>
    )
}

const StyledLink = styled(Link)`
 color: ${trygTheme.brand};
 font-size: 14px;
 margin-left: 1rem;
`