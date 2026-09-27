# Advanced React Patterns

A hands-on repository for learning and practicing advanced React techniques, reusable patterns, and production-ready architectural ideas.

## Overview

This project is designed to help developers explore:

- compound components and controlled patterns
- render props and composition-based APIs
- custom hooks for reusable logic
- state management best practices
- performance optimization techniques
- concurrent React patterns such as transitions and deferred updates
- scalable front-end architecture patterns

## Tech Stack

- React 18 / 19
- TypeScript
- Vite
- Tailwind CSS
- Redux Toolkit / Zustand / Context API
- React Testing Library
- Vitest

## Repository Structure

```text
advanced-react-patterns/
├── src/
│   ├── 01-component-patterns/        # Compound components, control props, render props
│   ├── 02-performance-optimization/ # React.memo, useMemo, useCallback, virtualization
│   ├── 03-custom-hooks/              # Reusable business logic hooks
│   ├── 04-state-management/           # Context optimization, Redux Toolkit, Zustand
│   ├── 05-concurrent-react/          # useTransition, useDeferredValue, Suspense
│   └── 06-architecture/             # Feature-first design and abstraction patterns
├── public/
├── README.md
├── package.json
├── vite.config.ts
├── tsconfig.json
└── .gitignore
```

## Concepts Covered

- Component composition patterns
- State and props control patterns
- Reusable hook design
- Performance profiling and optimization
- Suspense and async rendering
- Cognitive architecture decisions for large React apps

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/advanced-react-patterns.git
cd advanced-react-patterns
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

## Example: Compound Component Pattern

```tsx
import React, { createContext, useContext, useState } from "react";

type ToggleContextType = {
  on: boolean;
  toggle: () => void;
};

const ToggleContext = createContext<ToggleContextType | undefined>(undefined);

export function Toggle({ children }: { children: React.ReactNode }) {
  const [on, setOn] = useState(false);

  const toggle = () => setOn((prev) => !prev);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

Toggle.On = function ToggleOn({ children }: { children: React.ReactNode }) {
  const context = useContext(ToggleContext);
  return context?.on ? <>{children}</> : null;
};

Toggle.Button = function ToggleButton() {
  const context = useContext(ToggleContext);
  return <button onClick={context?.toggle}>Toggle</button>;
};
```

## Contributing

Contributions are welcome. If you want to add a new pattern, improve an example, or document a better approach:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Open a pull request

## License

This project does not currently include a license file. If you plan to publish or share it publicly, consider adding an appropriate open-source license.

## Notes

This README is intentionally structured as a strong starting point for a growing React patterns repository. If you add more examples, sections, or project files later, this document can be expanded further with:

- pattern-by-pattern documentation
- screenshots and demos
- usage examples for each module
- architecture notes and trade-offs
