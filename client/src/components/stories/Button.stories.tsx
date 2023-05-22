import { Meta, StoryObj } from "@storybook/react";

import { Button, Icon } from "../Button";

const meta = {
    title: "Button",
    component: Button,
} as Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        icon: Icon.CHECK,
        onClick: () => console.log("button clicked"),
    },
};

export const EmptyList: Story = {
    args: {
        icon: Icon.PENCIL,
        onClick: () => console.log("button clicked"),
    },
};
