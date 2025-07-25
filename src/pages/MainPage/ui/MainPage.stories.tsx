import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';





const meta = {
  title: 'pages/MainPage',
  component: MainPage,
  parameters: {
    layout: 'auto',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
};


export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.NORMAL)]
};

