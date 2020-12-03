# Angular Tailwind CSS Schematics

This schematic will add [Tailwind CSS](https://tailwindcss.com/) to your [Angular](https://angular.io) application.

![Angular Tailwind CSS Schematics][demo]

[demo]: assets/tailwind-gif.gif

## Usage

```
ng add @ngneat/tailwind
```

## Usage with Nx

In Nx, you can either use `AngularCLI` or `NxCLI`. If you setup your Nx Workspace to use `AngularCLI`, the usage is the
same as above. If you setup your Nx Workspace with `NxCLI`, follow the steps:

Install `@ngneat/tailwind` first:

```
npm i -D @ngneat/tailwind
yarn add -D @ngneat/tailwind
```

then execute the schematics:

```
nx generate @ngneat/tailwind:nx-setup
```

## Purge

`@ngneat/tailwind` uses built-in `purge` functionality by `tailwindcss` (under the hood, it is [postcss-purgecss](https://github.com/FullHuman/purgecss/tree/master/packages/postcss-purgecss)). By default, `@ngneat/tailwind` sets the `content` to any **HTML** and any **TS** files in the project.

This behavior can be modified as the consumers see fit.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://nartc.me/"><img src="https://avatars1.githubusercontent.com/u/25516557?v=4?s=75" width="75px;" alt=""/><br /><sub><b>Chau Tran</b></sub></a><br /><a href="#question-nartc" title="Answering Questions">💬</a> <a href="https://github.com/ngneat/tailwind/commits?author=nartc" title="Code">💻</a> <a href="https://github.com/ngneat/tailwind/commits?author=nartc" title="Documentation">📖</a> <a href="#example-nartc" title="Examples">💡</a> <a href="#ideas-nartc" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-nartc" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-nartc" title="Maintenance">🚧</a> <a href="https://github.com/ngneat/tailwind/pulls?q=is%3Apr+reviewed-by%3Anartc" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/ngneat/tailwind/commits?author=nartc" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://www.netbasal.com/"><img src="https://avatars1.githubusercontent.com/u/6745730?v=4?s=75" width="75px;" alt=""/><br /><sub><b>Netanel Basal</b></sub></a><br /><a href="https://github.com/ngneat/tailwind/commits?author=NetanelBasal" title="Code">💻</a> <a href="#ideas-NetanelBasal" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://www.santoshyadav.dev/"><img src="https://avatars3.githubusercontent.com/u/11923975?v=4?s=75" width="75px;" alt=""/><br /><sub><b>Santosh Yadav</b></sub></a><br /><a href="#ideas-santoshyadavdev" title="Ideas, Planning, & Feedback">🤔</a> <a href="#mentoring-santoshyadavdev" title="Mentoring">🧑‍🏫</a></td>
    <td align="center"><a href="https://bilalkhoukhi.com/"><img src="https://avatars1.githubusercontent.com/u/4480581?v=4?s=75" width="75px;" alt=""/><br /><sub><b>BK</b></sub></a><br /><a href="#ideas-Bilal-io" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/beeman"><img src="https://avatars3.githubusercontent.com/u/36491?v=4?s=75" width="75px;" alt=""/><br /><sub><b>beeman</b></sub></a><br /><a href="#ideas-beeman" title="Ideas, Planning, & Feedback">🤔</a> <a href="#mentoring-beeman" title="Mentoring">🧑‍🏫</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
