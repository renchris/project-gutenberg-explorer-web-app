<p align="center">
  <a href="https://github.com/renchris/panda-boilerplate">
    <img alt="Tailwind Logo" src="public/tailwind.png" width="60" />
  </a>
</p>
<h1 align="center">
  Tailwind Boilerplate
</h1>

A starter template that uses the NextJS App Router, TypeScript, and Tailwind CSS.

## 👍 NextJS App Router

The Next.js App Router is the current standard for building applications using React's latest features.

The significant feature of Next.js App Router are [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components).

- Previously, with the Pages Router, each of your pages are rendered on the client or the server.

- Currently, with the App Router, your components within each page can be rendered on the client or the server.

This allows more of your application to receive the [benefits of server rendering](https://nextjs.org/docs/app/building-your-application/rendering/server-components#benefits-of-server-rendering).

## 🚀 Usage

First, install the dependencies:

```bash
pnpm install
```

Then, run the application:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## 🎨 Code Style

We use ESLint for our code style. You may modify the ESLint rule set in the `.eslintrc.js` file. Include ESLint On Save in your code editor Preferences settings.

```JSON
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}
```

See
- [ESLint Rules](https://eslint.org/docs/latest/rules/)
- [Airbnb ESLint Style Guide](https://github.com/airbnb/javascript)
- [TypeScript ESLint Rules](https://typescript-eslint.io/rules/)


## 🧐 What's inside?

A quick look at the top-level files and directories where we made our feature changes in the project.

    src
    └── app
         ├── layout.tsx
         └── page.tsx
    eslintrc.js

1. **`/src/app`**: This directory will contain all of the code related to what you will see on the front-end of the site. `src` is a convention for “source code” and `app` is the convention for “app router”.

1. **`src/app/layout.tsx`**: This file contains the Root Layout. The JSX elements in this file applies onto all routes with routes being `{children}`. See [NextJS Documentation: Layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts)

1. **`src/app/page.tsx`**: This file contains the code for the front-end page. See [NextJS Documentation: Pages](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages)

1. **`eslintrc.js`**: This file contains the ESLint rule configuration.