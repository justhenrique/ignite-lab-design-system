import { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputRootProps } from "./TextInput";
import { Envelope } from "@phosphor-icons/react";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type your e-mail address" />,
    ],
  },
  tags: ["autodocs"],
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder="Type your e-mail address" />,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
