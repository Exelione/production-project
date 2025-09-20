import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
    test('render Sidebar', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('test open', () => {
        componentRender(<Sidebar />);
        const openBtn = screen.getByTestId('openBtn');
        fireEvent.click(openBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
