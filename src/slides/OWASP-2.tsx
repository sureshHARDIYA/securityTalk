import {  Appear } from "spectacle";
import { TTable, TTR, TTH, TTD } from "../components/Shared/Table";

const OWASP = () => {
    return (
        <Appear>
            <TTable color="secondary" id="owasp">
                <tbody>
                <TTR>
                    <TTH><kbd>OWASP Security Category</kbd></TTH>
                    <TTH>Description/Example</TTH>
                </TTR>
                <TTR>
                    <TTD><kbd>A06:2021-Vulnerable and Outdated Components</kbd></TTD>
                    <TTD>Unmaintained third-party components, outdated utility components, etc.</TTD>
                </TTR>
                <TTR>
                    <TTD><kbd>A07:2021-Identification and Authentication Failures</kbd></TTD>
                    <TTD>Improper Validation of Certificate with Host Mismatch, Improper Authentication, Session hijacking, etc.</TTD>
                </TTR>
                <TTR>
                    <TTD><kbd>A08:2021-Software and Data Integrity Failures</kbd></TTD>
                    <TTD>Inclusion of Functionality from Untrusted Control Sphere, Download of Code Without Integrity Check, Deserialization of Untrusted Data, etc.</TTD>
                </TTR>
                <TTR>
                    <TTD><kbd>A09:2021-Security Logging and Monitoring Failures</kbd></TTD>
                    <TTD>Exposing security-relevant information on log, insertion of sensitive data on log, etc.</TTD>
                </TTR>
                <TTR>
                    <TTD><kbd>A10:2021-Server-Side Request Forgery</kbd></TTD>
                    <TTD>Fetching/Processing a remote resource without validating the user request. </TTD>
                </TTR>
                </tbody>
            </TTable>
        </Appear>
    )
}

export default OWASP

