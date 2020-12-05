## Contributing

- Fork this repo and clone the fork on your machine.
- Run `npm install` to install all the dependencies
- Start working on changes

### Structure

```
_apps
 |__tailwind-e2e (e2e tests)
_libs
 |__tailwind
    |__src
       |__schematics
          |__ng-add (AngularCLI schematics)
          |__nx-setup (NxCLI schematics)
          |__files (files template to be generated)
          |__specs (unit tests)
          |__schema.d.ts (interface)
       |__constants (constants used in the project)
       |__utils (utilities functions)
       |__collection.json (schematics configuration)
       |__package.json (package.json of @ngneat/tailwind which will be published to npm)
```

### Commit

- Run `git add .` to stage your changes
- Run `npm run commit` to start Conventional Commit flow

### Commit Hooks

pre-commit will execute `npm run lint` and `pretty-quick` to lint and reformat.pre-commit does not run Unit Tests
because Unit Tests will be ran in Github Actions. Feel free to run the Unit Tests with `npm run test` to test your
changes

### E2E Tests

Please run `npm run e2e` to run E2E tests before pushing

### Updating README

`README` is in two places at the moment: root and `libs/tailwind/README.md`. The one in root is the one displayed on
Github while the one in `libs/tailwind` is being used on `npm`. When you make changes to `README`, make sure to update
both.

> A script can be created to automating this.

### PR

When everything passes and looks good, make a PR. Thanks for your contribution.
