import {Text} from "spectacle";
import { trygTheme } from "../../theme";



const TText = ({children, fontSize="24px", ...props }: any ) => {
    return (
        <Text {...props} color={trygTheme.black} fontSize={fontSize}>
            {children}
        </Text>
    )
}

export  default  TText;