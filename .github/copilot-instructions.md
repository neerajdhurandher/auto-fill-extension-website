# Copilot Instructions - Next.js Project

## Overview
This document outlines best practices for interacting with GitHub Copilot while developing this Next.js project.

## Code Style & Standards

### TypeScript/JavaScript
- Use TypeScript for type safety. Prefer `interface` over `type` for component props
- Use functional components and React hooks exclusively (no class components)
- Follow ESLint and Prettier configurations defined in the project
- Maintain consistent naming conventions: 
  - Components: PascalCase (e.g., `UserProfile.tsx`)
  - Utilities/hooks: camelCase (e.g., `useUser.ts`, `formatDate.ts`)
  - Constants: UPPER_SNAKE_CASE

### Next.js Best Practices
- Keep components in `app/` or `components/` directories following App Router structure
- Use Server Components by default; mark Client Components with `'use client'` directive
- Leverage Next.js built-in features:
  - `Image` component from `next/image` for optimization
  - `Link` component from `next/link` for navigation
  - Built-in font optimization with `next/font`
- Place API routes in `app/api/` following the App Router structure
- Use environment variables properly with `.env.local` and `.env.example`

### React & Component Patterns
- Keep components focused and reusable
- Extract custom hooks for shared logic (prefix with `use`)
- Use composition over inheritance
- PropTypes or TypeScript interfaces for all props
- Maintain clear separation of concerns

## Code Generation Guidelines

### What to Ask Copilot
- "Generate a React component for [description]"
- "Create a custom hook for [functionality]"
- "Write an API route for [endpoint description]"
- "Add middleware for [use case]"
- "Create a unit test for this function"

### What to Review Carefully
- Security considerations (input validation, sanitization, authentication)
- Performance implications (unnecessary re-renders, bundle size)
- Accessibility (ARIA labels, semantic HTML)
- Error handling and edge cases
- Database queries and n+1 query problems

## Testing
- Write unit tests for utility functions and hooks
- Create integration tests for API routes
- Aim for meaningful test coverage, not 100%
- Use Jest and React Testing Library as configured

## Performance Optimization
- Optimize images with Next.js `Image` component
- Lazy load components when appropriate
- Use dynamic imports for code splitting
- Monitor bundle size and Core Web Vitals
- Implement proper caching strategies

## Database & APIs
- Use ORM/query builders for database operations (if applicable)
- Always validate and sanitize user input
- Implement proper error handling with meaningful messages
- Use environment variables for sensitive configuration
- Document API endpoints clearly

## Git & Version Control
- Write clear, descriptive commit messages
- Keep commits focused on single features or fixes
- Reference issue numbers in commits when applicable
- Create feature branches for new work

## Documentation
- Maintain clear README with setup instructions
- Document complex logic with comments
- Keep environment variable examples in `.env.example`
- Update documentation when adding new features

## Common Issues to Watch For

### Copilot Weaknesses
- May generate outdated Next.js patterns (App Router vs Pages Router)
- Can suggest inefficient database queries
- May not consider performance implications
- Might miss security vulnerabilities

### Best Practices
- Always review generated code for correctness
- Ask Copilot to explain its suggestions
- Request specific patterns: "Use React hooks", "Make it a Server Component", "Add TypeScript types"
- Break down complex tasks into smaller, clearer requests

## Project Structure
```
auto-fill-extension-website/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # UI components
│   └── [feature]/        # Feature-specific components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
├── styles/               # Global styles
└── package.json
```

## Getting Started with Copilot

### For New Features
1. Describe what you want to build
2. Ask for a skeleton/structure first
3. Request implementation details
4. Ask Copilot to add tests
5. Request documentation

### Example Interaction
```
"Create a React component for a user login form with email and password fields. Include validation and TypeScript types."

Then follow up with:
"Add error handling and a loading state while submitting"
"Create tests for this component"
"Add accessibility improvements"
```

## Notes
- This is a Next.js project using the App Router
- Focus on performance and best practices
- Security is a priority for user data handling
- Keep components and functions small and focused
