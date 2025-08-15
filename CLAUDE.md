# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run build:check` - Type check and build
- `npm run preview` - Preview production build locally

### Quality Assurance
- `npm run lint` - Run ESLint with React hooks and TypeScript rules
- `npm run type-check` - Run TypeScript compiler without emitting files

### Legacy Scripts
- `npm start` - Simple Python HTTP server (port 8000)
- `npm run serve` - Alternative local server using npx serve

## Architecture Overview

This is a modern React portfolio website built with:

### Tech Stack
- **React 18** with TypeScript and Vite
- **Tailwind CSS** for styling with dark/light theme support
- **EmailJS** for contact form functionality
- **Lucide React** for icons

### Project Structure
```
src/
├── components/          # React components (navigation, sections, UI)
├── hooks/              # Custom React hooks for state and effects
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── assets/             # Static assets (images, etc.)
```

### Key Architecture Patterns

#### Theme System
- Uses `useTheme` hook for light/dark mode switching
- Combines Tailwind's dark mode with custom CSS variables
- Automatically detects system preference and listens for changes
- Applied via `data-theme` attribute and Tailwind `dark:` classes

#### Section Management
- `useActiveSection` hook tracks current viewport section for navigation highlighting
- `useScrollAnimation` and `useTimelineAnimation` hooks handle scroll-based animations
- `AnimatedSection` component wrapper provides consistent fade-in animations

#### Component Organization
- Functional components with TypeScript interfaces
- Custom hooks for reusable logic (theme, animations, scroll tracking)
- Utility functions separated into `/utils` directory
- Type definitions centralized in `/types/index.ts`

### State Management
No external state management library - uses React's built-in state with custom hooks:
- Theme state managed by `useTheme`
- Active section tracking via `useActiveSection`
- Component-level state for forms and UI interactions

### Configuration Files
- **Vite**: Configured for React with base path `/ivan-krupik-portfolio/`
- **TypeScript**: Project references setup with separate app and node configs
- **ESLint**: Configured for TypeScript and React with hooks validation
- **Tailwind**: Standard configuration with PostCSS

### Deployment
- Automated deployment to GitHub Pages via GitHub Actions
- Builds on push to `main` branch
- Requires EmailJS environment variables set as GitHub secrets
- Static site deployment from `dist/` directory

## Development Guidelines

### Component Patterns
- Use functional components with TypeScript
- Implement proper prop interfaces in `/types/index.ts`
- Follow existing naming conventions (PascalCase for components)
- Use custom hooks for complex state logic

### Styling Approach
- Primary styling via Tailwind CSS classes
- Dark mode support using Tailwind's `dark:` prefix
- Responsive design with mobile-first approach
- Custom CSS variables for theme-specific values

### Animation System
- Scroll-based animations using Intersection Observer
- Consistent fade-in effects via `AnimatedSection` wrapper
- Timeline animations for experience section
- Theme transitions handled by CSS transitions

### Type Safety
- All components properly typed with interfaces
- Form data and state use defined TypeScript types
- React component props explicitly typed
- Utility functions have proper return type annotations