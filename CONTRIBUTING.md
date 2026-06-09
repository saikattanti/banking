# Contributing to Horizon Banking

Thank you for your interest in contributing.

## Before You Start

- Read the [Code of Conduct](CODE_OF_CONDUCT.md).
- Search existing issues and pull requests before opening a new one.
- For security vulnerabilities, use the process in [SECURITY.md](SECURITY.md) instead of public issues.

## Development Setup

1. Fork the repository.
2. Clone your fork.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create `.env.local` with required variables (see [README.md](README.md)).
5. Start development server:
   ```bash
   npm run dev
   ```

## Contribution Workflow

1. Create a focused branch for your change.
2. Make small, clear commits.
3. Run checks locally:
   ```bash
   npm run lint
   npm run build
   ```
4. Open a pull request using the provided template.

## Pull Request Guidelines

- Keep scope focused and avoid unrelated changes.
- Update docs when behavior/configuration changes.
- Include a clear summary and validation steps.
- Link related issues (e.g., `Closes #123`).

## Commit Message Guidance

Use concise, descriptive commit messages, such as:

- `feat: add transfer status filter`
- `fix: handle empty account state`
- `docs: update setup instructions`

## Questions

If you need clarification, open a discussion or issue with enough context for maintainers to reproduce the problem.
