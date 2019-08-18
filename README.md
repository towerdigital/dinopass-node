# JavaScript Project Template

Project template for JavaScript projects with full modern tooling
<br>
![eslint](https://img.shields.io/badge/javascript-blue?logo=JavaScript&style=for-the-badge)
![eslint](https://img.shields.io/badge/eslint-lint-blueviolet?logo=eslint&style=for-the-badge)
![prettier](https://img.shields.io/badge/prettier-format-yellow?logo=prettier&style=for-the-badge)
![test](https://img.shields.io/badge/jest-test-orange?logo=jest&style=for-the-badge)
![rollup](https://img.shields.io/badge/rollup.js-build-red?logo=rollup.js&style=for-the-badge)

## Linting

lint, or a linter, is a tool that analyzes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs. The term originates from a Unix utility that examined C language source code.
<br><br>
[https://en.wikipedia.org/wiki/Lint_(software](https://en.wikipedia.org/wiki/Lint_(software)

-   ### ESLint

    ESLint is an open source JavaScript linting utility originally created by Nicholas C. Zakas in June 2013. Code linting is a type of static analysis that is frequently used to find problematic patterns or code that doesn’t adhere to certain style guidelines. There are code linters for most programming languages, and compilers sometimes incorporate linting into the compilation process.
    JavaScript, being a dynamic and loosely-typed language, is especially prone to developer error. Without the benefit of a compilation process, JavaScript code is typically executed in order to find syntax or other errors. Linting tools like ESLint allow developers to discover problems with their JavaScript code without executing it.

    The primary reason ESLint was created was to allow developers to create their own linting rules. ESLint is designed to have all rules completely pluggable. The default rules are written just like any plugin rules would be. They can all follow the same pattern, both for the rules themselves as well as tests. While ESLint will ship with some built-in rules to make it useful from the start, you’ll be able to dynamically load rules at any point in time.
    ESLint is written using Node.js to provide a fast runtime environment and easy installation via npm.
    <br><br>
    [https://github.com/eslint/eslint](https://github.com/eslint/eslint)

### Git Hooks and Pre-commit

What are Git hooks?

Git hooks are scripts that Git executes before or after events such as: commit, push, and receive. Git hooks are a built-in feature - no need to download anything. Git hooks are run locally.

These hook scripts are only limited by a developer's imagination.

-   ### Lint Staged

    Linting makes more sense when run before committing your code. By doing so you can ensure no errors go into the repository and enforce code style. But running a lint process on a whole project is slow and linting results can be irrelevant. Ultimately you only want to lint files that will be committed.

    This project contains a script that will run arbitrary shell tasks with a list of staged files as an argument, filtered by a specified glob pattern.

[https://github.com/okonet/lint-staged](https://github.com/okonet/lint-staged)

-   ### Husky

    Git hooks made easy

    Husky can prevent bad git commit, git push and more 🐶 woof!

[https://github.com/typicode/husky](https://github.com/typicode/husky)

## Formatting

-   ### Prettier

    Prettier is an opinionated code formatter with support for.
    Prettier is an opinionated code formatter with support for:

    -   JavaScript, including ES2017
    -   JSX
    -   Angular
    -   Vue
    -   Flow
    -   TypeScript
    -   CSS, Less, and SCSS
    -   HTML
    -   JSON
    -   GraphQL
    -   Markdown, including GFM and MDX
    -   YAML

    It removes all original styling\* and ensures that all outputted code conforms to a consistent style.

    Prettier takes your code and reprints it from scratch by taking the line length into account.
    It removes all original styling, and ensures that all outputted code conforms to a consistent style.

    Prettier takes your code and reprints it from scratch by taking the line length into account.

[https://github.com/prettier/prettier](https://github.com/prettier/prettier)

-   ### ESLint Prettier Config

    Turns off all rules that are unnecessary or might conflict with Prettier.

    This lets you use your favorite shareable config without letting its stylistic choices get in the way when using Prettier.

    Note that this config only turns rules off, so it only makes sense using it together with some other config.

[https://github.com/prettier/eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)

-   ### ESLint Plugin Prettier
    Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.

[https://github.com/prettier/eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)

## Testing Framework

-   ### Jest

    Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

    It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!

    Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly.

    Jest is well-documented, requires little configuration and can be extended to match your requirements.

    Jest makes testing delightful.

    [https://jestjs.io/](https://jestjs.io/)
    [https://github.com/facebook/jest](https://github.com/facebook/jest)

-   ### Wallaby

    Wallaby.js is a developer productivity tool that runs your JavaScript and TypeScript tests immediately as you type, highlighting results in your IDE right next to your code.

    Test execution results, including code coverage, are displayed and updated in realtime right where you need to see them — in your code editor, next to the line of code that you're editing. Say goodbye to context switching.

    The tool is insanely fast, because it calculates and runs the minimum set of tests affected by your code changes, often only a single test needs to be run. No other testing tool is capable of operating on this level.

    There is no vendor, API or framework lock-in when using Wallaby.js, because the tool is a plugin for your existing testing/UI framework and IDE. You will always be able to run your tests without Wallaby.js if you need to.

[https://wallabyjs.com/](https://wallabyjs.com/)

## Build

-   ### Rollup

    Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application. It uses the new standardized format for code modules included in the ES6 revision of JavaScript, instead of previous idiosyncratic solutions such as CommonJS and AMD. ES modules let you freely and seamlessly combine the most useful individual functions from your favorite libraries. This will eventually be possible natively everywhere, but Rollup lets you do it today.

    [https://rollupjs.org/guide/en/](https://rollupjs.org/guide/en/)
