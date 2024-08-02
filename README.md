# Vanilla Prime

A simpler, more sustainable way to build interactive websites.

No frameworks, no bundlers, no required dependencies;
only web standards, conventions, a unix-style toolset, and some elbow grease.

Vanilla Prime is not meant to be _easy_.
From a developer's perspective, it is certainly less ergonomic than your
fully integrated framework du jour.

But it can be learned,
and you will become deeply familiar with the web platform,
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
of contemporary web stacks.

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
- [terser](https://terser.org/) for JavaScript minification
- [cbst](https://github.com/morris/cbst) for cache busting
- [Prettier](https://prettier.io/) for code formatting
- [ESLint](https://eslint.org/) for JavaScript/TypeScript linting
- [Stylelint](https://stylelint.io/) for CSS linting

All of these are optional.
In particular, TypeScript and SCSS are not strictly vanilla,
and may be dismissed for even more purity and simplicity.

You will need to get familiar with the terminal and shell scripting,
which serves as the tooling's glue.

## Project Structure

- `/public`: Root directory for static files and assets, e.g. HTML, CSS, JavaScript, images, ...
  - `/public/css/<module>.css` (generated from `/src`)
  - `/public/js/<module>.js` (generated from `/src`)
  - `/public/index.html`
- `/scripts`: Shell scripts for development, testing and building the website.
  - `/scripts/<script>.sh`
- `/src`: Non-standard source files that need to be compiled (if any), e.g. TypeScript and SCSS files. Should have the same structure as `/public`.
  - `/src/css/<module>.scss`
  - `/src/js/<module>.ts`

It is recommended reading through the shell scripts and
the various config files in the project root
to understand their purpose, and to be able to adapt them as you see fit.

## Reasonable System for CSS Stylesheet Structure (rscss)

Follow [rscss](https://rstacruz.github.io/rscss/) when authoring HTML and CSS.

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

Mount functions accept a DOM element as their first argument.
Their responsibility is to set up initial state, event listeners, and provide behavior
and rendering for the target element (all of which are optional).

Mount functions do not create or own their target elements.
Target elements must be created before mounting.

A mount function for a component will usually set some rigid initial HTML
and define an idempotent `update` function
that updates the dynamic parts of the component's DOM.
The `update` function is usually called in response to some DOM event.

Avoid manipulating the DOM directly from event handlers.

Consider toggling visibility
instead of constructing different DOM trees based on some state.

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

_Reconciliation_ is rendering and re-rendering a variable amount of
dynamic elements in a given container.

Alas, for reconciliation we have not discovered an efficient, truly vanilla form (yet?).
For now, use `reconcile` from [exdom](https://github.com/morris/exdom).

## Vendoring

_Vendoring_ is used for importing third-party JavaScript packages.
They are copied to your project source tree so that there's no need for bundling.

To get pinned versions and type safety, install packages with NPM first,
and copy the necessary files from `/node_modules/<package>` to `/src/js/vendor`.

Then, create a `/src/js/vendor/<package>.d.ts` file containing `export * from '<package>';`.
Automate this in `/scripts/vendor.sh`.

## Speculative Loading

Implement [speculative loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Speculative_loading),
especially in case of larger numbers of JavaScript files.

## For Library Authors

### JavaScript

Consider writing your entire library in one ES module file.
Otherwise, provide individual ES modules, as well as a bundled ES module.

Always provide TypeScript typings (`*.d.ts`).

Avoid dependencies. If necessary, accept dependencies as function or constructor arguments.

### CSS

- Find a unique prefix fitting to the library.
- Prefix component and helper class names.
- Do not prefix element and variant class names.
- Prefix CSS variables.
- Provide individual CSS files.
- Provide a bundled CSS file.

## Resources

- [MDN Web Docs](https://developer.mozilla.org/) for all the web platform things
- [Can I use...](https://caniuse.com) for checking feature compatibility
- [rscss](https://rstacruz.github.io/rscss/) for organizing CSS (and HTML)
- [VANILLA TODO](https://github.com/morris/vanilla-todo) (supporting/prior research)

## Outlook

The presented story still has some gaps and rough edges.
Some notable open questions:

- Can routing be done reasonably well with vanilla means?
- Can vendoring be reasonably automated?
- What is our stance on server-side generation?

The work continues...
