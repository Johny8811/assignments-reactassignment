import React, { useState } from "react";
import styled from "styled-components";
import { FormProps } from "./types";
import { Input } from "./Input";

import { Button, Icon } from "../Button";

const StyledForm = styled.form`
    display: flex;
`;

export const Form = (props: FormProps): JSX.Element => {
    const [data, setData] = useState(props.initialValue);

    return (
        <StyledForm
            onSubmit={(e) => {
                e.preventDefault();
                props.handleSubmit(data);
            }}
            onReset={() => {
                props.handleCancel();
            }}
        >
            <Input initialValue={props.initialValue} handleInputChange={(value: string) => setData(value)} />
            <Button icon={Icon.CHECK} type={"submit"} />
            <Button icon={Icon.CROSS} type={"reset"} />
        </StyledForm>
    );
};
