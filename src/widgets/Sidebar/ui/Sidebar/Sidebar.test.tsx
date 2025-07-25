import { fireEvent, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";
import {
   renderWithTranslation
} from "shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe('Sidebar', () => {
   test('render Sidebar', () => {
      renderWithTranslation(<Sidebar />);
      expect(screen.getByTestId('sidebar')).toBeInTheDocument();
   });
   test('test open', () => {
      renderWithTranslation(<Sidebar />);
      const openBtn = screen.getByTestId('openBtn');
      fireEvent.click(openBtn);
      expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
   }
   )
});
