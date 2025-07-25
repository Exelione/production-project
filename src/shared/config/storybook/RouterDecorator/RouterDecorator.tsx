import 'app/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'


export const RouterDecorator = () => (Story: React.FC) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
)

