import React, { useState } from "react";
import styled from "styled-components";
import { Checkbox } from "./Checkbox";
import { CheckboxProps } from "@radix-ui/react-checkbox";

import { Form } from "./form";
import { Button, Icon } from "./Button";

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
                <Form handleCancel={handleShowAddTodoForm} handleSubmit={handleEdit} initialValue={label} />
            ) : (
                <Label>{label}</Label>
            )}
            <div>
                <Button icon={Icon.TRASH} onClick={() => handleRemoval()} />
                <Button icon={Icon.PENCIL} onClick={handleShowAddTodoForm} />
            </div>
        </StyledDiv>
    );
};
