import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Navbar from './Navbar';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';



const meta = {
    title: 'widget/Navbar',
    component: Navbar,
    parameters: {
        layout: 'auto',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.NORMAL),
        RouterDecorator()
    ]
};

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        RouterDecorator()
    ]
};


