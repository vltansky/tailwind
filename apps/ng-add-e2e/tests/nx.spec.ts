import {
  cleanup,
  runCommandAsync,
  runNxCommandAsync,
} from '@nrwl/nx-plugin/testing';
import {
  detectPackageManager,
  getPackageManagerInstallCommand,
} from '@nrwl/workspace/src/utils/detect-package-manager';
import { ensureNgProject, ensureNxProject } from '../utils';

jest.setTimeout(999999);

describe('nx e2e', () => {
  // afterEach(() => {
  //   cleanup();
  // });

  it('should work with nx', async (done) => {
    ensureNxProject('@ngneat/tailwind', 'dist/libs/ng-add');

    await runCommandAsync(
      `${getPackageManagerInstallCommand(
        detectPackageManager(),
        true
      )} @nrwl/angular`
    );

    await runNxCommandAsync(
      'generate @nrwl/angular:application nx-test --e2eTestRunner=none --skipTests --unitTestRunner=none --inlineStyle --inlineTemplate --directory=sub --linter=eslint --style=scss --routing=false'
    );

    await runNxCommandAsync(`generate @ngneat/tailwind:ng-add`);

    done();
  });

  it('should work with nx + angular cli', async (done) => {
    ensureNxProject('@ngneat/tailwind', 'dist/libs/ng-add', 'ng');

    await runCommandAsync(
      `${getPackageManagerInstallCommand(
        detectPackageManager(),
        true
      )} @nrwl/angular`
    );

    await runNxCommandAsync(
      'generate @nrwl/angular:application nx-test --e2eTestRunner=none --skipTests --unitTestRunner=none --inlineStyle --inlineTemplate --directory=sub --linter=eslint --style=scss --routing=false'
    );

    await runNxCommandAsync(`generate @ngneat/tailwind:ng-add`);

    done();
  });

  fit('should work with angular cli', async (done) => {
    ensureNgProject('@ngneat/tailwind', 'dist/libs/ng-add');
    await runNxCommandAsync(`generate @ngneat/tailwind:ng-add`);

    done();
  });
});
