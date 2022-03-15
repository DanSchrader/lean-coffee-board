import { render, screen } from '@testing-library/react';
import NewEntry from './NewEntry';
import userEvent from '@testing-library/user-event';

describe('NewEntry', () => {
  it('shows a form with an input and a button', () => {
    render(<NewEntry />);

    const newEntryInput = screen.getByLabelText(/make/i);
    const NewEntryButton = screen.getByRole('button', { name: /submit/i });

    expect(NewEntryButton).toBeInTheDocument();
    expect(newEntryInput).toBeInTheDocument();
  });

  it('blabla', () => {
    const handleSubmit = jest.fn();
    render(<NewEntry onEntry={handleSubmit} />);

    const NewEntryButton = screen.getByRole('button', { name: /submit/i });
    userEvent.click(NewEntryButton);

    expect(handleSubmit).toHaveBeenCalled();
  });
});
