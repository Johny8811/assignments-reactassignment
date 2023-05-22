import React from "react";
import styled from "styled-components";

const StyledDiv = styled.footer`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid;
    border-color: ${(props) => props.theme.colors.olive6};
`;

export type FooterProps = {
    todoItems?: number;
    doneItems?: number;
};
export const Footer: React.FC<FooterProps> = ({ todoItems, doneItems }) => (
    <StyledDiv>
        <span>Todo: {todoItems || "0"}</span>
        <span>Done: {doneItems || "0"}</span>
    </StyledDiv>
);
