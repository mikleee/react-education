import {render, screen} from '@testing-library/react';
import {ChatComponent} from './components/main/chat.component';

test('renders learn react link', () => {
    render(<ChatComponent/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
