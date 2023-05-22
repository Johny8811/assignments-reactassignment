import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useLoading } from "../integrations/fetch/LoadingProvider";
import { LOADING_ENUM } from "../queries/enpoints";
import { Form } from "./form";
import { Button, Icon } from "./Button";

export type HeaderProps = {
    children: React.ReactNode;
    handleAddItem: (value: string) => void;
};

const StyledDiv = styled.header`
    display: flex;
    justify-content: space-between;
`;

export const Header: React.FC<HeaderProps> = ({ handleAddItem, children }) => {
    const { loading } = useLoading();
    const [formShown, setFormShown] = useState<boolean>(false);

    const handleShowAddTodoForm = () => setFormShown((v) => !v);

    useEffect(() => {
        if (formShown && !loading[LOADING_ENUM.ADD_TODO_ITEM]) {
            setFormShown(false);
        }
    }, [loading]);

    return (
        <StyledDiv>
            <h1>{children}</h1>
            {formShown ? (
                <Form handleCancel={handleShowAddTodoForm} handleSubmit={handleAddItem} initialValue="" />
            ) : (
                <Button icon={Icon.PLUS} onClick={handleShowAddTodoForm} />
            )}
        </StyledDiv>
    );
};
