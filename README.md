# Mariam Rakka Website

## Overview
This repository contains the source code for the personal website of Mariam Rakka.
The site is built as a React single page application and deployed to GitHub Pages.
Content is maintained in React components and structured sections.

## Framework and tooling
- React (Create React App)
- React Router
- Bootstrap and custom CSS
- GitHub Pages for deployment
- Sitemap generation via `SitemapGenerator.js`

## Project structure
- `src/Pages` contains page content and sections
- `src/Components` contains shared UI components
- `src/Files` contains PDFs such as the resume
- `public` contains static assets

## Local development
```
npm install
npm start
```

## Production build
```
npm run build
```

If your Node version is newer and you see an OpenSSL error, the build script already
uses the legacy OpenSSL provider via `NODE_OPTIONS`.

## Deployment
Deploys are done with GitHub Pages:
```
npm run deploy
```

This runs a production build, generates a sitemap, and publishes to the `gh-pages` branch.
In GitHub Pages settings, the source should be `gh-pages` and the root folder.
