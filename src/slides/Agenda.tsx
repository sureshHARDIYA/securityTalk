import {  Appear } from "spectacle";
import styled from "styled-components";

import { trygTheme } from "../theme";

const Agenda = () => {
    return (
        <>
            <Appear>
                <TTable color="secondary" id="owasp">
                        <TTR>
                            <TTH><kbd>OWASP Security Category</kbd></TTH>
                            <TTH>Description/Example</TTH>
                        </TTR>
                        <TTR>
                            <TTD><kbd>A01:2021-Broken Access Control</kbd></TTD>
                            <TTD> Exposure of sensitive Information, CSRF</TTD>
                        </TTR>
                        <TTR>
                            <TTD><kbd>A01:2021-Broken Access Control</kbd></TTD>
                            <TTD> A000.1 </TTD>
                        </TTR>
                        <TTR>
                            <TTD><kbd>A01:2021-Broken Access Control</kbd></TTD>
                            <TTD> A000.1 </TTD>
                        </TTR>
                        <TTR>
                            <TTD><kbd>A01:2021-Broken Access Control</kbd></TTD>
                            <TTD> A000.1 </TTD>
                        </TTR>
                </TTable>
            </Appear>
        </>
    )
}

export default Agenda

const TTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  font-size: 1.5em;
`;

const TTD = styled.td`
    border: 1px solid #ddd;
    padding: 10px;
     color: black;
`

const TTH = styled.th`
      padding: 10px;
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: ${trygTheme.brand};
      color: white;
`;

const TTR = styled.tr`
    border: 1px solid #ddd;
    padding: 10px;
    
    &:nth-child(even){
        background-color: #f2f2f2;
    }
    &:hover {
       background-color: #ddd;
    }
`;