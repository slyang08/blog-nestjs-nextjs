import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "@storybook/test";

import { Button } from "./Button";

export const ActionsData: {
  onClick: () => void;
} = {
  onClick: fn(),
};

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "default",
    children: "Click me",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "default",
    children: "Click me",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    size: "default",
    children: "Click me",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "default",
    children: "Click me",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "default",
    children: "Click me",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    size: "default",
    children: "Click me",
  },
};
