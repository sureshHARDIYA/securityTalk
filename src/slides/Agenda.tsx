import { Appear } from "spectacle";

import { TTable, TTR, TTD } from "../components/Shared/Table";

const Agenda = () => {
    return (
        <Appear>
            <TTable color="secondary" id="owasp">
                <tbody>
                <TTR>
                    <TTD><kbd>Context</kbd></TTD>
                    <TTD> Why am I talking?</TTD>
                </TTR>
                <TTR>
                    <TTD><kbd>XSS</kbd></TTD>
                    <TTD>Types, URL-Based injection, DOM injection, JSON injection </TTD>
                </TTR>
                <TTR>
                    <TTD><kbd>Prototype </kbd> pollution</TTD>
                    <TTD>Prototype  inheritance, Functional inheritance</TTD>
                </TTR>
                <TTR>
                    <TTD>Unchecked <kbd>origin</kbd> in <kbd>postMessage</kbd></TTD>
                    <TTD>The <kbd>window.postMessage()</kbd> method safely enables cross-origin communication between <kbd>Window</kbd> objects.</TTD>
                </TTR>
                <TTR>
                    <TTD>Open Redirect</TTD>
                    <TTD>Incorrect Referrer Policy</TTD>
                </TTR>
                <TTR>
                    <TTD>Security Headers</TTD>
                    <TTD>UI Redressing</TTD>
                </TTR>
                <TTR>
                    <TTD><kbd>NodeJS</kbd></TTD>
                    <TTD>Broken Authorization, Broken Cryptography, SQL-injection, Server-side Request Forgery (SSRF)</TTD>
                </TTR>
                <TTR>
                    <TTD><kbd>and many more ...</kbd></TTD>
                    <TTD>Follow the Rabbit</TTD>
                </TTR>
                </tbody>
            </TTable>
        </Appear>
    )
}

export default Agenda

