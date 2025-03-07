## Why This Starter Kit?

One of the most common tasks in a frontend interview is a take-home assignment. Evaluators typically expect candidates to deliver a production-ready application, which means setting up project structure, tools, and dependencies from scratch. This repetitive setup process consumes valuable time that could be better spent on actually building the application.

With this starter kit, candidates can skip the tedious setup and focus on solving the core problem. It provides a well-structured foundation with essential tools and best practices already configured.

As a bonus, the README also includes explanations for the choice of tools and dependencies, helping you understand the rationale behind the setup. 🚀

---

## 🚁 Project Overview

The application was scaffolded using **Vite** with development tasks reflecting real-world project practices—from setting up linting rules to structuring project folders and building the app. Establishing tools like Lint, Prettier, and import sorting early avoids future headaches and enhances the overall developer experience. Enforcing editor rules via a shared `settings.json` ensures consistent code formatting across the team while allowing flexibility for personal settings.

---

## 🛠 Tech Stacks & Tools

### Development & Tooling

<span><img src="https://vitejs.dev/logo.svg" alt="Vite" width="24" height="24" style="vertical-align:middle; margin-right: 4px;"> **Vite**</span>  
<span><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/324px-ESLint_logo.svg.png" alt="ESLint" width="26" height="24" style="vertical-align:middle; margin-right: 4px;"> **ESLint Rules**</span>  
<span><img src="https://prettier.io/icon.png" alt="Prettier" width="24" height="24" style="vertical-align:middle; margin-right: 4px;"> **Prettier**</span>  
<span>🔄 &nbsp; **Husky**</span>  
<span>💩 &nbsp; **Lint Staged**</span>

### Styling & UI Components

<span><img src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg" alt="Tailwind CSS" width="24" height="24" style="vertical-align:middle; margin-right: 4px;"> **Tailwind CSS**</span>  
<span><img src="https://avatars.githubusercontent.com/u/139895814?s=48&v=4" alt="shadcn/ui" width="24" height="24" style="vertical-align:middle; margin-right: 4px;"> **shadcn/ui**</span>

### Testing

<span><img src="https://vitest.dev/logo.svg" alt="Vitest" width="24" height="24" style="vertical-align:middle; margin-right: 4px;"> **Vitest**</span>  
<span><img src="https://testing-library.com/img/octopus-64x64.png" alt="React Testing Library" width="24" height="24" style="vertical-align:middle; margin-right: 4px;"> **React Testing Library**</span>  
<span><img src="https://playwright.dev/img/playwright-logo.svg" alt="Playwright" width="24" height="24" style="vertical-align:middle; margin-right: 4px;"> **Playwright**</span>

### Routing & State Management

<span><img src="https://reactrouter.com/_brand/React%20Router%20Brand%20Assets/React%20Router%20Logo/Light.svg" alt="React Router" width="24" height="24" style="vertical-align:middle; margin-right: 4px;"> **React Router**</span>  
<span><img src="https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg" alt="Zustand" width="24" height="24" style="vertical-align:middle; margin-right: 4px;"> **Zustand**</span>  
<span><img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*elhu-42TzQEdsFjKDbQhhA.png" alt="React Query" width="24" height="24" style="vertical-align:middle; margin-right: 4px;"> **React Query**</span>

### Validation

<span><img src="https://raw.githubusercontent.com/colinhacks/zod/main/logo.svg" alt="Zod" width="24" height="24" style="vertical-align:middle; margin-right: 4px;"> **Zod**</span>

---

## ⚖️ Justification

- **Vite** – Chosen over Create React App (`now officially deprecated`) and Webpack due to its lightning-fast build times, instant HMR (Hot Module Replacement), and optimized production bundling. Vite provides a modern, unopinionated setup that works seamlessly with TypeScript and React. This choice was driven by the need for speed and simplicity, avoiding the complexities of traditional bundlers.
- **Editor Rules** – Ensuring consistency from the beginning prevents code-style debates and maintains a uniform developer experience across the team. Shared editor settings via `settings.json` streamline collaboration and ensure all team members follow the same code style, improving team cohesion and productivity.

- **Tailwind CSS** – A utility-first CSS framework that provides a consistent design system without the overhead of naming CSS classes. Unlike traditional CSS, SCSS, or CSS-in-JS solutions like styled-components, Tailwind reduces runtime overhead and keeps the styling process clean, fast, and scalable. Its flexibility also simplifies responsive design and reduces boilerplate.

- **shadcn/ui** – Chosen over libraries like Material UI and Chakra UI for its lightweight, flexible, and composable approach. shadcn/ui provides essential building blocks, allowing for a fully customizable UI without the complexity and bloat often associated with larger UI libraries. It gives developers more freedom to design the UI according to their needs without unnecessary limitations.

- **Vitest** – Selected over Jest due to its native support for ES modules and its higher performance within the Vite ecosystem. Vitest is faster and more efficient than Jest, especially when working with Vite, and its configuration is simpler, reducing setup time and improving overall development speed.

- **React Testing Library (RTL)** – Preferred over Enzyme for its behavior-driven approach to testing. RTL encourages writing tests that focus on user interactions rather than implementation details, leading to more resilient tests that aren't easily broken by internal code changes.

- **React Router** – Opted for routing because the project doesn't require server-side rendering (SSR) or static site generation (SSG). React Router is widely adopted for client-side navigation, providing more flexibility than alternatives like Next.js for this specific use case.

- **Zustand** – Chosen for global state management due to its minimalistic API and lack of boilerplate. Zustand allows for direct mutability and avoids the need for reducers, actions, or middleware, unlike Redux. Its simplicity makes it easy to implement and scale, making it an ideal choice for managing state in this project.

- **React Query** – Chosen for managing async data fetching, caching, and background fetching. React Query simplifies API state management by removing the need for manual state tracking and provides built-in optimizations like automatic refetching and stale data handling, outperforming raw `fetch` or `axios`.

- **Zod** – Used for runtime schema validation due to its declarative and composable API. Unlike TypeScript, which only offers compile-time checks, Zod ensures data integrity at runtime, making it ideal for validating form inputs, API responses, and environment configurations. Zod simplifies validation logic compared to alternatives like Yup, making the code cleaner and more maintainable.
