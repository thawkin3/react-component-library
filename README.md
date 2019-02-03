# React Component Library
Reusable components and functions for React apps. This is an example project demonstrating the basic setup for creating a component library that exports individual Babel-compiled components that are ready to be used as a package by other apps.

## Helpful articles and resources
- https://docs.npmjs.com/creating-and-publishing-scoped-public-packages
- https://itnext.io/how-to-package-your-react-component-for-distribution-via-npm-d32d4bf71b4f
- https://github.com/pmadruga/myUI
- https://github.com/philipszdavido/countdown-timer
- https://codeburst.io/deploy-react-component-as-an-npm-library-d396efc25122
- https://github.com/mui-org/material-ui

## When making modifications
```
[finish code changes]
npm version <major|minor|patch>
git push --tags
git push
[merge code to master branch]
npm publish --access public
```
