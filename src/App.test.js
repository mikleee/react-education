import {render, screen} from '@testing-library/react';
import {ChatMessageFormComponent} from './components/chat-message-form/chat.message.form.component';

test('renders learn react link', () => {
    render(<ChatMessageFormComponent/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
