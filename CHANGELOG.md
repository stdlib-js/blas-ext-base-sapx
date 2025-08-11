# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-08-11)

<section class="features">

### Features

-   [`2ea4452`](https://github.com/stdlib-js/stdlib/commit/2ea4452fa0f63499be526f392fa7fdd647d1a9b5) - add C `ndarray` API and refactor `blas/ext/base/sapx` [(#4696)](https://github.com/stdlib-js/stdlib/pull/4696)

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`2ea4452`](https://github.com/stdlib-js/stdlib/commit/2ea4452fa0f63499be526f392fa7fdd647d1a9b5): rename `c_sapx` to `stdlib_strided_sapx`

    -   To migrate, users should replace all instances of `c_sapx` with `stdlib_strided_sapx`.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`ef11834`](https://github.com/stdlib-js/stdlib/commit/ef1183420e6bba80849c12f838aa7eb23c6d7635) - **docs:** update related packages sections [(#5048)](https://github.com/stdlib-js/stdlib/pull/5048) _(by stdlib-bot)_
-   [`2ea4452`](https://github.com/stdlib-js/stdlib/commit/2ea4452fa0f63499be526f392fa7fdd647d1a9b5) - **feat:** add C `ndarray` API and refactor `blas/ext/base/sapx` [(#4696)](https://github.com/stdlib-js/stdlib/pull/4696) _(by Muhammad Haris, Athan Reines)_
-   [`a6f3921`](https://github.com/stdlib-js/stdlib/commit/a6f3921560705503dcb5ee2575dd2f11417f58fb) - **docs:** update related packages sections [(#4242)](https://github.com/stdlib-js/stdlib/pull/4242) _(by stdlib-bot, Athan Reines)_
-   [`62364f6`](https://github.com/stdlib-js/stdlib/commit/62364f62ea823a3b52c2ad25660ecd80c71f8f36) - **style:** fix C comment alignment _(by Philipp Burckhardt)_
-   [`272ae7a`](https://github.com/stdlib-js/stdlib/commit/272ae7ac5c576c68cfab1b6e304c86407faa20cd) - **docs:** remove comment _(by Athan Reines)_
-   [`2777e4b`](https://github.com/stdlib-js/stdlib/commit/2777e4be161869d09406e3b17947d24c64b47af2) - **bench:** resolve lint errors in benchmarks _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 3 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Muhammad Haris
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.2">

## 0.2.2 (2024-07-27)

<section class="issues">

### Closed Issues

This release closes the following issue:

[#1509](https://github.com/stdlib-js/stdlib/issues/1509)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`d04dcbd`](https://github.com/stdlib-js/stdlib/commit/d04dcbd6dc3b0bf4a89bd3947d317fa5ff15bb38) - **docs:** remove private annotations in C comments _(by Philipp Burckhardt)_
-   [`ceb4943`](https://github.com/stdlib-js/stdlib/commit/ceb494351d42c2505e559a2c8aad9a120c76d0db) - **docs:** remove comments _(by Athan Reines)_
-   [`e4f0dcd`](https://github.com/stdlib-js/stdlib/commit/e4f0dcd53e364d25d1a598e20ed25dd73cf547e7) - **refactor:** update `blas/ext/base/sapx` to follow current project conventions [(#1824)](https://github.com/stdlib-js/stdlib/pull/1824) _(by Bryan Elee, Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 3 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Bryan Elee
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

<section class="commits">

### Commits

<details>

-   [`dea49e0`](https://github.com/stdlib-js/stdlib/commit/dea49e03ab5571233e3da26835a6a6d3256d5737) - **docs:** use single quotes in require calls instead of backticks _(by Philipp Burckhardt)_
-   [`ac78ce0`](https://github.com/stdlib-js/stdlib/commit/ac78ce0b1ec7b3178eb955d4eeb7d3a3753a3561) - **build:** remove tslint directives _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.1">

## 0.1.1 (2023-10-04)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-23)

<section class="features">

### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`28e1c84`](https://github.com/stdlib-js/stdlib/commit/28e1c84390d88044883c9ef940a12f38d66ea3ef) - **docs:** resolve C lint errors _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.11">

## 0.0.11 (2022-08-29)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.10">

## 0.0.10 (2022-07-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.9">

## 0.0.9 (2022-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.8">

## 0.0.8 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.7">

## 0.0.7 (2021-08-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-06-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-14)

No changes reported for this release.

</section>

<!-- /.release -->

