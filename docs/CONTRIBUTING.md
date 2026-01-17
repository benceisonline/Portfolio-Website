# Contributing Guide

## Code Style

This project uses Prettier for code formatting. Format your code before committing:

```bash
npx prettier --write .
```

## Development Workflow

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make changes and commit: `git commit -m "Add your feature"`
3. Push to your branch: `git push origin feature/your-feature`
4. Create a Pull Request

## Component Development

When adding new components:

1. Create the component in `/app/components/`
2. Export as default
3. Use TypeScript/JSDoc comments for props
4. Follow the existing component structure
5. Use Tailwind CSS for styling

### Component Template

```javascript
export default function ComponentName({ prop1, prop2 }) {
  return <div>{/* Component JSX */}</div>;
}
```

## Building & Testing

```bash
# Development
npm run dev

# Build
npm run build

# Lint
npm run lint
```

## Deployment

```bash
npm run build
firebase deploy
```

See [FIREBASE_SETUP.md](FIREBASE_SETUP.md) for Firebase configuration details.

## Project Structure

- `/app/components/` - Reusable React components
- `/app/` - Next.js app directory
- `/public/` - Static assets
- `/docs/` - Documentation

## Questions?

Check existing documentation in `/docs/` folder or review the code comments.
