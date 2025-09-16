import 'app/styles/index.scss';
import type { Preview } from '@storybook/react-webpack5';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => Story(),
    ],
};

export default preview;
