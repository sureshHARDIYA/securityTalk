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
                        <TTD><kbd>A01:2021-Broken Access Control</kbd></TTD>
                        <TTD>Exposure of sensitive Information, CSRF, etc.</TTD>
                    </TTR>
                    <TTR>
                        <TTD><kbd>A02:2021 – Cryptographic Failures</kbd></TTD>
                        <TTD>Use of Hard-coded Password, Broken or Risky Crypto Algorithm, etc.</TTD>
                    </TTR>
                    <TTR>
                        <TTD><kbd>A03:2021-Injection</kbd></TTD>
                        <TTD>Cross-site Scripting, SQL Injection, etc.</TTD>
                    </TTR>
                    <TTR>
                        <TTD><kbd>A04:2021-Insecure Design</kbd></TTD>
                        <TTD>Generation of Error Message Containing Sensitive Information, Unprotected Storage of Credentials, Trust Boundary Violation, etc.</TTD>
                    </TTR>
                    <TTR>
                        <TTD><kbd>A05:2021-Security Misconfiguration</kbd></TTD>
                        <TTD> Improper Restriction, Default software, accounts and configurations, outdated software, etc.</TTD>
                    </TTR>
                    </tbody>
                </TTable>
            </Appear>
    )
}

export default OWASP

