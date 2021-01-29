# [6.0.0](https://github.com/ngneat/tailwind/compare/v5.2.4...v6.0.0) (2021-01-24)


### Bug Fixes

* remove postcss8 dependency ([#49](https://github.com/ngneat/tailwind/issues/49)) ([89c9940](https://github.com/ngneat/tailwind/commit/89c99400e9b75c862cce91361e39363220eaeae8))

## [5.2.4](https://github.com/ngneat/tailwind/compare/v5.2.3...v5.2.4) (2021-01-23)


### Bug Fixes

* **ng-add:** fix getWorkspace function ([a0330f6](https://github.com/ngneat/tailwind/commit/a0330f6db59b69944411aef97ff84146cce82260))

## [5.2.3](https://github.com/ngneat/tailwind/compare/v5.2.2...v5.2.3) (2021-01-17)


### Refactor

* move `tailwind.config` import ([#50](https://github.com/ngneat/tailwind/issues/50)) ([aa46f25](https://github.com/ngneat/tailwind/commit/aa46f25d2970e30bf7a5fc9739e9fef8f35acad1))

## [5.2.2](https://github.com/ngneat/tailwind/compare/v5.2.1...v5.2.2) (2021-01-15)


### Bug Fixes

* change schema so plugins accepts a comma-separated string ([#43](https://github.com/ngneat/tailwind/issues/43)) ([cad2e8a](https://github.com/ngneat/tailwind/commit/cad2e8a742b1b4fd13e87b6e1ac41c17e08ac481))
* **tailwind.config.js.template:** fix for syntax error in tailwind config template ([#45](https://github.com/ngneat/tailwind/issues/45)) ([2123e50](https://github.com/ngneat/tailwind/commit/2123e506235f2b6494c6a82302e28d646f6dfbe8)), closes [#44](https://github.com/ngneat/tailwind/issues/44)
* honor tailwindConfig.purge.enabled if it exists in tailwind.config ([2b7a48d](https://github.com/ngneat/tailwind/commit/2b7a48db2da79e75e350a90de73ad38928b3e976)), closes [#46](https://github.com/ngneat/tailwind/issues/46)

## [5.2.1](https://github.com/ngneat/tailwind/compare/v5.2.0...v5.2.1) (2021-01-14)


### Bug Fixes

* make sure Angular version does not depend on @nrwl/workspace ([#42](https://github.com/ngneat/tailwind/issues/42)) ([7fbda4a](https://github.com/ngneat/tailwind/commit/7fbda4ac61c9cce4b5ce59ce8523a2e156023918))

# [5.2.0](https://github.com/ngneat/tailwind/compare/v5.1.0...v5.2.0) (2021-01-14)


### Bug Fixes

* tailwindcss-intellisense support ([#39](https://github.com/ngneat/tailwind/issues/39)) ([ae4e0fb](https://github.com/ngneat/tailwind/commit/ae4e0fbdbe48c7afddb2aa10cd25bad935c9fe1d))


### Features

* add a prompt to ask user if they want dark mode ([#41](https://github.com/ngneat/tailwind/issues/41)) ([be3a323](https://github.com/ngneat/tailwind/commit/be3a32354af7224570c852ec39daaa8a5dea1f3c))
* add class="dark" to index.html with darkMode = class ([#40](https://github.com/ngneat/tailwind/issues/40)) ([edcf041](https://github.com/ngneat/tailwind/commit/edcf04171dfc4fa0ba3e52f98f9fd83fada4bfb0))
* add option to enable [@tailwindcss](https://github.com/tailwindcss) plugins during setup ([#37](https://github.com/ngneat/tailwind/issues/37)) ([2d4b9a4](https://github.com/ngneat/tailwind/commit/2d4b9a40a0e5c07a15d36f209140691093c6f9f4))

# [5.1.0](https://github.com/ngneat/tailwind/compare/v5.0.0...v5.1.0) (2021-01-07)


### Bug Fixes

* add sourceRoot in webpack config template ([92bb009](https://github.com/ngneat/tailwind/commit/92bb0099492f68afc984dd1a93dfb3bb91a78a21))
* move addTailwindCSS to separate file and use webpack types ([028f94e](https://github.com/ngneat/tailwind/commit/028f94e79ff0357858f2cf8fccc2791432d9ce33))
* use require instead of import syntax in webpack config template ([40dbb90](https://github.com/ngneat/tailwind/commit/40dbb90161f3f701af2bf8b57cb4a803e4d89b3c))


### Features

* add option to enable dark mode during setup ([#34](https://github.com/ngneat/tailwind/issues/34)) ([9e442e5](https://github.com/ngneat/tailwind/commit/9e442e56360519985df36842826535693946cb8e))
* put addTailwindCSS into package ([#33](https://github.com/ngneat/tailwind/issues/33)) ([2bdc57a](https://github.com/ngneat/tailwind/commit/2bdc57ae42ae44b18f734c65cf0687ee6c93e3af))

# [5.0.0](https://github.com/ngneat/tailwind/compare/v3.0.7...v5.0.0) (2020-12-28)

### ⚠ BREAKING CHANGES

* patch angulars postcss config

### Bug Fixes

* add postcss back to dependencies ([f4919a5](https://github.com/ngneat/tailwind/commit/f4919a50f060e4d6558a171da6951da200164379))
* ensure project windows support ([2adc40b](https://github.com/ngneat/tailwind/commit/2adc40b111a0cde45bb6728da182141be6e48555))


### Features/Enhancements

* add enableTailwindInComponentsStyles to schematics ([5a3b325](https://github.com/ngneat/tailwind/commit/5a3b32557759b9821531b02d9948a96067d96714))
* add tailwind to all postcss configs ([4bf8c0c](https://github.com/ngneat/tailwind/commit/4bf8c0cc5601b9e95dbd2d515ac9076f2e4c4561))
* check for tailwindConfig variable ([eda8fd5](https://github.com/ngneat/tailwind/commit/eda8fd52a9bb98c11c2e2d3596770ea18c9c8e1e))
* patchWebpackPostcssPlugins function ([531b4c2](https://github.com/ngneat/tailwind/commit/531b4c263af48e8ce4b0fd6e45f483e150b8c661))


### Refactors

* edit labels ([0c855b8](https://github.com/ngneat/tailwind/commit/0c855b8ee54c6fe5dcf1debbafd336cc8e581c36))
* patchWebpackPostcssPlugins ([6bf1d9c](https://github.com/ngneat/tailwind/commit/6bf1d9cdcd186171f5a9376eedac8fc9d21bd35a))
* remove returns in patchWebpackPostcssPlugins ([a4e42e4](https://github.com/ngneat/tailwind/commit/a4e42e42563d4f6b1211f2caeb81325d2cb7e0f7))
* tailwinds pathConfig ([77b738b](https://github.com/ngneat/tailwind/commit/77b738ba0ff99d2f6c20f2420d69891e955a49e4))


### Chores

* **release:** 4.0.0 ([5109a8b](https://github.com/ngneat/tailwind/commit/5109a8bf6830be9d96c801a36e8b996f7d3f1051))


### Documentations

* add [@vltansky](https://github.com/vltansky) as a contributor ([8de935b](https://github.com/ngneat/tailwind/commit/8de935bea25a7faf480cf5389cc6dd4abf4763d0))
* update GIF ([ded61b9](https://github.com/ngneat/tailwind/commit/ded61b9d589e28d3f51f9491b7a23481a47e82c8))

# [4.0.0](https://github.com/ngneat/tailwind/compare/v3.0.7...v4.0.0) (2020-12-28)

`ngneat/tailwind` v4 will have Webpack config to ride on top of Angular's Webpack configuration. We add TailwindCSS plugins directly on Angular PostCSS config by patching the config.

This will help with all the Styles Extension supports as well as 3rd-party UI libraries styles imports (eg: `Angular Material`). Also, v4 will not install any PostCSS dependencies anymore because we use the ones installed with Angular.

If you're already setup with `ngneat/tailwind` before v4, please check out the repo and copy the content of `webpack.config.js.template` to your `webpack.config.js`

### ⚠ BREAKING CHANGES

* patch angulars postcss config

### Bug Fixes

* ensure project windows support ([2adc40b](https://github.com/ngneat/tailwind/commit/2adc40b111a0cde45bb6728da182141be6e48555))


### Features/Enhancements

* add enableTailwindInComponentsStyles to schematics ([5a3b325](https://github.com/ngneat/tailwind/commit/5a3b32557759b9821531b02d9948a96067d96714))
* add tailwind to all postcss configs ([4bf8c0c](https://github.com/ngneat/tailwind/commit/4bf8c0cc5601b9e95dbd2d515ac9076f2e4c4561))
* check for tailwindConfig variable ([eda8fd5](https://github.com/ngneat/tailwind/commit/eda8fd52a9bb98c11c2e2d3596770ea18c9c8e1e))
* patchWebpackPostcssPlugins function ([531b4c2](https://github.com/ngneat/tailwind/commit/531b4c263af48e8ce4b0fd6e45f483e150b8c661))


### Refactors

* edit labels ([0c855b8](https://github.com/ngneat/tailwind/commit/0c855b8ee54c6fe5dcf1debbafd336cc8e581c36))
* patchWebpackPostcssPlugins ([6bf1d9c](https://github.com/ngneat/tailwind/commit/6bf1d9cdcd186171f5a9376eedac8fc9d21bd35a))
* remove returns in patchWebpackPostcssPlugins ([a4e42e4](https://github.com/ngneat/tailwind/commit/a4e42e42563d4f6b1211f2caeb81325d2cb7e0f7))
* tailwinds pathConfig ([77b738b](https://github.com/ngneat/tailwind/commit/77b738ba0ff99d2f6c20f2420d69891e955a49e4))


### Documentations

* add [@vltansky](https://github.com/vltansky) as a contributor ([8de935b](https://github.com/ngneat/tailwind/commit/8de935bea25a7faf480cf5389cc6dd4abf4763d0))

### [3.0.7](https://github.com/ngneat/tailwind/compare/v3.0.4...v3.0.7) (2020-12-27)


### Bug Fixes

* add opt-in custom-webpack beta ([0a69c09](https://github.com/ngneat/tailwind/commit/0a69c0981f881e6c88b14e16a66d9154062e45b9))
* fix update project root styles with InsertChange ([ef8c383](https://github.com/ngneat/tailwind/commit/ef8c383e6448295fce9e7725d6e450d767e1b87f))
* remove useCustomWebpack option since custom-webpack@11 is released ([97e8900](https://github.com/ngneat/tailwind/commit/97e89009cac47e33b301b5539c3c7f05f8453353))


### Refactors

* remove type annotation ([6846e10](https://github.com/ngneat/tailwind/commit/6846e1090edfa2406697d3f5158ae2c2cb222fde))


### Chores

* **release:** 3.0.6 ([6eddb95](https://github.com/ngneat/tailwind/commit/6eddb9590c1aad0793cd3ae3e807b2ac966020ed))
* update packages ([7aaab37](https://github.com/ngneat/tailwind/commit/7aaab377f65b4233d1f610e011bcc960905d5e68))
* **release:** 3.0.5 ([6d7964a](https://github.com/ngneat/tailwind/commit/6d7964a770253cd8c1916bfd683dfa7001c3ef71))
* setup husky, lint-staged, and pretty-quick ([d930f13](https://github.com/ngneat/tailwind/commit/d930f1390c0f0c7ed9da962b1aec9c3b00ba570f))


### Documentations

* add CODE OF CONDUCT ([32ccae2](https://github.com/ngneat/tailwind/commit/32ccae224e70adde38a97b5a7761bad2662678dc))
* add CONTRIBUTING ([8d3b3f6](https://github.com/ngneat/tailwind/commit/8d3b3f626782fc944edb3ebb92c4a6e7335b177d))
* add LICENSE ([d75da3b](https://github.com/ngneat/tailwind/commit/d75da3b81aaed5a86c8438d2cce6e76c2078cac6))
* update BK contributions type ([4eeaf34](https://github.com/ngneat/tailwind/commit/4eeaf34d3c8adcafc683104f0850cad747f79d85))
* update contributions type for BK ([986af61](https://github.com/ngneat/tailwind/commit/986af61ea58c8dda982d030476ad003bbcee3703))
* update docs about contributing ([4400d8d](https://github.com/ngneat/tailwind/commit/4400d8dd1e7e0a5a9a1f8383f2ef20f4c660706b))

### [3.0.6](https://github.com/ngneat/tailwind/compare/v3.0.4...v3.0.6) (2020-12-05)

### Bug Fixes

* add opt-in custom-webpack
  beta ([0a69c09](https://github.com/ngneat/tailwind/commit/0a69c0981f881e6c88b14e16a66d9154062e45b9))
  - `@angular-builders/custom-webpack@beta` supports for Angular 11. Using beta is considered a risk but if you want to
    experiment with Angular 11 (new build output etc...), you'd want to opt-in to
    use `@angular-builders/custom-webpack@beta`

### Chores

* update packages ([7aaab37](https://github.com/ngneat/tailwind/commit/7aaab377f65b4233d1f610e011bcc960905d5e68))

### Refactors

* remove type annotation ([6846e10](https://github.com/ngneat/tailwind/commit/6846e1090edfa2406697d3f5158ae2c2cb222fde))

### [3.0.5](https://github.com/ngneat/tailwind/compare/v3.0.4...v3.0.5) (2020-12-03)

### Bug Fixes

- fix update project root styles with
  InsertChange ([ef8c383](https://github.com/ngneat/tailwind/commit/ef8c383e6448295fce9e7725d6e450d767e1b87f))

### Chores

- setup husky, lint-staged, and
  pretty-quick ([d930f13](https://github.com/ngneat/tailwind/commit/d930f1390c0f0c7ed9da962b1aec9c3b00ba570f))

### Documentations

- update docs about
  contributing ([4400d8d](https://github.com/ngneat/tailwind/commit/4400d8dd1e7e0a5a9a1f8383f2ef20f4c660706b))

### [3.0.4](https://github.com/ngneat/tailwind/compare/v3.0.3...v3.0.4) (2020-12-03)

### Bug Fixes

- fix get default project for
  nx-setup ([6e1c64d](https://github.com/ngneat/tailwind/commit/6e1c64d3792d50c4fc7486ff73ea2dc675f64b3e))

### [3.0.3](https://github.com/ngneat/tailwind/compare/v3.0.2...v3.0.3) (2020-12-03)

### Bug Fixes

- adjust ng-add
  schematics ([a9af67a](https://github.com/ngneat/tailwind/commit/a9af67a2b466d8cfe4b9687b8fe4e02e8349f70a))
- misc adjustments ([447ecdb](https://github.com/ngneat/tailwind/commit/447ecdbbb4fe6e966b5d65c63e1e34bdcbd67ef5)),
  closes [#25](https://github.com/ngneat/tailwind/issues/25)

### CI/CD

- adjust test actions ([c3922c5](https://github.com/ngneat/tailwind/commit/c3922c5dd5bbf22adeefbc56ffb248ed30ac90d7))
- use matrix node in test
  actions ([f64a447](https://github.com/ngneat/tailwind/commit/f64a447f64648071c4caf2cffb81a004d7f75e7f))

### Documentations

- update readme about installing ngneat/tailwind for
  nx ([8e9136d](https://github.com/ngneat/tailwind/commit/8e9136d06fa04cb377ae294137ee5d5343593b58))

### [3.0.2](https://github.com/ngneat/tailwind/compare/v3.0.1...v3.0.2) (2020-12-03)

### CI/CD

- update publish actions ([874d728](https://github.com/ngneat/tailwind/commit/874d728a37ebc1216fda660edff3df698d73ddab))

### [3.0.1](https://github.com/ngneat/tailwind/compare/v3.0.0...v3.0.1) (2020-12-03)

### CI/CD

- update test actions ([2646539](https://github.com/ngneat/tailwind/commit/26465395e42b02aea848a98d094327fe1c34a018))

# [3.0.0](https://github.com/ngneat/tailwind/compare/v1.1.0...v3.0.0) (2020-12-03)

### ⚠ BREAKING CHANGES

-
  - Add new schematics nx-setup for NxCLI powered workspaces

### Documentations

- add [@beeman](https://github.com/beeman) as a
  contributor ([9a013f5](https://github.com/ngneat/tailwind/commit/9a013f5fd8e430f2193f9598a49ab986367944de))
- add [@nartc](https://github.com/nartc) as a
  contributor ([5dde874](https://github.com/ngneat/tailwind/commit/5dde87423abbf375e605a048fda6fa4b4be2e9b1))
- add [@santoshyadavdev](https://github.com/santoshyadavdev) as a
  contributor ([b66d89c](https://github.com/ngneat/tailwind/commit/b66d89cf46ef9068136265aca990896598da61ea))
- add @Bilal-io as a
  contributor ([0a43ad3](https://github.com/ngneat/tailwind/commit/0a43ad336e837f84eeb3db496e016cd539102567))
- add @NetanelBasal as a
  contributor ([13ed3a4](https://github.com/ngneat/tailwind/commit/13ed3a46ccef24dcef0f1350ff391997bb070997))

### Features/Enhancements

- move to Nx ([9382261](https://github.com/ngneat/tailwind/commit/9382261cc1fa8ec91688128bf5f936d3f86212ab))

### Chores

- **release:** 2.0.0 ([087f28d](https://github.com/ngneat/tailwind/commit/087f28d940cca60735515bc833b1801cfc08ef4c))
- clean up idea
  workspace ([37133e7](https://github.com/ngneat/tailwind/commit/37133e731424cd4bbecf4aa99d82bd10a34faba2))

### CI/CD

- adjust github actions ([e88d78d](https://github.com/ngneat/tailwind/commit/e88d78d89d9cd6064a7600f02ef487da4fa6e80e))
- update test actions ([a4c89dc](https://github.com/ngneat/tailwind/commit/a4c89dcda6a3672b29063902a059ab267d0beae8))

# [2.0.0](https://github.com/ngneat/tailwind/compare/v1.1.0...v2.0.0) (2020-12-03)

### ⚠ BREAKING CHANGES

-
  - Add new schematics nx-setup for NxCLI powered workspaces

### Documentations

- add [@beeman](https://github.com/beeman) as a
  contributor ([9a013f5](https://github.com/ngneat/tailwind/commit/9a013f5fd8e430f2193f9598a49ab986367944de))
- add [@nartc](https://github.com/nartc) as a
  contributor ([5dde874](https://github.com/ngneat/tailwind/commit/5dde87423abbf375e605a048fda6fa4b4be2e9b1))
- add [@santoshyadavdev](https://github.com/santoshyadavdev) as a
  contributor ([b66d89c](https://github.com/ngneat/tailwind/commit/b66d89cf46ef9068136265aca990896598da61ea))
- add @Bilal-io as a
  contributor ([0a43ad3](https://github.com/ngneat/tailwind/commit/0a43ad336e837f84eeb3db496e016cd539102567))
- add @NetanelBasal as a
  contributor ([13ed3a4](https://github.com/ngneat/tailwind/commit/13ed3a46ccef24dcef0f1350ff391997bb070997))

### Features/Enhancements

- move to Nx ([9382261](https://github.com/ngneat/tailwind/commit/9382261cc1fa8ec91688128bf5f936d3f86212ab))

* Nx Workspace provides support for schematics via `nx-plugin` out of the box.
* Jest testing also comes by default and E2E testings for schematics is setup by default.
* Support for `Builders` is also available.

### Chores

- clean up idea
  workspace ([37133e7](https://github.com/ngneat/tailwind/commit/37133e731424cd4bbecf4aa99d82bd10a34faba2))

### CI/CD

- adjust github actions ([e88d78d](https://github.com/ngneat/tailwind/commit/e88d78d89d9cd6064a7600f02ef487da4fa6e80e))

## [1.1.0](https://github.com/ngneat/tailwind/compare/v1.0.8...v1.1.0) (2020-11-20)

### Features

- adds autoprefixer ([e081912](https://github.com/ngneat/tailwind/commit/e0819124d4bef4c226d30fa9a7d05bced7974f9a))
- Adds darkMode to the
  template ([af6cc0d](https://github.com/ngneat/tailwind/commit/af6cc0dfb5ef94490b5272619191bc63aac4739b))

### [1.0.8](https://github.com/ngneat/tailwind/compare/v1.0.7...v1.0.8) (2020-10-28)

### Bug Fixes

- revert change on adding import to
  styles.scss ([c30cbf4](https://github.com/ngneat/tailwind/commit/c30cbf4f2f496b7e183b1c208495ba339915372e))

### [1.0.7](https://github.com/ngneat/tailwind/compare/v1.0.6...v1.0.7) (2020-10-21)

### Bug Fixes

- fix publish actions ([d5a6749](https://github.com/ngneat/tailwind/commit/d5a67499b0deec42248e26a0b84192f12f024106))

### [1.0.6](https://github.com/ngneat/tailwind/compare/v1.0.5...v1.0.6) (2020-10-21)

### Bug Fixes

- fix publish actions ([aa1318c](https://github.com/ngneat/tailwind/commit/aa1318c01945bf7ab1c4fe61204622959bcde870))

### [1.0.5](https://github.com/ngneat/tailwind/compare/v1.0.4...v1.0.5) (2020-10-21)

### Bug Fixes

- fix publish action run
  steps ([8131716](https://github.com/ngneat/tailwind/commit/8131716f0ed45f23a71977fa7dc2c500aeda3718))

### [1.0.4](https://github.com/ngneat/tailwind/compare/v1.0.3...v1.0.4) (2020-10-21)

### Bug Fixes

- fix publish action ([cb90520](https://github.com/ngneat/tailwind/commit/cb905203c9ea6d7ad5f7968525dd182aa70505d7))

### [1.0.3](https://github.com/ngneat/tailwind/compare/v1.0.2...v1.0.3) (2020-10-21)

### Bug Fixes

- misc. adjustments ([9199fe1](https://github.com/ngneat/tailwind/commit/9199fe1d39e1f6bad5b0b0d03dc79e1e1e8c726b))

### [1.0.2](https://github.com/ngneat/tailwind/compare/v1.0.1...v1.0.2) (2020-10-21)

### Bug Fixes

- add postcss to deps
  array ([77dc498](https://github.com/ngneat/tailwind/commit/77dc4986e867372c6fa70c5c81041c6cc83697ec)),
  closes [#13](https://github.com/ngneat/tailwind/issues/13)

### [1.0.1](https://github.com/ngneat/tailwind/compare/v1.0.0...v1.0.1) (2020-09-09)

### Bug Fixes

- fix webpack config for postcss-loader
  v4.0.1 ([6f40cd9](https://github.com/ngneat/tailwind/commit/6f40cd91d90804b9dbec8870e1b0f4dcf98c83aa)),
  closes [#3](https://github.com/ngneat/tailwind/issues/3)
