import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'auto',
    },
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde corrupti quia deleniti hic quas veritatis aspernatur quos odio, eius obcaecati quibusdam ipsam debitis similique iure optio maxime nulla vel ut?',
        isOpen: true,
        onClose: null,
    },
};
export const Dark: Story = {
    args: {
        children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde corrupti quia deleniti hic quas veritatis aspernatur quos odio, eius obcaecati quibusdam ipsam debitis similique iure optio maxime nulla vel ut?',
        isOpen: true,
        onClose: null,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
