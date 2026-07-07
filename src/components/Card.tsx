import type { ReactNode } from 'react';

// Session 6 reference solution: the Session 5 Card extended with an optional
// `selected` look and an `onClick` handler, as the exercise invites.

interface CardProps {
    title: string;
    subtitle?: string;
    children: ReactNode;
    selected?: boolean;
    onClick?: () => void;
}

function Card({
    title,
    subtitle,
    children,
    selected = false,
    onClick,
}: CardProps) {
    return (
        <div className={selected ? 'card selected' : 'card'} onClick={onClick}>
            <h2>{title}</h2>
            {subtitle ? <p>{subtitle}</p> : null}
            {children}
        </div>
    );
}

export default Card;
