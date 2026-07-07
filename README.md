# React Exercise Template

This template repository is used to create autograded **React (TypeScript + Vite)** exercise repositories for CBF Academy bootcamps. It includes a GitHub Classroom autograding workflow that scores student submissions on **functionality** and **code quality** by executing component tests (Vitest + React Testing Library) and submitting the code changes for review by an automated agent.

Use this template for React exercises (`ts-react-exercises-<name>`). For plain-TypeScript exercises, use the `ts-exercises-template` instead.

## What's in here

| Path                                          | Purpose                                                                      |
| --------------------------------------------- | ---------------------------------------------------------------------------- |
| `src/`                                        | The Vite React app. Each instance replaces this with the session starter.    |
| `tests/`                                      | Where the autograding tests live (`<name>.test.tsx`), run under jsdom + RTL. |
| `vite.config.ts`                              | Vite + Vitest config (jsdom, setup file, JUnit output to `test-results/`).   |
| `vitest.setup.ts`                             | Registers jest-dom matchers and unmounts the tree after each test.           |
| `.github/workflows/classroom-autograding.yml` | Calls the shared reusable workflow with `toolchain: node`.                   |
| `.github/workflows/typecheck.yml`             | Fast `tsc -b` type-check on every push.                                      |

The React sessions use the same reusable `node` toolchain as the plain-TypeScript ones: the grader runs `npm ci` + `npm test`, and Vitest writes `test-results/junit.xml`.

## Usage

1. Create a new repository from this template:
    - **Template:** select this repository
    - **Name:** use the `ts-react-exercises-<exercise name>` convention, e.g. `ts-react-exercises-rendering-state`
    - **Visibility:** Public (needed for Classroom)
2. After initialising, open the repo settings and mark it as a **template** so it can be used for assignments.
3. Add the exercise on the `main` branch:
    - Replace `src/` with the session starter (components, `data.ts`, etc.).
    - Add the autograding tests in `tests/` (e.g. `tests/App.test.tsx`), importing components from `../src`.
    - Replace this README with the exercise brief for students.
    - Update `name` in `package.json`.
    - Sessions that need a mock API (json-server) add `json-server` and its `api` / `reset-db` scripts, plus `db.json` — mirror the existing session 7/8 starters. Have the autograding tests mock `fetch` rather than depend on a running API.
4. Create a `solutions` branch and commit a reference solution to it. Confirm `npm test` is green against it.
5. Push all branches.

## Writing autograding tests for React

- Render with `@testing-library/react` and assert on what the user sees — roles, text, labels — not implementation details. This survives reasonable variation in how students build their components.
- Import `{ describe, it, expect }` from `vitest` (globals are off). jest-dom matchers and per-test cleanup are wired up in `vitest.setup.ts`.
- For interaction, use `@testing-library/user-event`.
- For data-fetching sessions, stub `globalThis.fetch` (e.g. `vi.fn()`), so tests never need the json-server API running.

## Testing (Classroom assignment settings)

Create a new Classroom assignment using the exercise repo as the starter template, with:

- **Repository visibility:** Private
- **Grant students admin access to their repository:** Disabled
- **Copy the default branch only:** Enabled (keeps the `solutions` branch private)
- **Supported editor:** Don't use an online IDE
- **Protected file paths:** `.github/**/*`, `**/tests/**/*` — so students cannot edit the workflows or the autograding tests
- **Enable feedback pull requests:** Enabled

Then accept the assignment from a test account, commit and push, and review the Actions output and the Feedback PR comment to confirm everything works.

## How grading works

- **Functionality** comes from the Vitest + RTL suite: the reusable workflow runs `npm ci && npm test`, parses `test-results/junit.xml`, and scales the pass rate to 5 points.
- **Code quality** comes from the automated agent review of the submission, scaled to 5 points.

> Because React tasks are structural (build a component, render a list, add a variant), write each autograding assertion against **observable output** so the functionality score reflects real progress. The `typecheck.yml` check and the agent review cover type-correctness and code quality separately.
