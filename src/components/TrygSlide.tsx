import {Heading, Slide} from "spectacle";

export const TrygSlide = ({ children, title } : any ) => {
    return (
        <Slide backgroundColor="white">
            {title &&
            <Heading>{title}</Heading>}
            {children}
        </Slide>
    )
}