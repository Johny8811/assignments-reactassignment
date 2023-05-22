import React, { useState } from "react";
import styled from "styled-components";
import { Checkbox } from "./Checkbox";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";

import { Form } from "./form";

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;

    div {
        visibility: hidden;
        margin-left: auto;

        button {
            margin-left: 5px;
        }
    }

    :hover {
        div {
            visibility: visible;
        }
    }
`;

const Label = styled.label`
    margin-left: 15px;
`;

export type LiteItemProp = CheckboxProps & {
    label: string;
    handleEdit: () => void;
    handleRemoval: () => void;
};

export const ListItem: React.FC<LiteItemProp> = ({ label, handleRemoval, handleEdit, ...checkboxProps }) => {
    const [formShown, setFormShown] = useState<boolean>(false);

    const handleShowAddTodoForm = () => setFormShown((v) => !v);

    return (
        <StyledDiv>
            <Checkbox {...checkboxProps} />
            {formShown ? (
                <Form handleCancel={handleShowAddTodoForm} handleSubmit={() => {}} initialValue={label} />
            ) : (
                <Label>{label}</Label>
            )}
            <div>
                <button onClick={() => handleRemoval()}>
                    <TrashIcon />
                </button>
                <button onClick={handleShowAddTodoForm}>
                    <Pencil1Icon />
                </button>
            </div>
        </StyledDiv>
    );
};
