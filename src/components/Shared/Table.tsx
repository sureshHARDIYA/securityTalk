import styled from "styled-components";
import { trygTheme } from "../../theme";

export const TTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  font-size: 1.5em;
`;

export const TTD = styled.td`
    border: 1px solid #ddd;
    padding: 10px;
     color: black;
`

export const TTH = styled.th`
      padding: 10px;
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: ${trygTheme.brand};
      color: white;
`;

export const TTR = styled.tr`
    border: 1px solid #ddd;
    padding: 10px;
    
    &:nth-child(even){
        background-color: #f2f2f2;
    }
    &:hover {
       background-color: #ddd;
    }
`;