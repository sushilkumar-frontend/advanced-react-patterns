# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

````js
export default defineConfig([
  # Reusable Create/Edit Form

  A React and TypeScript example of using one form component for both creating and editing a user. The form combines schema validation, reusable UI controls, and conditional submission behavior.

  ## Run Locally

  ```bash
  npm install
  npm run dev
````

Other available scripts:

```bash
npm run lint
npm run build
npm run preview
```

## Concepts Demonstrated

### One Form, Two Modes

`src/components/UserForm.tsx` accepts an optional `user` prop:

- With a `user`, it initializes the form with that user's data and sends a `PATCH` request on submit.
- Without a `user`, it starts with empty fields and sends a `POST` request.

This keeps create and edit behavior in one component instead of duplicating the field layout and validation logic. `src/App.tsx` currently passes sample user data, so it demonstrates edit mode. Remove the `user` prop there to try create mode.

### Form State and Validation

React Hook Form manages field state and submission. The Zod schema in `UserForm.tsx` defines the expected form shape and validates the email and role. `z.infer` derives the TypeScript `FormValues` type from that schema, reducing the chance that runtime validation and compile-time types drift apart. The Zod resolver connects the schema to React Hook Form.

Native text inputs use `register`. The date picker and select are custom controls, so the form updates them using `setValue` when their values change.

### Composable UI Controls

The controls in `src/components/ui/` wrap lower-level elements and provide reusable styling and behavior. The button supports variants and an `asChild` option through Radix Slot. The popover, calendar, and date picker are composed together to make the birthday control.

`src/lib/utils.ts` exports `cn`, which combines conditional class names with `tailwind-merge` to resolve conflicting Tailwind classes. The `@/` import prefix maps to `src/` in the Vite and TypeScript configuration.

### Demo API

Form submissions use JSONPlaceholder endpoints (`/posts` and `/posts/:id`) as stand-ins. They do not create or update persistent users. Replace these URLs and add response/error handling when connecting the form to a real backend.

## Main Files

- `src/App.tsx`: provides sample data and renders the form.
- `src/components/UserForm.tsx`: shared create/edit form, schema, and submit behavior.
- `src/types/User.ts`: user data type.
- `src/components/ui/`: reusable form controls.
- `src/lib/utils.ts`: class-name helper.

## Build Note

The current `react-day-picker` version is newer than the API used by `calendar.tsx` and `datepicker.tsx`. As a result, `npm run build` currently reports TypeScript errors for calendar class names, icon components, and `initialFocus`. The calendar API needs a compatibility update for a clean production build.
