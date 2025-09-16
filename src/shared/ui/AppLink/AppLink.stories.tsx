import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import AppLink, { AppLinkTheme } from './AppLink';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        layout: 'auto',
    },
    args: {
        to: '/',
    },
    tags: ['autodocs'],

} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [
        RouterDecorator(),
    ],
};

export const Secondary: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [
        RouterDecorator(),
    ],
};
export const Red: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.RED,
    },
    decorators: [
        RouterDecorator(),
    ],
};

export const PrimaryDark: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [
        RouterDecorator(),
        ThemeDecorator(Theme.DARK),
    ],
};

export const SecondaryDark: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [
        RouterDecorator(),
        ThemeDecorator(Theme.DARK),
    ],
};
export const RedDark: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.RED,
    },
    decorators: [
        RouterDecorator(),
        ThemeDecorator(Theme.DARK),
    ],
};
