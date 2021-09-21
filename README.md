# Mojaloop Business Documents
[![Git Commit](https://img.shields.io/github/last-commit/mojaloop/mojaloop-business-docs.svg?style=flat)](https://github.com/mojaloop/mojaloop-business-docs/commits/master)
[![Git Releases](https://img.shields.io/github/release/mojaloop/mojaloop-business-docs.svg?style=flat)](https://github.com/mojaloop/mojaloop-business-docs/releases)
[![CircleCI](https://circleci.com/gh/mojaloop/mojaloop-business-docs.svg?style=svg)](https://circleci.com/gh/mojaloop/mojaloop-business-docs)

> This is the official Mojaloop Community Business Documentation for the Mojaloop project.

## About

This document is part of the Mojaloop Community Business Document Project. The project is intended to support entities (countries, regions, associations of providers or commercial enterprises) implementing new payments systems using Mojaloop code. These entities will also need write Business Rules that participants in the system will follow.

The Mojaloop Community Business Document Project provides templates for Business Rules and related documents. There are many choices involved in implementing a new payment system: the templates show some of the choices and, where appropriate, commentary is provided on how the particular choice is related to the goals of a Level One aligned system.

**Notes**:
This document is a work-in-progress.

This repository contains a set of templates for business documents. These are intended as guidance to businesses or agencies who are evaluating the creation of a real-time retail payment system, enabled by Mojaloop open source software. The documents are likely more broadly useful than that, though they were created to complement and guide the practical application of the Mojaloop software.

## Building and testing locally

Our updated docs currently live in the `./docs` directory

```bash
# install dependencies
yarn 

# run the local server
yarn run dev
```

## Building the project

Run `yarn run build` to build the project to render the static vuepress site for a deployment.

## Versioning

To version the current `next` document version found in the `./docs` folder, run the following command

```bash
npx vuepress version docs ${VERSION}
```

Example: `npx vuepress version docs 1.0.1`.

This will preserve the documents found in `./docs` to `./website/versioned_docs/1.0.1`.

This is managed by a [vuepress versioning plugin](https://titanium-docs-devkit.netlify.app/guide/versioning.html).

The latest version will automatically be loaded when access the website, with a version drop-down list appearing on the top left (next to the Mojaloop logo). Here you can select the different versions that have been archived in the `./vuepress/website/versioned_docs/` folder, with `next` representing the working folder `./docs`.

## Publishing

We deploy these docs automatically with CircleCI upon merges to the `master` branch.

Go to: https://ref-arch-docs.moja-lab.live/ to see the live site!

The deploy script does not currently take versioning into account, but will in the future.

> Note: for this to work, we have temporarily disabled the "only build pull requests" setting on Circleci
> Someone please remember to turn that back on!

### Deploying Manually

You can also deploy them manually, by running:

```bash
sh ./scripts/.publish-gh-pages.sh
```

## License

Apache License. Version 2.0
See [`./license`](./LICENSE.md) for more information.
