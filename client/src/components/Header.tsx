import React, { useState } from "react";
import styled from "styled-components";
import { PlusIcon } from "@radix-ui/react-icons";

import { Form } from "./form";

export type HeaderProps = {
    children: React.ReactNode;
    handleAddItem: (value: string) => void;
};

const StyledDiv = styled.header`
    display: flex;
    justify-content: space-between;

    button {
        all: unset;
        border-radius: 50%;
        border: 1px solid;
        border-color: ${(props) => props.theme.colors.olive9};
        background-color: ${(props) => props.theme.colors.grass9};
        color: #fff;
        width: 25px;
        height: 25px;
        text-align: center;
    }
`;

export const Header: React.FC<HeaderProps> = ({ handleAddItem, children }) => {
    const [formShown, setFormShown] = useState<boolean>(false);

    const handleShowAddTodoForm = () => setFormShown((v) => !v);

    return (
        <StyledDiv>
            <h1>{children}</h1>
            {formShown ? (
                <Form handleCancel={handleShowAddTodoForm} handleSubmit={handleAddItem} initialValue="" />
            ) : (
                <button onClick={handleShowAddTodoForm}>
                    <PlusIcon />
                </button>
            )}
        </StyledDiv>
    );
};
