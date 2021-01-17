import {
  checkFilesExist,
  cleanup,
  readFile,
  renameFile,
  runCommand,
  runCommandAsync,
  runNxCommandAsync,
} from '@nrwl/nx-plugin/testing';
import {
  detectPackageManager,
  getPackageManagerInstallCommand,
} from '@nrwl/workspace/src/utils/detect-package-manager';
import { checkStylesConfig, checkStylesFile, createStylesFiles, ensureNgProject, ensureNxProject, removeTailwindFiles, useStylesConfig } from '../utils';

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

  describe('styles', () => {
    beforeAll(() => {
      ensureNgProject(pluginNpmName, pluginDistPath);
      createStylesFiles();
    });

    test.each([
      'global.css',
      'global.scss',
      'global.less',
      'styles.less',
      'styles.css'
    ])('should patch %s', (name) => {
      const fileName = `src/${name}`;
      useStylesConfig([fileName]);
      runCommand(`ng add @ngneat/tailwind --defaults`);

      expect(() =>
        checkStylesFile(fileName)
      ).not.toThrow();
    })

    afterEach(() => {
      removeTailwindFiles();
    })

    describe('wrong.css', () =>{
      beforeAll(async() => {
        useStylesConfig(['src/wrong.css']);
        await runCommandAsync(`ng add @ngneat/tailwind --defaults`);
      });

      it('should not patch wrong.css', () => {
        expect(() =>
          checkStylesFile('src/wrong.css')
        ).toThrow();
      });

      it('should set styles config to node_modules/tailwindcss/tailwind.css', async () => {
        expect(() =>
          checkStylesConfig(true)
        ).not.toThrow();
      });

    })
  });
});
