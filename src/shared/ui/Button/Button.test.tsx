import { render, screen } from '@testing-library/react';
import Button, { ThemeButton } from './Button';

describe('button', () => {
    test('render button', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('render button with theme', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
