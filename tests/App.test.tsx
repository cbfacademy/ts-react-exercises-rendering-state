import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../src/App';

// Autograding for Session 6: Rendering and state.
// Tests render <App /> and drive it the way a user would (clicking cards),
// asserting on observable output. They map to the tasks:
//   1. render all ten destinations (list rendering)
//   2. default header "No destination selected"          (state + header)
//   3. clicking a card selects it: header + .selected     (state, click, style)
//   4. clicking the selected card again clears it          (toggle)
//
// The starter renders a single card and holds no state, so every test fails
// until the tasks are done.

function cardByName(container: HTMLElement, name: string): HTMLElement {
    const heading = screen.getByRole('heading', { level: 2, name });
    const card = heading.closest('.card');
    if (!(card instanceof HTMLElement)) {
        throw new Error(`No .card element found for "${name}"`);
    }
    return card;
}

describe('session 6: selectable destinations', () => {
    it('renders all ten destinations', () => {
        const { container } = render(<App />);
        expect(container.querySelectorAll('.card')).toHaveLength(10);
        expect(
            screen.getByRole('heading', { level: 2, name: 'Kyoto, Japan' }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole('heading', { level: 2, name: 'Tromso, Norway' }),
        ).toBeInTheDocument();
    });

    it('starts with no destination selected', () => {
        render(<App />);
        expect(screen.getByText('No destination selected')).toBeInTheDocument();
    });

    it('selects a destination when its card is clicked', async () => {
        const user = userEvent.setup();
        const { container } = render(<App />);

        await user.click(cardByName(container, 'Kyoto, Japan'));

        expect(screen.getByText('You picked Kyoto, Japan')).toBeInTheDocument();
        expect(cardByName(container, 'Kyoto, Japan')).toHaveClass('selected');
        expect(container.querySelectorAll('.card.selected')).toHaveLength(1);
    });

    it('clears the selection when the selected card is clicked again', async () => {
        const user = userEvent.setup();
        const { container } = render(<App />);

        await user.click(cardByName(container, 'Kyoto, Japan'));
        await user.click(cardByName(container, 'Kyoto, Japan'));

        expect(screen.getByText('No destination selected')).toBeInTheDocument();
        expect(cardByName(container, 'Kyoto, Japan')).not.toHaveClass(
            'selected',
        );
    });
});
