# Vanilla Prime

A simpler, more sustainable way to build interactive websites.

No frameworks, no bundlers, no required dependencies;
only web standards, conventions, a unix-style toolset, and some elbow grease.

Vanilla Prime is not meant to be _easy_.
From a developer's perspective, it's certainly less ergonomic than your
fully integrated framework du jour.

But you will become deeply familiar with the web platform,
and your websites will be performant
and lightweight
and timeless
and hackable (in a good way)
and respect your user's and the world's resources.

> Vanilla Prime is the Dark Souls of web stacks:
> Hard to get into, hard to master, but incredibly rewarding.

This repository serves as a guide to Vanilla Prime,
as well as a boilerplate for adopting it in new projects,
lest we suffer from eternal framework churn,
and never shake the ghastly coil
of contemporary web frameworks.

## Quick Start

- Install [Node.js](https://nodejs.org/) >= 20
- Open a terminal
- Clone or download this repository to some directory, e.g. `my-website`
  - With [Git](https://git-scm.com/) e.g. `git clone --depth=1 https://github.com/morris/vanilla-prime my-website`
- Run `cd my-website`
- Run `rm -rf .git`
- Run `npm install`
- Run `npm run dev`
- Visit http://localhost:8080
- Work on `/src` and `/public`
- Run `npm run build`
- Deploy `/dist` somewhere

---

This guide does not currently explain every concept in minute detail.
Intermediate understanding of the web platform, and a curious mind, is wanted.
Experiment with the given boilerplate along the way.
**Happy hacking!**

## Toolset

- [Node.js](https://nodejs.org/) to run most other tools listed here
- [TypeScript](https://www.typescriptlang.org/) for JavaScript type safety and correctness
- [SCSS](https://sass-lang.com/documentation/) for CSS preprocessing
- [s4d](https://github.com/morris/s4d) as a local development server with live reload
- [exdom](https://github.com/morris/exdom) as a supporting runtime library
- [Playwright](https://playwright.dev/) for end-to-end and unit testing
- [c8](https://github.com/bcoe/c8) for test coverage
- [terser](https://terser.org/) for minification
- [cbst](https://github.com/morris/cbst) for cache busting
- [Prettier](https://prettier.io/) for code formatting
- [ESLint](https://eslint.org/) for JavaScript/TypeScript linting
- [Stylelint](https://stylelint.io/) for CSS linting

All of these are optional.
In particular, TypeScript and SCSS are not strictly vanilla,
and may be dismissed for even more purity and simplicity.

You'll need to get familar with the terminal and shell scripting,
which serves as the tooling's glue.

## Project Structure

- `/public`: Website root directory for static files and assets, e.g. HTML, CSS, JavaScript, images, ...
  - `/public/css/<module>.css` (might be generated)
  - `/public/js/<module>.js` (might be generated)
  - `/public/index.html`
- `/scripts`: Shell scripts for development, testing and building the website
  - `/scripts/<script>.sh`
- `/src`: Non-standard source files that need to be pre-processed or compiled (if any), e.g. TypeScript and SCSS files; should have the same structure as `/public`.
  - `/src/css/<module>.scss`
  - `/src/js/<module>.ts`

It's recommended reading through the shell scripts and
the various config files in the project root
to understand their purpose, and to be able to adapt them as you see fit.

## Reasonable System for CSS Stylesheet Structure

Follow [rscss](https://rstacruz.github.io/rscss/) in your HTML and CSS.

## Deep Modules

Write rather large, _deep modules_, e.g. capturing a complete feature or domain.
This reduces network calls and simplifies
[speculative loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Speculative_loading).

Do not create one file per function or class or other code unit.
Do not use barrel indexes.
Use code folding to navigate large files.

## Mount Functions

Use _mount functions_ to organize UI code,
e.g. interactive components and dynamic behaviors.

Mount functions accept a DOM element as their first argument. Their
responsibility is to set up initial state, event listeners, and provide behavior
and rendering for the target element.

## Communicate via DOM Events

Communicate between components exclusively via
[DOM events](https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events).
Use `CustomEvent` and `detail` to transmit data.

- **Data events** flow from parent components to child components
  and do not bubble up.
  Data events are in noun-form.
- **Action events** bubble up the DOM,
  usually resulting in some parent component state change
  which is in turn propagated downwards through data events.
  Action events are in verb-form.

## Reconciliation

For _reconciliation_
(i.e. rendering a variable amount of dynamic components efficiently)
we have not (yet?) found a way to reduing into a truly vanilla form.
For now, use the `reconcile` function from [exdom](https://github.com/morris/exdom).

## Vendoring

TODO

## Speculative Loading

Employ [speculative loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Speculative_loading)
especially in case of larger numbers of JavaScript files.

## For Library Authors

### JavaScript

- Provide individual ES modules.
- Provide a bundled ES module.
  - Tip: Write your entire library in one file to get this for free.
- Avoid dependencies.
  - If necessary, accept dependencies as function or constructor arguments.
- Provide TypeScript typings (`*.d.ts`).

### CSS

- Find a unique prefix fitting to the library.
- Prefix component and helper class names.
- Don't prefix element and variant class names.
- Prefix CSS variables.
- Provide individual CSS files.
- Provide a bundled CSS file.

## Resources

- [MDN Web Docs](https://developer.mozilla.org/) for all the web platform things
- [Can I use...](https://caniuse.com) for checking feature compatibility
- [rscss](https://rstacruz.github.io/rscss/) for organizing CSS (and HTML)
- [VANILLA TODO](https://github.com/morris/vanilla-todo) (supporting/prior research)

## Roadmap

Some notable open questions:

- Can routing be done reasonably well with vanilla means?
- Can vendoring be reasonably automated?
