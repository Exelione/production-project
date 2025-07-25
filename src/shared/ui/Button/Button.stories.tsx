import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';
import { Button, ThemeButton } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';



const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'auto',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Text',
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE
  },
  decorators: [ThemeDecorator(Theme.NORMAL)]
};

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR
  },
  decorators: [ThemeDecorator(Theme.NORMAL)]
};

