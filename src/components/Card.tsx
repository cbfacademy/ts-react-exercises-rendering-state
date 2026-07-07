import type { ReactNode } from 'react';

// The <Card> from Session 5's guided exercise, carried forward as
// infrastructure so today's exercise can focus on lists, keys, and state.
// Some tasks need more from it (a selected look, a click handler): extending
// this component's props is part of the exercise, not cheating.

interface CardProps {
    title: string;
    subtitle?: string;
    children: ReactNode;
}

function Card({ title, subtitle, children }: CardProps) {
    return (
        <div className="card">
            <h2>{title}</h2>
            {subtitle ? <p>{subtitle}</p> : null}
            {children}
        </div>
    );
}

export default Card;
