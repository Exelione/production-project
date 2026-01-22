import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';
import { Input } from './Input';

const meta = {
    title: 'shared/Input',
    component: Input,
    parameters: {
        layout: 'auto',
    },
    tags: ['autodocs'],
    args: {
        onChange: fn(),
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        placeholder: 'Введите текст...',
        value: 'Пример текста',
    },
};
