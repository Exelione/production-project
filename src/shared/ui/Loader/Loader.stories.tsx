import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import Loader from './Loader';

const meta = {
    title: 'shared/Loader',
    component: Loader,
    parameters: {
        layout: 'auto',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator(),
    ],
};

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        RouterDecorator(),
    ],
};
