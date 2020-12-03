import {
  checkFilesExist,
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

describe('tailwind e2e', () => {
  const pluginNpmName = '@ngneat/tailwind';
  const pluginDistPath = 'dist/libs/tailwind';

  afterEach(() => {
    cleanup();
  });

  it('should work with Angular + Nx CLI in Nx', async (done) => {
    ensureNxProject(pluginNpmName, pluginDistPath);

    await runCommandAsync(
      `${getPackageManagerInstallCommand(
        detectPackageManager(),
        true
      )} @nrwl/angular`
    );

    await runNxCommandAsync(
      'generate @nrwl/angular:application nx-test --e2eTestRunner=none --skipTests --unitTestRunner=none --inlineStyle --inlineTemplate --directory=sub --linter=eslint --style=scss --routing=false'
    );

    await runNxCommandAsync(`generate @ngneat/tailwind:nx-setup`);

    expect(() =>
      checkFilesExist('tailwind.config.js', 'webpack.config.js')
    ).not.toThrow();

    done();
  });

  it('should work with Angular + AngularCLI in Nx (using nx-setup)', async (done) => {
    ensureNxProject(pluginNpmName, pluginDistPath, 'ng');

    await runCommandAsync(
      `${getPackageManagerInstallCommand(
        detectPackageManager(),
        true
      )} @nrwl/angular`
    );

    await runNxCommandAsync(
      'generate @nrwl/angular:application nx-test --e2eTestRunner=none --skipTests --unitTestRunner=none --inlineStyle --inlineTemplate --directory=sub --linter=eslint --style=scss --routing=false'
    );

    await runNxCommandAsync(`generate @ngneat/tailwind:nx-setup`);

    expect(() =>
      checkFilesExist('tailwind.config.js', 'webpack.config.js')
    ).not.toThrow();

    done();
  });

  it('should work with Angular + AngularCLI in Nx (using ng-add)', async (done) => {
    ensureNxProject(pluginNpmName, pluginDistPath, 'ng');

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

    expect(() =>
      checkFilesExist('tailwind.config.js', 'webpack.config.js')
    ).not.toThrow();

    done();
  });

  it('should work with Angular CLI project', async (done) => {
    ensureNgProject(pluginNpmName, pluginDistPath);
    await runCommandAsync(`ng add @ngneat/tailwind`);

    expect(() =>
      checkFilesExist('tailwind.config.js', 'webpack.config.js')
    ).not.toThrow();

    done();
  });
});
