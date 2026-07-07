# Session 6: Rendering and state

**What you are practising:** rendering a list with `map` and correct keys, holding state with `useState`, and updating it immutably.

## Setup

Accept the assignment, clone **your** repository, then install once:

```bash
npm install
```

## Run

```bash
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`). `npm run typecheck` runs the compiler on its own.

## What is in the starter

- `src/data.ts`: the ten destinations (`id`, `name`, `imageUrl`). No phases yet; those arrive in Session 7 with the API.
- `src/components/Card.tsx`: the `<Card>` from Session 5, carried forward so you can focus on lists and state.
- `public/destinations/`: placeholder images for all ten destinations.
- `src/index.css`: the Session 5 baseline plus a `.grid` layout, a `.card.selected` state, and a `.done` strikethrough.

## Your task

1. Render the list of destinations with correct keys.
2. Track a `selectedId: string | null` in state.
3. Clicking a card sets the selected id. Clicking the selected card again clears it.
4. The selected card renders with a visible selected style (conditional rendering; the `.card.selected` class is ready).
5. Show a header that reads `No destination selected` or `You picked {name}` depending on state.

Extending `<Card>`'s props (a `selected` look, an `onClick` handler) is part of the exercise, not cheating.

## Stretch goals

- Add a "clear selection" button that renders only when something is selected.
- Sort the destinations by name with `.sort()`. Why does sorting in place break things here? Fix it with `[...destinations].sort()`.
- Add a count of unselected destinations.

## Done when

All ten destinations render with no key warning in the browser console, selection toggles on and off visibly, the header follows the selection, `npm run typecheck` passes, and your work is committed and pushed.

## How your work is graded

Every push runs two GitHub Actions checks:

- **Type check** — runs `tsc -b` on your project.
- **Autograding** — renders your `<App />` with React Testing Library and checks that all ten destinations render, the header starts at "No destination selected", clicking a card selects it (header updates and the card gets the `.selected` style), and clicking it again clears the selection — plus an automated code-quality review. Keep the header wording and the destination names from `src/data.ts` intact so the grader can find them.
