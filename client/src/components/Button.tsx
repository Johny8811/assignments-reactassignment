import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";
import { PlusIcon } from "@radix-ui/react-icons";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";

export enum Icon {
    CHECK,
    CROSS,
    PLUS,
    PENCIL,
    TRASH,
}

const IconComponent = {
    [Icon.CHECK]: <CheckIcon />,
    [Icon.CROSS]: <Cross1Icon />,
    [Icon.PLUS]: <PlusIcon />,
    [Icon.PENCIL]: <Pencil1Icon />,
    [Icon.TRASH]: <TrashIcon />,
};

type Props = {
    icon: Icon;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button`
    all: unset;
    border-radius: 50%;
    border: 1px solid;
    border-color: ${(props) => props.theme.colors.olive9};
    background-color: ${(props) => props.theme.colors.grass9};
    color: #fff;
    width: 25px;
    height: 25px;
    text-align: center;
`;

export const Button: React.FC<Props> = ({ icon, type, onClick }) => {
    return (
        <StyledButton onClick={onClick} type={type}>
            {IconComponent[icon]}
        </StyledButton>
    );
};
