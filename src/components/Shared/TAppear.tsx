import {Appear} from "spectacle";
import { trygTheme } from "../../theme";

const activeStyle = {
    opacity: 1,
    color: trygTheme.black
}

const inactiveStyle = {
    opacity: 0.5,
    color: trygTheme.grey60
}

const TAppear = ({children, ...props }: any ) => {
    return (
        <Appear {...props} activeStyle={activeStyle} inactiveStyle={inactiveStyle}>
            {children}
        </Appear>
    )
}

export  default  TAppear;