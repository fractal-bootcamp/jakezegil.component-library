import type { Meta, StoryObj } from '@storybook/react';

import { AccordionItem } from './accordion';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/AccordionItem',
  component: AccordionItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof AccordionItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    title: 'My First Item',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Sed ut purus eget sapien. Sed ut purus eget sapien.',
  },
};
