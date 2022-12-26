import { Box, FlexBox, Heading, Text } from "spectacle"
import TText from "../components/Shared/TText"

const IncorrectReferrerPolicy = () => {
    return (
        <FlexBox justifyContent="flext-start" flexDirection="column">
            <Heading fontSize="30px">Incorrect Referrer Policy</Heading>
            <TText>When opening a link in a new tab with <kbd>target="_blank"</kbd>, unless otherwise specified, the target is passed some information about the originating webpage. </TText>
        </FlexBox>
    )
}

export  default  IncorrectReferrerPolicy

export const IRFRight = () => {
    return (
        <FlexBox fontSize="30px">
            <Heading fontSize="30px">Incorrect Referrer Policy</Heading>
        </FlexBox>
    )
}